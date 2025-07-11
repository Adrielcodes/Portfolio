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
    const trigger = window.innerHeight * 0.6; // Changed from 0.85 to 0.6 - sections will appear when 60% up the screen instead of 85%
    sections.forEach(section => {
        const top = section.getBoundingClientRect().top;
        if (top < trigger) {
            section.classList.add('visible');
        }
    });
}

// Reset scroll position and handle page load
window.addEventListener('DOMContentLoaded', function() {
    // Reset scroll position to top
    window.scrollTo(0, 0);
    
    // Reset all fade-in sections to initial state
    const sections = document.querySelectorAll('.fade-in-section');
    sections.forEach(section => {
        section.classList.remove('visible');
    });
    
    // Trigger initial reveal check after a short delay
    setTimeout(revealSectionsOnScroll, 100);
});

window.addEventListener('scroll', revealSectionsOnScroll); 