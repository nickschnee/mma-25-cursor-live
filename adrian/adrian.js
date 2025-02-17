document.addEventListener('DOMContentLoaded', () => {
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