import { create } from 'datenow-ts'
import { get } from 'datenow-ts'
import { span } from 'datenow-ts'
import { until } from 'datenow-ts'


const date = create.dateByDatestring('2000-06-25');
const weekdayInfo = get.weekdayObject(date);
const weekdayElement = document.getElementById('weekday-info');
weekdayElement.textContent = weekdayInfo.long;
