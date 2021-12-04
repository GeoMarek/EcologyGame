## Uruchamianie aplikacji

**Przydatne komendy**
```
.\code_format_fix.bat   # wykonuje automatyczne formatowanie kodu
.\run_application.bat   #  uruchamia całą aplikację
```

**Inicjacja bazy danych**
Po wykonaniu zapytania, serwer tworzy w bazie podstawowe tabele i dodaje pulę przedmiotów w kursie
```
http://localhost:8000/course/admin/admin/eq/
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

## Dodawanie zmian w dokumentacji

Aby dodawać zmiany w dokumentacji trzeba zainstalować:
- [Kompilator LaTeX](https://anorien.csc.warwick.ac.uk/mirrors/CTAN/systems/win32/miktex/setup/windows-x64/basic-miktex-21.6-x64.exe)
- [TeX Maker](https://www.xm1math.net/texmaker/assets/files/Texmaker_5.0.4_Win_x64.msi)

Poszczególne rozdziały i podrozdziały podzielone są kod źródłowy i obrazy:
- `project/chapters/chapter_rozdzial_podrozdzial_nazwa` - kod źródłowy
- `project/img/` - folder z utworzony podkatalogami dla każdego z rozdziałów
