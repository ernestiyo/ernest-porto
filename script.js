// Age calculation with precise decimal places
function calculatePreciseAge() {
    const birthDate = new Date('2005-05-31'); // Adjust to your birth date
    const now = new Date();
    const ageInMs = now.getTime() - birthDate.getTime();
    const ageInYears = ageInMs / (365.25 * 24 * 60 * 60 * 1000);
    return ageInYears;
}

// Update age display constantly
function updateAge() {
    const ageElement = document.getElementById('age');
    if (ageElement) {
        const preciseAge = calculatePreciseAge();
        ageElement.textContent = preciseAge.toFixed(8);
    }
}

// Theme toggle functionality
function initThemeToggle() {
    const themeToggle = document.getElementById('theme-toggle');
    const sunIcon = document.getElementById('sun-icon');
    const moonIcon = document.getElementById('moon-icon');
    const html = document.documentElement;
    
    // Check for saved theme preference or default to 'dark'
    const savedTheme = localStorage.getItem('theme');
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    // Set initial theme
    if (savedTheme) {
        html.classList.toggle('dark', savedTheme === 'dark');
    } else if (systemPrefersDark) {
        html.classList.add('dark');
    }
    
    // Update icon visibility
    function updateIcons() {
        const isDark = html.classList.contains('dark');
        sunIcon.style.display = isDark ? 'none' : 'block';
        moonIcon.style.display = isDark ? 'block' : 'none';
    }
    
    updateIcons();
    
    // Theme toggle event
    themeToggle.addEventListener('click', () => {
        const isDark = html.classList.contains('dark');
        html.classList.toggle('dark');
        
        // Save theme preference
        localStorage.setItem('theme', isDark ? 'light' : 'dark');
        
        updateIcons();
    });
}

// Smooth scrolling for anchor links
function initSmoothScrolling() {
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
}

// Animation on scroll
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animationPlayState = 'running';
            }
        });
    }, observerOptions);
    
    // Observe all animated elements
    document.querySelectorAll('.animate-fade-in, .animate-fade-in-delay').forEach(el => {
        el.style.animationPlayState = 'paused';
        observer.observe(el);
    });
}

// Email subscription form
function initEmailForm() {
    const form = document.querySelector('form');
    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            const email = this.querySelector('input[type="email"]').value;
            
            // Simple validation
            if (email && email.includes('@')) {
                // Simulate subscription
                alert('Thank you for subscribing! (This is a demo)');
                this.reset();
            } else {
                alert('Please enter a valid email address.');
            }
        });
    }
}

// Work card hover effects
function initWorkCardEffects() {
    const workCards = document.querySelectorAll('.work-card');
    
    workCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-2px)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });
}

// Dock hover effects
function initDockEffects() {
    const dockIcons = document.querySelectorAll('.dock-icon');
    
    dockIcons.forEach(icon => {
        icon.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.1)';
        });
        
        icon.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
        });
    });
}

// Typing effect for the main heading
function initTypingEffect() {
    const heading = document.querySelector('.animate-fade-in');
    if (heading) {
        const text = heading.textContent;
        heading.textContent = '';
        heading.style.opacity = '1';
        heading.style.filter = 'none';
        heading.style.transform = 'none';
        
        let i = 0;
        function typeWriter() {
            if (i < text.length) {
                heading.textContent += text.charAt(i);
                i++;
                setTimeout(typeWriter, 100);
            }
        }
        
        // Start typing after a short delay
        setTimeout(typeWriter, 500);
    }
}

// Initialize all functionality when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    // Set initial age and start updating
    updateAge();
    
    // Update age every 100ms for smooth animation
    setInterval(updateAge, 100);
    
    // Initialize all features
    initThemeToggle();
    initSmoothScrolling();
    initScrollAnimations();
    initEmailForm();
    initWorkCardEffects();
    initDockEffects();
    initTypingEffect();
    
    // Add a loading complete class
    document.body.classList.add('loaded');
});

// Handle system theme changes
window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
    if (!localStorage.getItem('theme')) {
        document.documentElement.classList.toggle('dark', e.matches);
    }
});

// Smooth reveal animations
function revealElements() {
    const elements = document.querySelectorAll('.animate-fade-in-delay');
    elements.forEach((element, index) => {
        setTimeout(() => {
            element.style.opacity = '1';
            element.style.filter = 'blur(0)';
            element.style.transform = 'translateY(0)';
        }, index * 100 + 1000);
    });
}

// Start reveal animations after page load
window.addEventListener('load', revealElements);