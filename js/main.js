// Dark mode toggle and persistence
// ==============================
document.addEventListener('DOMContentLoaded', function() {
    const toggle = document.getElementById('darkModeToggle');
    const body = document.body;
    const darkModeKey = 'portfolio-dark-mode';

    // Set initial mode from localStorage
    if (localStorage.getItem(darkModeKey) === 'dark') {
        body.classList.add('dark-mode');
        toggle.textContent = '☀️';
    }

    toggle.addEventListener('click', function() {
        body.classList.toggle('dark-mode');
        const isDark = body.classList.contains('dark-mode');
        toggle.textContent = isDark ? '☀️' : '🌙';
        localStorage.setItem(darkModeKey, isDark ? 'dark' : 'light');
    });
});

// Section fade-in animation on scroll
// ===================================
function revealSectionsOnScroll() {
    const sections = document.querySelectorAll('.fade-in-section');
    const trigger = window.innerHeight * 0.85;
    sections.forEach(section => {
        const top = section.getBoundingClientRect().top;
        if (top < trigger) {
            section.classList.add('visible');
        }
    });
}
window.addEventListener('scroll', revealSectionsOnScroll);
window.addEventListener('DOMContentLoaded', revealSectionsOnScroll); 