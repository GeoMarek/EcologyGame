## Uruchamianie aplikacji

**Backend**
```
python -m pip install -r requirements.txt
python .\manage.py makemigrations
python .\manage.py migrate
python .\manage.py runserver
```
**Frontend**
```
npm install
npm start
```

## Dodawanie zmian w aplikacji

Zmiany w kodzie i nowe funkcjonalności tworzymy na osobnym branchu. 
Po ukończeniu pracy tworzymy nowy pull request i czekamy na potwierdzenie 
od co najmniej jednej osoby. 

Przed utworzeniem pull requesta należy uruchomić autoformatowanie kodu: 
```bash
# python (isort + black)
python autoformat.py
# javascript (prettier)
npx prettier --write --config .prettierrc.yaml --write src
```

## Tworzenie dokumentacji

Aby dodawać zmiany w dokumentacji trzeba zainstalować:
- [Kompilator LateX](https://anorien.csc.warwick.ac.uk/mirrors/CTAN/systems/win32/miktex/setup/windows-x64/basic-miktex-21.6-x64.exe)
- [Tex Maker](https://www.xm1math.net/texmaker/assets/files/Texmaker_5.0.4_Win_x64.msi)

Poszczególne rozdziały i podrozdziały podzielone są kod źródłowy i obrazy:
- `project/chapters/chapter_rozdzial_podrozdzial_nazwa` - kod źródłowy
- `project/img/` - folder z utworzony podkatalogami dla każdego z rozdziałów

Aktualny stan dokumentu można zobaczyć [tutaj](https://github.com/GeoMarek/EcologyGame/blob/dev/docs/project/main_document.pdf)
Różne przydatne pliki można znaleźć [tutaj](https://github.com/GeoMarek/EcologyGame/blob/dev/docs/documents)

## Hinty do pisania kodu

**Tworzenie nowej aplikacji w backendzie**

Generujemy folder dla nowej aplikacji

```bat
python .\manage.py startapp new_app_name
```
Dodanie aplikacji do projektu w pliku `backend\ecosite\settings.py`
```python
INSTALLED_APPS = [
    'django.contrib.admin',
    'django.contrib.auth',
    ...
    'new_app_name'
]
```
Dodanie adresu aplikacji w pliku `backend\ecosite\urls.py`
```python
urlpatterns = [
    path('auth/', include('djoser.urls')),
    path('auth/', include('djoser.urls.jwt')),
    ...
    path('new_app/', include('new_app_name.urls')),
]
```
Przechodzimy do folderu `backend\new_app_name`
- `models.py` - tutaj definujemy klasy mapowane na bazę danych
- `serilizers.py` - to muszę jeszce ogarnąć różnicę pomiędzy courses a profile
- `urls.py` - tutaj definiujemy ścieżki do zapytań
- `views.py` - tutaj definiujemy zapytania do bazy danych

**Tworzenie Frontendu**

Wygląd strony
- `App.js` - odpowiada za tworzenie podstron
- `/containers` - zawiera strony (tutaj robimy np plik. Tasks.js)
- `/components` - składniki na stronie (grupujemy je w folderach)

Logika strony
- Actions
    - `tasks.js` - zapytania do bazy danych, rezultat przypisany do payload
    - `types.js` - stałe zawierające informacje o rezultacie
- Reducers
    - `index.js` - tak żeby wiedział o istnieniu tego co robimy
    - `tasks.js` - "globalne state" z nich będziemy korzystać
