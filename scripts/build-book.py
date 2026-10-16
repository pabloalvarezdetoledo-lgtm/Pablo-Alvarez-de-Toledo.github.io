#!/usr/bin/env python3
"""Regenerate the book section of the site from the LaTeX sources.

Usage:  python scripts/build-book.py <path-to-Libro-folder>

Requires pandoc (>=3) and, for the PDFs, a TeX distribution with latexmk,
biblatex and biber. For every chapter listed in scripts/chapters.tsv it:
  1. converts capitulos/<file>.tex to HTML (citations resolved with the .bib)
     and writes src/book/chapters/<slug>.html
  2. compiles a standalone PDF to public/files/book/<slug>.pdf
The full-book PDF (public/files/book/libro-completo.pdf) is compiled separately
from Libro.tex with latexmk and copied by hand.
Pass --no-pdf to skip the LaTeX step.
"""
import re, subprocess, sys, shutil, pathlib, tempfile

HERE = pathlib.Path(__file__).resolve().parent
SITE = HERE.parent
OUT_HTML = SITE / "src" / "book" / "chapters"
OUT_PDF = SITE / "public" / "files" / "book"


def bib_file(libro: pathlib.Path) -> pathlib.Path:
    # extra.bib (if present next to referencias.bib) is appended for keys missing from the main file
    refs = libro / "referencias.bib"
    extra = HERE / "extra.bib"
    merged = libro / "_web_refs.bib"
    merged.write_text(refs.read_text(encoding="utf8") + "\n" + (extra.read_text(encoding="utf8") if extra.exists() else ""), encoding="utf8")
    return merged


def prep_tex(src: str) -> str:
    s = re.sub(r"\\begingroup|\\endgroup|\\spaceskip=\\fontdimen2\\font plus 0\.15em minus 0\.1em", "", src)
    s = re.sub(r"\\addcontentsline\{[^}]*\}\{[^}]*\}\{[^}]*\}", "", s)
    s = re.sub(r"\\begin\{equation\}\s*\\boxed\{\\begin\{minipage\}\{[^}]*\}\\centering\s*(.*?)\\end\{minipage\}\}\s*\\end\{equation\}",
               r"\\begin{quote}\\textbf{\1}\\end{quote}", s, flags=re.S)
    return (HERE / "macros.tex").read_text(encoding="utf8") + s


def post_html(h: str) -> str:
    h = re.sub(r"<h1[^>]*>.*?</h1>", "", h, count=1, flags=re.S)  # chapter title is rendered by the page
    h = re.sub(r'<h1 class="unnumbered" id="bibliography">(.*?)</h1>', r'<h2 class="chapter-refs-title" id="referencias">\1</h2>', h, flags=re.S)
    return h.strip() + "\n"


def main():
    libro = pathlib.Path(sys.argv[1]).resolve()
    no_pdf = "--no-pdf" in sys.argv
    OUT_HTML.mkdir(parents=True, exist_ok=True)
    OUT_PDF.mkdir(parents=True, exist_ok=True)
    bib = bib_file(libro)
    rows = [l.split("\t") for l in (HERE / "chapters.tsv").read_text(encoding="utf8").splitlines() if l.strip()]
    for n, slug, name in rows:
        src = (libro / "capitulos" / f"{name}.tex").read_text(encoding="utf8")
        with tempfile.NamedTemporaryFile("w", suffix=".tex", delete=False, encoding="utf8") as tmp:
            tmp.write(prep_tex(src))
        html = subprocess.run(["pandoc", tmp.name, "-f", "latex", "-t", "html5", "--citeproc",
                               f"--bibliography={bib}", f"--csl={HERE / 'chicago-author-date.csl'}",
                               "-M", "lang=es-ES", "-M", "reference-section-title=Referencias", "--mathml"],
                              capture_output=True, text=True, check=True).stdout
        (OUT_HTML / f"{slug}.html").write_text(post_html(html), encoding="utf8")
        print("html", slug)
        if no_pdf:
            continue
        wrapper = libro / f"_web_{slug}.tex"
        wrapper.write_text(
            "\\documentclass[11pt,twoside,openany]{book}\n\\input{preambulo/preambulo}\n"
            f"\\addbibresource{{{bib.name}}}\n\\begin{{document}}\n\\setcounter{{chapter}}{{{int(n) - 1}}}\n"
            f"\\input{{capitulos/{name}}}\n\\printbibliography[heading=bibintoc,title={{Bibliografía del capítulo}}]\n\\end{{document}}\n",
            encoding="utf8")
        subprocess.run(["latexmk", "-pdf", "-interaction=nonstopmode", "-f", wrapper.name], cwd=libro, capture_output=True)
        shutil.copy(libro / f"_web_{slug}.pdf", OUT_PDF / f"{slug}.pdf")
        print("pdf ", slug)


if __name__ == "__main__":
    main()
