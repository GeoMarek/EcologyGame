# Przypadki użycia
|   |   |   | 
|---|---|---|
| :heavy_check_mark: 01  [Przeglądanie zarządzanych kursów](#Przeglądanie-zarządzanych-kursów) | :heavy_check_mark: 17 [Przeglądanie odpowiedzi](#Przeglądanie-odpowiedzi) | 33 [Przeglądanie strony wydarzenia](#Przeglądanie-strony-wydarzenia)
| :heavy_check_mark: 02 [Wybranie kursu](#Wybranie-kursu) | :heavy_check_mark: 18 [Modyfikacja aktywności](#Modyfikacja-aktywności) | 34 [Przeglądanie zakładki zadań](#Przeglądanie-zakładki-zadań)
| :heavy_check_mark: 03 [Dodanie formy aktywności](#Dodanie-formy-aktywności) | :heavy_check_mark: 19 [Wybranie uczestnika](#Wybranie-uczestnika) | 35 [Przeglądanie strony bohatera](#Przeglądanie-strony-bohatera)
| :heavy_check_mark: 04 [Podanie atrybutów](#Podanie-atrybutów) | :heavy_check_mark: 20 [Sprawdzenie odpowiedzi](#Sprawdzenie-odpowiedzi) | 36 [Przeglądanie strony nawyków](#Przeglądanie-strony-nawyków)
| :heavy_check_mark: 05 [Dodanie wydarzenia](#Dodanie-wydarzenia) | :heavy_check_mark: 21 [Zarządzanie ciekawostkami](#Zarządzanie-ciekawostkami) | 37 [Wybranie przedmiotu](#Wybranie-przedmiotu)
| :heavy_check_mark: 06 [Dodanie nawyku](#Dodanie-nawyku) | :heavy_check_mark: 22 [Dodanie ciekawostki](#Dodanie-ciekawostki) | 38 [Wykonanie transakcji](#Wykonanie-transakcji)
| :heavy_check_mark: 07 [Dodanie zadania](#Dodanie-zadania) | :heavy_check_mark: 23 [Wybranie ciekawostki](#Wybranie=ciekawostki) | 39 [Wybranie powiadomienia](#Wybranie-powiadomienia)
| :heavy_check_mark: 08 [Dodanie pytania](#Dodanie-pytania) | :heavy_check_mark: 24 [Modyfikacja ciekawostki](#Modyfikacja-ciekawostki) | 40 Usunięto
| :heavy_check_mark: 09 [Zarządzanie użytkownikami](#Zarządzanie-użytkownikami) | :heavy_check_mark: 25 [Usuwanie ciekawostki](#Usuwanie-ciekawostki) | 41 [Wysłanie odpowiedzi](#Wysłanie-odpowiedzi)
| :heavy_check_mark: 10 [Zaproszenie uczestnika](#Zaproszenie-uczestnika) | :heavy_check_mark: 26 [Dodanie nowego kursu](#Dodanie-nowego-kursu) | 42 Usunięto
| :heavy_check_mark: 11 [Pobranie zestawienia zbiorowego](#Pobranie-zestawienia-zbiorowego) | :heavy_check_mark: 27 [Dołączenie do nowego kursu](#Dołączenie-do-nowego-kursu) | 43 [Wybranie aktywności](#Wybranie-aktywności)
| :heavy_check_mark: 12 [Wybranie uczestnika](#Wybranie-uczestnika) | 28 Usunięto | 44 [Wysłanie odpowiedzi](#Wysłanie-odpowiedzi)
| :heavy_check_mark: 13 [Wysłanie wiadomości](#Wysłanie-wiadomości) | :heavy_check_mark: 29 [Przeglądanie swoich kursów](#Pzeglądanie-swoich-kursów) | 45 [Obejrzenie wyników](#Obejrzenie-wyników)
| :heavy_check_mark: 14 [Wysłanie wiadomości zbiorowej](#Wysłanie-wiadomości-zbiorowej) | 30 [Wybranie kursu](#Wybranie-kursu) | 46 [Modyfikacja atrybutów](#Modyfikacja-atrybutów)
| :heavy_check_mark: 15 [Zarządzanie aktywnościami](#Zarządzanie-aktywnościami) | 31 [Wizyta w sklepie](#Wizyta-w-sklepie) | 47 [Przeglądanie ekwipunku](#Przeglądanie-ekwipunku)
| :heavy_check_mark: 16 [Wybranie aktywności](#Wybranie-aktywności) | 32 [Przeglądanie powiadomień](#Przeglądanie-powiadomień) | 48 [Wybranie przedmiotu](#Wybranie-przedmiotu)



[](#####################################################################################)
## Przeglądanie zarządzanych kursów 

Aktor: Nauczyciel

Warunki wstępne:
- użytkownik jest zalogowany
- użytkownik ma status nauczyciela

Przebieg domyślny:
- system wyświetla użytkownikowi zarządzane kursy w postaci listy odnośników

Przebieg alternatywny:
- brak

[Skocz do góry](#Przypadki-użycia)
[](#####################################################################################)
## Wybranie kursu 

Aktor: Nauczyciel

Warunki wstępne:
- użytkownik miał wyświetloną listę zarządzanych kursów

Przebieg domyślny:
- użytkownik klika w wybrany przez siebie odnośnik na liście
- zostaje przekierowany do strony wybranego kursu
- system wyświetla stronę kursu, czyli 4 zakładki opisujące dany kurs
- system wyświetla przycisk powrotu do listy kursów

Przebieg alternatywny:
- brak

[Skocz do góry](#Przypadki-użycia)
[](#####################################################################################)
## Dodanie formy aktywności

Aktor: Nauczyciel

Warunki wstępne:
- użytkownik w wybranym kursie wybrał zakładkę "dodawanie aktywności"

Przebieg domyślny:
- użytkownik na stronie kursu klika w zakładkę "dodawanie aktywności"
- system wyświetla okno dialogowe z pytaniem "czy chcesz dodać nową aktywność do kursu?"
- użytkownik wybiera opcję "tak"
- użytkownik zostaje przekierowany do strony z wypełnianiem atrybutów 

Przebieg alternatywny:
- użytkownik wybiera "nie" w oknie dialogu i zostaje przekierowany do strony kursu

[Skocz do góry](#Przypadki-użycia)
[](#####################################################################################)
## Podanie atrybutów

Aktor: 

Warunki wstępne:
- użytkownik w wybranym kursie wybrał zakładkę "dodawanie aktywności" i potwierdził

Przebieg domyślny:
- system wyświetla formularz do wypełnienia przez użytkownika
- użytkownik wypełnia wszystkie niezbędne pola, czyli m.in: nazwa i typ zadania, ilość punktów do zdobycia, okres przyjmowania odpowiedzi  
- użytkownik zatwierdza formularz przyciskiem "dodaj aktywność"
- użytkownik zostaje przekierowany na stronę dodawanie samej aktywności

Przebieg alternatywny:
- użytkownik wybiera opcję "anuluj" 
- system wyświetla pytanie z potwierdzeniem
- jeśli użytkownik wybierze "tak", zostaje przekierowany na stronę kursu
- jeśli użytkownik wybierze "nie", wraca do wypełniania atrybutów aktywności

[Skocz do góry](#Przypadki-użycia)
[](#####################################################################################)
## Dodanie wydarzenia

Aktor: Nauczyciel

Warunki wstępne:
- użytkownik wypełnił atrybuty nowej aktywności
- nowa aktywność miała oznaczony "typ zadania" jako "wydarzenie"

Przebieg domyślny:
- system wyświetla formularz do wypełnienia oraz pustą listę pytań 
- użytkownik wypełnia formularz i wpisuje do niego takie rzeczy jak opis wydarzenia, nagrodę do zdobycia i czas pomiędzy odpowiedziami
- użytkownik wybiera opcję w liście pytań "dodaj pytanie testowe do wydarzenia"
- po dodaniu pytań użytkownik wybiera przycisk "zatwierdź wydarzenie"
- wydarzenie zostaje dodane do kursu, a użytkownik jest przekierowany na stronę kursu

Przebieg alternatywny:
- brak

[Skocz do góry](#Przypadki-użycia)
[](#####################################################################################)
## Dodanie nawyku

Aktor: Nauczyciel

Warunki wstępne:
- użytkownik wypełnił atrybuty nowej aktywności
- nowa aktywność miała oznaczony "typ zadania" jako "nawyk"

Przebieg domyślny:
- system wyświetla formularz do wypełnienia
- użytkownik wprowadza podstawowe informacje o nawyku tj. opis nawyku, typ np. nawyk czy lista definicji 
- po wprowadzeniu podstawowych informacji użytkownik wybiera opcję "zatwierdź nawyk"
- nawyk zostaje dodany do kursu, a użytkownik jest przekierowany na stronę kursu

Przebieg alternatywny:
- brak

[Skocz do góry](#Przypadki-użycia)
[](#####################################################################################)
## Dodanie zadania

Aktor: Nauczyciel

Warunki wstępne:
- użytkownik wypełnił atrybuty nowej aktywności
- nowa aktywność miała oznaczony "typ zadania" jako "zadanie"

Przebieg domyślny:
- system wyświetla formularz do wypełnienia
- użytkownik wprowadza podstawowe informacje o zadaniu tj. opis i typ np. pytanie otwarte, zamknięte, przesłanie pliku etc.
- po wprowadzeniu podstawowych informacji użytkownik wybiera opcję "przejdź dalej"
- system wyświetla odpowiedni formularz w zależności wybranego typu zadania, przykładowo
  - dla zadania zamkniętego treść, 3 odpowiedzi niepoprawne i 1 odpowiedź poprawną
  - dla zadania otwartego limit znaków, przykładowa poprawna odpowiedź, wskazówka 
- użytkownik po wypełnieniu formularza zatwierdza przyciskiem "zatwierdź zadanie"
- zadanie zostaje dodane do kursu, a użytkownik jest przekierowany na stronę kursu

Przebieg alternatywny:
- brak

[Skocz do góry](#Przypadki-użycia)
[](#####################################################################################)
## Dodanie pytania

Aktor: Nauczyciel 

Warunki wstępne:
- użytkownik podczas tworzenia wydarzenia wybrał opcję "dodaj pytanie testowe do wydarzenia"

Przebieg domyślny:
- system wyświetla formularz do wypełnienia
- użytkownik wypełnia formularz: treść pytania, 3 nieprawidłowe odpowiedzi i jedną prawidłową
- użytkownik zatwierdza dodanie pytania
- użytkownik zostaje przekierowany na stronę tworzenia wydarzenia
- treść pytania pojawia się na liście pytań

Przebieg alternatywny:
- brak

[Skocz do góry](#Przypadki-użycia)
[](#####################################################################################)
## Zarządzanie użytkownikami

Aktor: Nauczyciel

Warunki wstępne:
- użytkownik w wybranym kursie wybrał zakładkę "zarządzanie użytkownikami"

Przebieg domyślny:
- system wyświetla stronę zarządzania użytkownikami:
  - lista dodanych do kursu użytkowników
  - przycisk do pobrania zestawienia 
  - przycisk do wysłania grupowej wiadomości
  - przycisk do generowania zaproszenia do kursu 
  - przycisk powrotu do strony kursu

Przebieg alternatywny:
- brak

[Skocz do góry](#Przypadki-użycia)
[](#####################################################################################)
## Zaproszenie uczestnika

Aktor: Nauczyciel

Warunki wstępne:
- użytkownik na stronie zarządzania użytkownikami przycisk "zaproś do kursu"

Przebieg domyślny:
- system wyświetla formularz do wypełnienia (imię, nazwisko, adres mailowy)
- użytkownik wprowadza wszystkie informacje i zatwierdza przyciskiem
- zapraszony uczeń zostaje dodany do listy ze statusem "niezapisany"
- system wysyła email z kodem dostępu do kursu na podany adres mailowy

Przebieg alternatywny:
- w trakcie wypełniania formularza użytkownik anuluje operację i zostaje przekierowany do strony zarządzania użytkownikami

[Skocz do góry](#Przypadki-użycia)
[](#####################################################################################)
## Pobranie zestawienia zbiorowego

Aktor: Nauczyciel

Warunki wstępne:
- użytkownik na stronie zarządzania uzytkownikami wybrał przycisk "pobierz zestawienie grupowe"

Przebieg domyślny:
- system wyświetla formularz, w którym użytkownik wybiera co ma być zawarte w raporcie np. ilość zdobytych punktów czy wykonanych zadań dodatkowych
- użytkownik zatwierdza rozszerzenie i plik zostaje pobrany na urządzenie

Przebieg alternatywny:
- brak

[Skocz do góry](#Przypadki-użycia)
[](#####################################################################################)
## Wybranie uczestnika

Aktor: Nauczyciel

Warunki wstępne:
- użytkownik na stronie zarządzania użytkownikami wybrał na liście jednego z uczestników

Przebieg domyślny:
- system przekierowuje na stronę danego użytkownika
- na stronie użytkownika znajdują się wszystkie informacje o jego postępach podczas kursu oraz przycisk do wysłania wiadomości
- po obejrzeniu statystyk użytkownik ma możliwość powrotu do listy użytkowników

Przebieg alternatywny:
- brak

[Skocz do góry](#Przypadki-użycia)
[](#####################################################################################)
## Wysłanie wiadomości

Aktor: Nauczyciel, Uczeń

Warunki wstępne:
- użytkownik wybrał przycisk "wyślij wiadomość" lub "odpowiedz na tą wiadomość"

Przebieg domyślny:
- system wyświetla formularz, który użytkownik musi wypełnić
- użytkownik uzupełnia treść wiadomości 
- użytkownik wysyła wiadomość poprzez przycisk "wyślij"

Przebieg alternatywny:
- użytkownik może anulować wysyłanie wiadomości w trakcie jej pisania przyciskiem "anuluj"
- użytkownik może załączyć do wiadomości wybrane przez siebie pliki

[Skocz do góry](#Przypadki-użycia)
[](#####################################################################################)
## Wysłanie wiadomości zbiorowej

Aktor: Nauczyciel

Warunki wstępne:
- użytkownik wybrał przycisk "wyślij grupową wiadomość"

Przebieg domyślny:
- system wyświetla formularz, który użytkownik musi wypełnić
- użytkownik uzupełnia treść wiadomości 
- użytkownik wysyła wiadomość poprzez przycisk "wyślij"

Przebieg alternatywny:
- użytkownik może anulować wysyłanie wiadomości w trakcie jej pisania przyciskiem "anuluj"
- użytkownik może załączyć do wiadomości wybrane przez siebie pliki

[Skocz do góry](#Przypadki-użycia)
[](#####################################################################################)
## Zarządzanie aktywnościami

Aktor: Nauczyciel

Warunki wstępne:
- na stronie kursu użytkownik wybrał zakładkę "zarządzanie aktywnościami"

Przebieg domyślny:
- system wyświetla wszystkie aktywności kursu w postaci listy odnośników wraz z typem i nazwą danej aktywności 

Przebieg alternatywny:
- brak

[Skocz do góry](#Przypadki-użycia)
[](#####################################################################################)
## Wybranie aktywności

Aktor: Nauczyciel

Warunki wstępne:
- użytkownik kliknął w odnośnik do danej aktywności 

Przebieg domyślny:
- system wyświetla informacje o danej aktywności - przykładowo treść, termin zgłaszania odpowiedzi, czy ilość wysłanych i sprawdzonych prac
- oprócz tego system wyświetla również przycisk modyfikowania aktywności oraz przeglądania odpowiedzi

Przebieg alternatywny:
- brak

[Skocz do góry](#Przypadki-użycia)
[](#####################################################################################)
## Przeglądanie odpowiedzi

Aktor: Nauczyciel

Warunki wstępne:
- użytkownik podczas przeglądania strony danej aktywności wybrał opcję "przeglądaj odpowiedzi"

Przebieg domyślny:
- system wyświetla wszystkie odpowiedzi do danej aktywności w postaci listy odnośników oznaczonych za pomocą ich autorów 
- system wyświetla również oznaczono listę osób, która odpowiedzi nie nadesłała

Przebieg alternatywny:
- brak

[Skocz do góry](#Przypadki-użycia)
[](#####################################################################################)
## Modyfikacja aktywności

Aktor: Nauczyciel

Warunki wstępne:
- użytkownik wybrał opcję "modyfikuj aktywność"

Przebieg domyślny:
- system wyświetla uzupełniony formularz aktywności
- użytkownik wprowadza ewentualne zmiany i uwagi i zatwierdza przyciskiem "zatwierdź zmiany"

Przebieg alternatywny:
- użytkownik może nie zatwierdzić zmian, lecz je anulować - zostanie wówczas przekierowany do strony danej aktywności

[Skocz do góry](#Przypadki-użycia)
[](#####################################################################################)
## Wybranie uczestnika

Aktor: Nauczyciel

Warunki wstępne:
- użytkownik podczas przeglądania odpowiedzi wybrał jednego z uczestników

Przebieg domyślny:
- system wyświetla informacje na temat odpowiedzi przesłanej przez wybranego uczestnika oraz przycisk umożliwiający sprawdzenie odpowiedzi

Przebieg alternatywny:
- brak

[Skocz do góry](#Przypadki-użycia)
[](#####################################################################################)
## Sprawdzenie odpowiedzi

Aktor: Nauczyciel

Warunki wstępne:
- użytkownik wybrał 

Przebieg domyślny:
- system wyświetla odpowiedź udzieloną przez uczestnika kursu
- użytkownik sprawdza i weryfikuje poprawność odpowiedzi oraz przydziela punkty
- użytkownik zatwierdza prace przyciskiem "zatwierdź ocenę"
- użytkownik zostaje przekierowany na stronę z listą odpowiedzi udzielonych na wybrane zadanie

Przebieg alternatywny:
- użytkownik może wybrać opcję "anuluj ocenę" i użytkownik zostaje przekierowany do strony z daną odpowiedzią

[Skocz do góry](#Przypadki-użycia)
[](#####################################################################################)
## Zarządzanie ciekawostkami

Aktor: Nauczyciel

Warunki wstępne:
- użytkownik w wybranym kursie wybrał zakładkę "zarządzanie ciekawostkami"

Przebieg domyślny:
- system wyświetla dodane do kursu ciekawostki w postaci odnośników
- system wyświetla również przycisk umożliwiający dodanie nowej ciekawostki 

Przebieg alternatywny:
- brak

[Skocz do góry](#Przypadki-użycia)
[](#####################################################################################)
## Dodanie ciekawostki

Aktor: Nauczyciel

Warunki wstępne:
- użytkownik wybrał przycisk dodania nowej ciekawostki

Przebieg domyślny:
- system wyświetla formularz 
- użytkownik uzupełnia w nim takie pola jak nazwa czy treść
- po wypełnieniu formularzu zatwierdza przyciskiem "dodaj ciekawostke"
- użytkownik zostaje przekierowany do strony "zarządzanie ciekawostkami"

Przebieg alternatywny:
- użytkownik może anulować dodawanie ciekawostki za pomocą przycisku "anuluj"

[Skocz do góry](#Przypadki-użycia)
[](#####################################################################################)
## Wybranie ciekawostki

Aktor: Nauczyciel 

Warunki wstępne:
- użytkownik kliknął w jeden z odnośników na liście ciekawostek

Przebieg domyślny:
- system wyświetla stronę ciekawostki (opis, atrybuty etc)
- system oprócz podstawowych informacji wyświetla przycisk "cofnij", "usuń ciekawostkę" oaz "modyfikuj ciekawostkę" 

Przebieg alternatywny:
- brak

[Skocz do góry](#Przypadki-użycia)
[](#####################################################################################)
## Modyfikacja ciekawostki

Aktor: 

Warunki wstępne:
- użytkownik na stronie wybranej wcześniej ciekawostki kliknął w przycisk "modyfikuj ciekawostkę"

Przebieg domyślny:
- system wyświetla formularz, który jest wypełniony na podstawie atrybutów ciekawostki
- użytkownik zmienia zawartośc danych pól
- po wypełnieniu formularzu zatwierdza przyciskiem "zapisz zmiany"
- użytkownik zostaje przekierowany do strony "zarządzanie ciekawostkami"

Przebieg alternatywny:
- użytkownik może wybrać "anuluj zmiany" i wówczas ciekawostka nie zostanie zmodyfikowana

[Skocz do góry](#Przypadki-użycia)
[](#####################################################################################)
## Usuwanie ciekawostki

Aktor: Nauczyciel

Warunki wstępne:
- użytkownik na stronie wybranej wcześniej ciekawostki kliknął w przycisk "usuń ciekawostkę"


Przebieg domyślny:
- system wyświetla okno dialogowe z pytaniem o potwierdzenie usunięcia
- użytkownik wybiera opcję "tak", ciekawostka zostaje usunięta, a użytkownik zostaje przekierowany na stronę "zarządzanie ciekawostkami"

Przebieg alternatywny:
- użytkownik wybiera opcję "tak" i zostaje przekierowany na stronę "zarządzanie ciekawostkami"

[Skocz do góry](#Przypadki-użycia)
[](#####################################################################################)
## Dodanie nowego kursu

Aktor: Nauczyciel

Warunki wstępne:
- użytkownik jest zalogowany i ma status nauczyciela
- użytkownik wybrał przycisk "dodaj nowy kurs"

Przebieg domyślny:
- system wyświetla formularz do wypełnienia
- użytkownik wypełnia formularz wedle własnych potrzeb
- użytkownik zatwierdza wprowadzone dane przyciskiem "dodaj nowy kurs"
- użytkownik zostaje przekierowany na stronę nowo utworzonego kursu

Przebieg alternatywny:
- brak

[Skocz do góry](#Przypadki-użycia)
[](#####################################################################################)
## Dołączenie do nowego kursu

Aktor: Uczeń

Warunki wstępne:
- użytkownik wybrał przycisk "dołącz do nowego kursu"

Przebieg domyślny:
- system wyświetla formularz do wypełnienia przez użytkownika
- użytkownik wprowadza nazwę kursu i nazwisko autora oraz klika "wyszukaj"
- system wyświetla kursy spełniające dane kryteria 
- użytkownik wybiera kurs i wprowadza otrzymany kod
- użytkownik zostaje przekierowany do strony nowego kursu 

Przebieg alternatywny:
- jeśli kod był niepoprawny to wyszukiwanie i formularz zostają wyczyszczone

[Skocz do góry](#Przypadki-użycia)
[](#####################################################################################)
## Przeglądanie swoich kursów

Aktor: Uczeń

Warunki wstępne:
- użytkownik jest zalogowany
- użytkownik ma status ucznia

Przebieg domyślny:
- system wyświetla użytkownikowi zarządzane kursy w postaci listy odnośników

Przebieg alternatywny:
- braK

[Skocz do góry](#Przypadki-użycia)
[](#####################################################################################)
## Wybranie kursu

Aktor: 

Warunki wstępne:
- x

Przebieg domyślny:
- x

Przebieg alternatywny:
- x

[Skocz do góry](#Przypadki-użycia)
[](#####################################################################################)
## Wizyta w sklepie

Aktor: 

Warunki wstępne:
- x

Przebieg domyślny:
- x

Przebieg alternatywny:
- x

[Skocz do góry](#Przypadki-użycia)
[](#####################################################################################)
## Przeglądanie powiadomień

Aktor: 

Warunki wstępne:
- x

Przebieg domyślny:
- x

Przebieg alternatywny:
- x

[Skocz do góry](#Przypadki-użycia)
[](#####################################################################################)
## Przeglądanie strony wydarzenia

Aktor: 

Warunki wstępne:
- x

Przebieg domyślny:
- x

Przebieg alternatywny:
- x

[Skocz do góry](#Przypadki-użycia)
[](#####################################################################################)
## Przeglądanie zakładki zadań

Aktor: 

Warunki wstępne:
- x

Przebieg domyślny:
- x

Przebieg alternatywny:
- x

[Skocz do góry](#Przypadki-użycia)
[](#####################################################################################)
## Przeglądanie strony bohatera

Aktor: 

Warunki wstępne:
- x

Przebieg domyślny:
- x

Przebieg alternatywny:
- x

[Skocz do góry](#Przypadki-użycia)
[](#####################################################################################)
## Przeglądanie strony nawyków

Aktor: 

Warunki wstępne:
- x

Przebieg domyślny:
- x

Przebieg alternatywny:
- x

[Skocz do góry](#Przypadki-użycia)
[](#####################################################################################)
## Wybranie przedmiotu

Aktor: Uczeń

Warunki wstępne:
- x

Przebieg domyślny:
- x

Przebieg alternatywny:
- x

[Skocz do góry](#Przypadki-użycia)
[](#####################################################################################)
## Wykonanie transakcji

Aktor: 

Warunki wstępne:
- x

Przebieg domyślny:
- x

Przebieg alternatywny:
- x

[Skocz do góry](#Przypadki-użycia)
[](#####################################################################################)
## Wybranie powiadomienia

Aktor: 

Warunki wstępne:
- x

Przebieg domyślny:
- x

Przebieg alternatywny:
- x

[Skocz do góry](#Przypadki-użycia)
[](#####################################################################################)
## Wysłanie odpowiedzi

Aktor: 

Warunki wstępne:
- x

Przebieg domyślny:
- x

Przebieg alternatywny:
- x

[Skocz do góry](#Przypadki-użycia)
[](#####################################################################################)
## Wybranie aktywności

Aktor: 

Warunki wstępne:
- x

Przebieg domyślny:
- x

Przebieg alternatywny:
- x

[Skocz do góry](#Przypadki-użycia)
[](#####################################################################################)
## Wysłanie odpowiedzi

Aktor: 

Warunki wstępne:
- x

Przebieg domyślny:
- x

Przebieg alternatywny:
- x

[Skocz do góry](#Przypadki-użycia)
[](#####################################################################################)
## Obejrzenie wyników

Aktor: 

Warunki wstępne:
- x

Przebieg domyślny:
- x

Przebieg alternatywny:
- x

[Skocz do góry](#Przypadki-użycia)
[](#####################################################################################)
## Modyfikacja atrybutów

Aktor: 

Warunki wstępne:
- x

Przebieg domyślny:
- x

Przebieg alternatywny:
- x

[Skocz do góry](#Przypadki-użycia)
[](#####################################################################################)
## Przeglądanie ekwipunku

Aktor: 

Warunki wstępne:
- x

Przebieg domyślny:
- x

Przebieg alternatywny:
- x

[Skocz do góry](#Przypadki-użycia)
[](#####################################################################################)
## Wybranie przedmiotu

Aktor: 

Warunki wstępne:
- x

Przebieg domyślny:
- x

Przebieg alternatywny:
- x

[Skocz do góry](#Przypadki-użycia)
[](#####################################################################################)
