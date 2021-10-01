import os
import subprocess
from pathlib import Path

import isort


def sort_imports() -> None:
    for root, dirs, files in os.walk(Path(__file__).parent):
        for file in files:
            if file.endswith(".py"):
                isort.SortImports(os.path.join(root, file))


def run_black() -> None:
    root = Path(__file__).parent
    subprocess.Popen(["black", root])


if __name__ == "__main__":
    sort_imports()
    run_black()
