document.addEventListener('DOMContentLoaded', () => {
    // Geburtsdatum formatieren
    const birthdayElement = document.querySelector('.info-item:nth-child(2) p');
    const birthday = new Date("2000-01-10");
    const formattedBirthday = birthday.toLocaleDateString('de-DE', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric'
    });
    
    // Alter berechnen
    const age = Math.floor((new Date() - birthday) / (365.25 * 24 * 60 * 60 * 1000));
    birthdayElement.textContent = `${formattedBirthday} (${age} Jahre)`;

    // Typing-Effekt für den Hero-Text
    const heroText = document.querySelector('.hero-text h1');
    const text = heroText.textContent;
    heroText.textContent = '';
    let i = 0;

    function typeWriter() {
        if (i < text.length) {
            heroText.textContent += text.charAt(i);
            i++;
            setTimeout(typeWriter, 150);
        }
    }
    
    // Verzögerter Start des Typing-Effekts
    setTimeout(typeWriter, 500);

    // Parallax-Effekt für das Hero-Bild
    const heroImage = document.querySelector('.hero-img');
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        heroImage.style.transform = `translateY(${scrolled * 0.5}px)`;
    });

    // Animierte Einblendung der Info-Items beim Scrollen
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1
    });

    document.querySelectorAll('.info-item').forEach(item => {
        observer.observe(item);
    });

    // Easter Egg: Dinosaurier-Animation
    const dinoInfo = document.querySelector('.info-item:last-child');
    let clicks = 0;
    
    dinoInfo.addEventListener('click', () => {
        clicks++;
        if (clicks === 3) {
            dinoInfo.style.transform = 'rotate(360deg)';
            dinoInfo.style.transition = 'transform 1s ease';
            clicks = 0;
        }
    });

    // Zufällige Farben für die Skill-Tags
    const colors = ['#2ecc71', '#3498db', '#9b59b6', '#e74c3c', '#1abc9c', '#e67e22'];
    document.querySelectorAll('.skill-tag').forEach(tag => {
        tag.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
    });

    // Dark Mode Toggle
    const darkModeToggle = document.createElement('button');
    darkModeToggle.innerHTML = '🌙';
    darkModeToggle.classList.add('dark-mode-toggle');
    document.body.appendChild(darkModeToggle);

    darkModeToggle.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
        darkModeToggle.innerHTML = document.body.classList.contains('dark-mode') ? '☀️' : '🌙';
    });
}); 