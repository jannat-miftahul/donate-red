document.getElementById('currentYear').textContent = new Date().getFullYear();

// Note: Fade-in animations removed for better compatibility
// All sections are now visible by default

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Add loading animation
window.addEventListener('load', function () {
    document.body.classList.add('loaded');
});

// Navbar scroll effect
window.addEventListener('scroll', function () {
    const navbar = document.querySelector('nav');
    if (window.scrollY > 100) {
        navbar.classList.add('shadow-lg');
    } else {
        navbar.classList.remove('shadow-lg');
    }
});

// Dark mode functionality
function toggleTheme() {
    const html = document.documentElement;
    const themeIcon = document.getElementById('theme-icon');

    if (html.getAttribute('data-theme') === 'dark') {
        html.setAttribute('data-theme', 'light');
        themeIcon.classList.remove('fa-sun');
        themeIcon.classList.add('fa-moon');
        localStorage.setItem('theme', 'light');
    } else {
        html.setAttribute('data-theme', 'dark');
        themeIcon.classList.remove('fa-moon');
        themeIcon.classList.add('fa-sun');
        localStorage.setItem('theme', 'dark');
    }
}

// Load saved theme
function loadTheme() {
    const savedTheme = localStorage.getItem('theme') || 'light';
    const html = document.documentElement;
    const themeIcon = document.getElementById('theme-icon');

    html.setAttribute('data-theme', savedTheme);

    if (savedTheme === 'dark') {
        themeIcon.classList.remove('fa-moon');
        themeIcon.classList.add('fa-sun');
    } else {
        themeIcon.classList.remove('fa-sun');
        themeIcon.classList.add('fa-moon');
    }
}

// Initialize theme on page load
loadTheme();