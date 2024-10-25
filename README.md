# DT208G - Moment 4

Projektet skapades med [Angular CLI](https://github.com/angular/angular-cli) version 18.2.3.

## Funktionella krav

Krav för att uppgiften skall anses som godkänd:

+ Du har skapat en Angular-applikation som hämtar data från en webbtjänst/JSON-fil och presenterar den på skärmen.
+ Du har skapat en (eller flera) service som sköter kommunikationen för att hämta data från JSON-filen, genom att använd HttpClient.
+ Du har skapat en tabell som innehåller data för kurskod, kursnamn och progression.
+ Det går att sortera data på kurskod, kursnamn och progression.
+ Det går att filtrera/söka data genom att ange en textfras.
+ Användargränssnittet uppdateras automatiskt vid klick för sortering samt ändring av sökfras.
+ Uppgiften är publicerad till en publikt tillgänglig webbhost och går att testköra.
+ Källkoden är publicerad med hjälp av Git, tillsammans med en beskrivande README.md-fil som beskriver hur din applikation är konstuerad och fungerar.

## Lösning

+ Interface skapat för beskrivning av data i JSON-fil (Course).
+ Service skapad för inläsning av JSON-data (CourseService).
+ Component skapad för visualisering och logik för kurslistan (CoursesComponent).
+ CourseService injeceras (Dependency Injection) i konstruktor för CoursesComponent.
+ En kombination av Directives, Interpolation och Event Binding för att lösa sortering och filtrering.