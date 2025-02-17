import { check } from "datenow-ts";
import { create } from "datenow-ts";
import { span } from 'datenow-ts';

const date = create.dateNow();
// -> returns current date

const from = create.dateByDatestring('2001-10-18')
const to = create.dateByDatestring(date)
console.log(span);

// Subtract 1 to account for the current incomplete year
const age = span.years(from, to) - 1;
console.log(age);

check(date);

document.addEventListener('DOMContentLoaded', () => {
    const image = document.querySelector('.profile-image');
    const emojis = ['❤️', '✨', '🌟', '💫', '💝', '💖', '⭐', '🌸'];
    
    image.addEventListener('click', (e) => {
        const rect = image.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;

        for (let i = 0; i < 15; i++) {
            const emoji = document.createElement('div');
            emoji.className = 'floating-emoji';
            emoji.textContent = emojis[Math.floor(Math.random() * emojis.length)];
            
            // Random position adjustments
            const angle = (Math.random() * 360) * (Math.PI / 180);
            const distance = 100 + Math.random() * 100;
            emoji.style.left = `${centerX}px`;
            emoji.style.top = `${centerY}px`;
            emoji.style.setProperty('--angle', angle);
            emoji.style.setProperty('--distance', `${distance}px`);
            
            document.body.appendChild(emoji);
            
            // Remove emoji after animation
            setTimeout(() => emoji.remove(), 1000);
        }
    });
});