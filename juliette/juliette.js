
import { until, create } from 'datenow-ts';



const from = create.dateNow();
const to = create.dateByDatestring('2025-07-25');

console.log('days between:', until.days(from, to));


const daysLeft = until.days(from, to);

document.getElementById('birthday-countdown').textContent = `${daysLeft}`;



