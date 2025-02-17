import { until, create } from "datenow-ts";

const from = create.dateNow();
const to = create.dateByDatestring('2025-10-18');
console.log('years beween:', until.days(from, to));

const daysBetween = until.days(from, to);
document.getElementById('days-counter').textContent = `${daysBetween} Tage bis zum 18. Oktober 2025`;

            

