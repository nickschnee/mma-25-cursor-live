import { until, create } from "datenow-ts";

// Create dates
const now = create.dateNow();
const birthDate = create.dateByDatestring('1989-03-21');

// Calculate age
const age = until.years(birthDate, now);

// Set age in the document
const ageElement = document.getElementById('age');
if (ageElement) {
    ageElement.textContent = `${age} Jahre`;
} else {
    console.error('Element mit ID "age" wurde nicht gefunden!');
}