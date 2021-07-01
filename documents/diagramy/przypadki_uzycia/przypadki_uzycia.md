# Przypadki użycia
|   |   |   | 
|---|---|---|
| 01 [Przeglądanie zarządzanych kursów](#Przeglądanie-zarządzanych-kursów) | 17 [Przeglądanie odpowiedzi](#Przeglądanie-odpowiedzi) | 33 [Przeglądanie strony wydarzenia](#Przeglądanie-strony-wydarzenia)
| 02 [Wybranie kursu](#Wybranie-kursu) | 18 [Modyfikacja aktywności](#Modyfikacja-aktywności) | 34 [Przeglądanie zakładki zadań](#Przeglądanie-zakładki-zadań)
| 03 [Dodanie formy aktywności](#Dodanie-formy-aktywności) | 19 [Wybranie uczestnika](#Wybranie-uczestnika) | 35 [Przeglądanie strony bohatera](#Przeglądanie-strony-bohatera)
| 04 [Podanie atrybutów](#Podanie-atrybutów) | 20 [Sprawdzenie odpowiedzi](#Sprawdzenie-odpowiedzi) | 36 [Przeglądanie strony nawyków](#Przeglądanie-strony-nawyków)
| 05 [Dodanie wydarzenia](#Dodanie-wydarzenia) | 21 [Zarządzanie ciekawostkami](#Zarządzanie-ciekawostkami) | 37 [Wybranie przedmiotu](#Wybranie-przedmiotu)
| 06 [Dodanie nawyku](#Dodanie-nawyku) | 22 [Dodanie ciekawostki](#Dodanie-ciekawostki) | 38 [Wykonanie transakcji](#Wykonanie-transakcji)
| 07 [Dodanie zadania](#Dodanie-zadania) | 23 [Wybranie ciekawostki](#Wybranie=ciekawostki) | 39 [Wybranie powiadomienia](#Wybranie-powiadomienia)
| 08 [Dodanie pytania](#Dodanie-pytania) | 24 [Modyfikacja ciekawostki](#Modyfikacja-ciekawostki) | 40 Usunięto
| 09 [Zarządzanie użytkownikami](#Zarządzanie-użytkownikami) | 25 [Usuwanie ciekawostki](#Usuwanie-ciekawostki) | 41 [Wysłanie odpowiedzi](#Wysłanie-odpowiedzi)
| 10 [Zaproszenie uczestnika](#Zaproszenie-uczestnika) | 26 [Dodanie nowego kursu](#Dodanie-nowego-kursu) | 42 Usunięto
| 11 [Pobranie zestawienia zbiorowego](#Pobranie-zestawienia-zbiorowego) | 27 [Dołączenie do nowego kursu](#Dołączenie-do-nowego-kursu) | 43 [Wybranie aktywności](#Wybranie-aktywności)
| 12 [Wybranie uczestnika](#Wybranie-uczestnika) | 28 Usunięto | 44 [Wysłanie odpowiedzi](#Wysłanie-odpowiedzi)
| 13 [Wysłanie wiadomości](#Wysłanie-wiadomości) | 29 [Przeglądanie swoich kursów](#Pzeglądanie-swoich-kursów) | 45 [Obejrzenie wyników](#Obejrzenie-wyników)
| 14 [Wysłanie wiadomości zbiorowej](#Wysłanie-wiadomości-zbiorowej) | 30 [Wybranie kursu](#Wybranie-kursu) | 46 [Modyfikacja atrybutów](#Modyfikacja-atrybutów)
| 15 [Zarządzanie aktywnościami](#Zarządzanie-aktywnościami) | 31 [Wizyta w sklepie](#Wizyta-w-sklepie) | 47 [Przeglądanie ekwipunku](#Przeglądanie-ekwipunku)
| 16 [Wybranie aktywności](#Wybranie-aktywności) | 32 [Przeglądanie powiadomień](#Przeglądanie-powiadomień) | 48 [Wybranie przedmiotu](#Wybranie-przedmiotu)



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

[](#####################################################################################)
## Zarządzanie użytkownikami

Aktor: 

Warunki wstępne:
- x

Przebieg domyślny:
- x

Przebieg alternatywny:
- x

[](#####################################################################################)
## Zaproszenie uczestnika

Aktor: 

Warunki wstępne:
- x

Przebieg domyślny:
- x

Przebieg alternatywny:
- x

[](#####################################################################################)
## Pobranie zestawienia zbiorowego

Aktor: 

Warunki wstępne:
- x

Przebieg domyślny:
- x

Przebieg alternatywny:
- x

[](#####################################################################################)
## Wybranie uczestnika
Aktor: 

Warunki wstępne:
- x

Przebieg domyślny:
- x

Przebieg alternatywny:
- x

[](#####################################################################################)
## Wysłanie wiadomości

Aktor: 

Warunki wstępne:
- x

Przebieg domyślny:
- x

Przebieg alternatywny:
- x

[](#####################################################################################)
## Wysłanie wiadomości zbiorowej

Aktor: 

Warunki wstępne:
- x

Przebieg domyślny:
- x

Przebieg alternatywny:
- x

[](#####################################################################################)
## Zarządzanie aktywnościami

Aktor: 

Warunki wstępne:
- x

Przebieg domyślny:
- x

Przebieg alternatywny:
- x

[](#####################################################################################)
## Wybranie aktywności

Aktor: 

Warunki wstępne:
- x

Przebieg domyślny:
- x

Przebieg alternatywny:
- x

[](#####################################################################################)
## Przeglądanie odpowiedzi

Aktor: 

Warunki wstępne:
- x

Przebieg domyślny:
- x

Przebieg alternatywny:
- x

[](#####################################################################################)
## Modyfikacja aktywności

Aktor: 

Warunki wstępne:
- x

Przebieg domyślny:
- x

Przebieg alternatywny:
- x

[](#####################################################################################)
## Wybranie uczestnika

Aktor: 

Warunki wstępne:
- x

Przebieg domyślny:
- x

Przebieg alternatywny:
- x

[](#####################################################################################)
## Sprawdzenie odpowiedzi

Aktor: 

Warunki wstępne:
- x

Przebieg domyślny:
- x

Przebieg alternatywny:
- x

[](#####################################################################################)
## Zarządzanie ciekawostkami

Aktor: 

Warunki wstępne:
- x

Przebieg domyślny:
- x

Przebieg alternatywny:
- x

[](#####################################################################################)
## Dodanie ciekawostki

Aktor: 

Warunki wstępne:
- x

Przebieg domyślny:
- x

Przebieg alternatywny:
- x

[](#####################################################################################)
## Wybranie ciekawostki

Aktor: 

Warunki wstępne:
- x

Przebieg domyślny:
- x

Przebieg alternatywny:
- x

[](#####################################################################################)
## Modyfikacja ciekawostki

Aktor: 

Warunki wstępne:
- x

Przebieg domyślny:
- x

Przebieg alternatywny:
- x

[](#####################################################################################)
## Usuwanie ciekawostki

Aktor: 

Warunki wstępne:
- x

Przebieg domyślny:
- x

Przebieg alternatywny:
- x

[](#####################################################################################)
## Dodanie nowego kursu

Aktor: 

Warunki wstępne:
- x

Przebieg domyślny:
- x

Przebieg alternatywny:
- x

[](#####################################################################################)
## Dołączenie do nowego kursu

Aktor: 

Warunki wstępne:
- x

Przebieg domyślny:
- x

Przebieg alternatywny:
- x

[](#####################################################################################)
## Przeglądanie swoich kursów

Aktor: 

Warunki wstępne:
- x

Przebieg domyślny:
- x

Przebieg alternatywny:
- x

[](#####################################################################################)
## Wybranie kursu

Aktor: 

Warunki wstępne:
- x

Przebieg domyślny:
- x

Przebieg alternatywny:
- x

[](#####################################################################################)
## Wizyta w sklepie

Aktor: 

Warunki wstępne:
- x

Przebieg domyślny:
- x

Przebieg alternatywny:
- x

[](#####################################################################################)
## Przeglądanie powiadomień

Aktor: 

Warunki wstępne:
- x

Przebieg domyślny:
- x

Przebieg alternatywny:
- x

[](#####################################################################################)
## Przeglądanie strony wydarzenia

Aktor: 

Warunki wstępne:
- x

Przebieg domyślny:
- x

Przebieg alternatywny:
- x

[](#####################################################################################)
## Przeglądanie zakładki zadań

Aktor: 

Warunki wstępne:
- x

Przebieg domyślny:
- x

Przebieg alternatywny:
- x

[](#####################################################################################)
## Przeglądanie strony bohatera

Aktor: 

Warunki wstępne:
- x

Przebieg domyślny:
- x

Przebieg alternatywny:
- x

[](#####################################################################################)
## Przeglądanie strony nawyków

Aktor: 

Warunki wstępne:
- x

Przebieg domyślny:
- x

Przebieg alternatywny:
- x

[](#####################################################################################)
## Wybranie przedmiotu

Aktor: 

Warunki wstępne:
- x

Przebieg domyślny:
- x

Przebieg alternatywny:
- x

[](#####################################################################################)
## Wykonanie transakcji

Aktor: 

Warunki wstępne:
- x

Przebieg domyślny:
- x

Przebieg alternatywny:
- x

[](#####################################################################################)
## Wybranie powiadomienia

Aktor: 

Warunki wstępne:
- x

Przebieg domyślny:
- x

Przebieg alternatywny:
- x

[](#####################################################################################)
## Wysłanie odpowiedzi

Aktor: 

Warunki wstępne:
- x

Przebieg domyślny:
- x

Przebieg alternatywny:
- x

[](#####################################################################################)
## Wybranie aktywności

Aktor: 

Warunki wstępne:
- x

Przebieg domyślny:
- x

Przebieg alternatywny:
- x

[](#####################################################################################)
## Wysłanie odpowiedzi

Aktor: 

Warunki wstępne:
- x

Przebieg domyślny:
- x

Przebieg alternatywny:
- x

[](#####################################################################################)
## Obejrzenie wyników

Aktor: 

Warunki wstępne:
- x

Przebieg domyślny:
- x

Przebieg alternatywny:
- x

[](#####################################################################################)
## Modyfikacja atrybutów

Aktor: 

Warunki wstępne:
- x

Przebieg domyślny:
- x

Przebieg alternatywny:
- x

[](#####################################################################################)
## Przeglądanie ekwipunku

Aktor: 

Warunki wstępne:
- x

Przebieg domyślny:
- x

Przebieg alternatywny:
- x

[](#####################################################################################)
## Wybranie przedmiotu

Aktor: 

Warunki wstępne:
- x

Przebieg domyślny:
- x

Przebieg alternatywny:
- x

[](#####################################################################################)
