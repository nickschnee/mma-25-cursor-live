import { create, format, until } from 'datenow-ts';

// Geburtsdatum erstellen
const birthDate = create.dateByParams({ year: 1990, month: 5, day: 20 }); // Beispiel: 20. Mai 1990

// Heutiges Datum erstellen
const today = create.dateNow();

// Differenz zwischen Geburtsdatum und heutigem Datum berechnen
const diff = until.diff(birthDate, today);

// Differenz in Jahre umrechnen
const age = diff.years;

// Alter anzeigen
console.log(`Ihr Alter: ${age}`);
