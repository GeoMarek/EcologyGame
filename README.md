## Uruchamianie aplikacji

**Uruchomienie całego środowiska**
```
.\autostart.bat
```

**Serwer odpowiedzialny za backend**
```
cd .\source\backend
python -m pip install -r requirements.txt
python .\manage.py makemigrations
python .\manage.py migrate
python .\manage.py runserver
python .\manage.py flush
```
**Serwer odpowiedzialny za frontend**
```
cd .\source\frontend
npm install
npm start
```

## Dodawanie zmian

Zmiany w kodzie i nowe funkcjonalności tworzymy na osobnym branchu. 
Po ukończeniu pracy tworzymy nowy pull request i czekamy na potwierdzenie 
od co najmniej jednej osoby. 

Zalecam dodawać przedrostek do nazwy brancha, tak żeby obejmował zakres funkcjonalności. Dzięki temu nazwy będą jasno mówić, czego dany branch dotyczy. Przykładowo:
```bash
pretty\courses # zmiany poprawiające wygląd kursów
pretty\profile # zmiany poprawiające wygląd profilu
docs\class_diagram_fix # poprawki w diagramie klas
```

Przed utworzeniem pull requesta należy uruchomić autoformatowanie kodu: 
```bash
# python (isort + black)
python autoformat.py
# javascript (prettier)
npx prettier --write --config .prettierrc.yaml src
```

Aby dodawać zmiany w dokumentacji trzeba zainstalować:
- [Kompilator LaTeX](https://anorien.csc.warwick.ac.uk/mirrors/CTAN/systems/win32/miktex/setup/windows-x64/basic-miktex-21.6-x64.exe)
- [TeX Maker](https://www.xm1math.net/texmaker/assets/files/Texmaker_5.0.4_Win_x64.msi)

Poszczególne rozdziały i podrozdziały podzielone są kod źródłowy i obrazy:
- `project/chapters/chapter_rozdzial_podrozdzial_nazwa` - kod źródłowy
- `project/img/` - folder z utworzony podkatalogami dla każdego z rozdziałów
