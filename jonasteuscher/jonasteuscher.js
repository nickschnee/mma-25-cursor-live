// Calculate age and display it
function calculateAge(birthDate) {
    const today = new Date();
    const birth = new Date(birthDate);
    const ageInMilliseconds = today - birth;
    
    const years = today.getFullYear() - birth.getFullYear();
    const months = today.getMonth() - birth.getMonth();
    const days = today.getDate() - birth.getDate();
    const hours = today.getHours() - birth.getHours();
    
    let adjustedYears = years;
    let adjustedMonths = months;
    let adjustedDays = days;
    let adjustedHours = hours;

    if (hours < 0) {
        adjustedDays--;
        adjustedHours = hours + 24;
    }
    
    if (days < 0) {
        adjustedMonths--;
        const lastMonth = new Date(today.getFullYear(), today.getMonth() - 1, 0);
        adjustedDays = lastMonth.getDate() + days;
    }
    
    if (months < 0) {
        adjustedYears--;
        adjustedMonths = months + 12;
    }
    
    return {
        years: adjustedYears,
        months: adjustedMonths,
        days: adjustedDays,
        hours: adjustedHours
    };
}
const age = calculateAge("1998-09-23");
document.getElementById('age').textContent = `${age.years} years, ${age.months} months, ${age.days} days, ${age.hours} hours`;

// Dark Mode Toggle
const darkModeToggle = document.createElement('button');
darkModeToggle.innerHTML = '🌓';
darkModeToggle.classList.add('dark-mode-toggle');
document.body.appendChild(darkModeToggle);

darkModeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    darkModeToggle.innerHTML = document.body.classList.contains('dark-mode') ? '☀️' : '🌙';
});
