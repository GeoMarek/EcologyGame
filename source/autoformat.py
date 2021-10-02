import os
import subprocess

import isort


def sort_imports() -> None:
    for root, dirs, files in os.walk("backend"):
        for file in files:
            if file.endswith(".py"):
                isort.SortImports(os.path.join(root, file))


def run_black() -> None:
    subprocess.Popen(["black", "backend"])


def js_beautify() -> None:
    for root, dirs, files in os.walk("frontend"):
        if "frontend\\node_module" in root:
            continue
        for file in files:
            if file.endswith(".js"):
                # subprocess.Popen(["js-beautify", "-r", file])
                pass
    subprocess.Popen(["npm", "--version"])


if __name__ == "__main__":
    # sort_imports()
    # run_black()
    js_beautify()
