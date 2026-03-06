// Theme Toggle - Dark/Light Mode
const themeToggle = document.getElementById('themeToggle');
const htmlElement = document.documentElement;
const bodyElement = document.body;

// Check for saved theme preference or default to dark mode
const currentTheme = localStorage.getItem('theme') || 'dark';
if (currentTheme === 'light') {
    bodyElement.classList.add('light-mode');
    themeToggle.classList.remove('dark-mode');
    themeToggle.innerHTML = '<span class="theme-icon">🌙</span>';
}

// Theme toggle event listener
if (themeToggle) {
    themeToggle.addEventListener('click', function(e) {
        e.preventDefault();
        bodyElement.classList.toggle('light-mode');
        
        if (bodyElement.classList.contains('light-mode')) {
            localStorage.setItem('theme', 'light');
            themeToggle.classList.remove('dark-mode');
            themeToggle.innerHTML = '<span class="theme-icon">🌙</span>';
        } else {
            localStorage.setItem('theme', 'dark');
            themeToggle.classList.add('dark-mode');
            themeToggle.innerHTML = '<span class="theme-icon">☀️</span>';
        }
    });
}

// Mobile Menu Toggle
const menuToggle = document.getElementById('menuToggle');
const navMenu = document.getElementById('navMenu');

if (menuToggle) {
    menuToggle.addEventListener('click', function() {
        navMenu.classList.toggle('active');
        menuToggle.classList.toggle('active');
    });

    // Close menu when clicking on a nav link
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', function() {
            navMenu.classList.remove('active');
            menuToggle.classList.remove('active');
        });
    });

    // Close menu when clicking outside
    document.addEventListener('click', function(e) {
        if (!e.target.closest('header')) {
            navMenu.classList.remove('active');
            menuToggle.classList.remove('active');
        }
    });
}

// Smooth Scroll Navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Terms and Privacy Modal Functionality
const termsBtn = document.getElementById('termsBtn');
const termsModal = document.getElementById('termsModal');
const closeTerms = document.getElementById('closeTerms');
const agreeTerms = document.getElementById('agreeTerms');
const declineTerms = document.getElementById('declineTerms');
const termsCheckbox = document.getElementById('terms');

if (termsBtn && termsModal) {
    // Open modal when clicking terms button
    termsBtn.addEventListener('click', function(e) {
        e.preventDefault();
        termsModal.classList.add('show');
    });

    // Close modal when clicking close button
    closeTerms.addEventListener('click', function() {
        termsModal.classList.remove('show');
    });

    // Close modal and check checkbox when clicking agree
    agreeTerms.addEventListener('click', function() {
        termsCheckbox.checked = true;
        termsModal.classList.remove('show');
    });

    // Close modal when clicking decline - also clear form
    declineTerms.addEventListener('click', function() {
        termsModal.classList.remove('show');
        // Clear form fields
        if (contactForm) {
            contactForm.reset();
            document.querySelectorAll('.error-message').forEach(el => {
                el.classList.remove('show');
                el.textContent = '';
            });
        }
    });

    // Close modal when clicking outside the content
    termsModal.addEventListener('click', function(e) {
        if (e.target === termsModal) {
            termsModal.classList.remove('show');
        }
    });

    // Close modal with Escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && termsModal.classList.contains('show')) {
            termsModal.classList.remove('show');
        }
    });
}

// Project Filter Functionality
const filterButtons = document.querySelectorAll('.filter-btn');
const projectCards = document.querySelectorAll('.project-card');

filterButtons.forEach(button => {
    button.addEventListener('click', function() {
        const filter = this.getAttribute('data-filter');
        
        // Update active button
        filterButtons.forEach(btn => btn.classList.remove('active'));
        this.classList.add('active');
        
        // Filter projects with animation
        projectCards.forEach(card => {
            const category = card.getAttribute('data-category');
            
            if (filter === 'all' || category === filter) {
                card.classList.remove('hidden');
                card.style.animation = 'fadeIn 0.3s ease forwards';
            } else {
                card.classList.add('hidden');
            }
        });
    });
});

// Add fade-in animation
const style = document.createElement('style');
style.textContent = `
    @keyframes fadeIn {
        from {
            opacity: 0;
            transform: scale(0.9);
        }
        to {
            opacity: 1;
            transform: scale(1);
        }
    }
`;
document.head.appendChild(style);

// Counter Animation for Stats
function animateCounters() {
    const stats = document.querySelectorAll('.stat h4');
    
    const observerOptions = {
        threshold: 0.5
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const element = entry.target;
                const finalValue = parseInt(element.textContent.replace(/\D/g, ''));
                const duration = 2000;
                const increment = finalValue / (duration / 16);
                let currentValue = 0;
                
                const counter = setInterval(() => {
                    currentValue += increment;
                    if (currentValue >= finalValue) {
                        element.textContent = finalValue + '+';
                        clearInterval(counter);
                    } else {
                        element.textContent = Math.floor(currentValue) + '+';
                    }
                }, 16);
                
                observer.unobserve(element);
            }
        });
    }, observerOptions);
    
    stats.forEach(stat => observer.observe(stat));
}

// Initialize counter animation when page loads
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', animateCounters);
} else {
    animateCounters();
}

// Scroll-based animations for elements
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animation = 'slideUp 0.6s ease forwards';
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

document.querySelectorAll('.project-card, .blog-card').forEach(el => {
    observer.observe(el);
});

// Add slide-up animation
const slideUpStyle = document.createElement('style');
slideUpStyle.textContent = `
    @keyframes slideUp {
        from {
            opacity: 0;
            transform: translateY(30px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
`;
document.head.appendChild(slideUpStyle);

// Contact Form Validation and Submission
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    const inputs = {
        name: document.getElementById('name'),
        email: document.getElementById('email'),
        subject: document.getElementById('subject'),
        message: document.getElementById('message'),
        terms: document.getElementById('terms')
    };

    // Validation functions
    const validateEmail = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    const validateField = (fieldName, value) => {
        const errorElement = document.getElementById(fieldName + 'Error');
        
        if (!value.trim()) {
            errorElement.textContent = 'This field is required';
            errorElement.classList.add('show');
            return false;
        }

        if (fieldName === 'email' && !validateEmail(value)) {
            errorElement.textContent = 'Please enter a valid email';
            errorElement.classList.add('show');
            return false;
        }

        if (fieldName === 'message' && value.trim().length < 10) {
            errorElement.textContent = 'Message must be at least 10 characters';
            errorElement.classList.add('show');
            return false;
        }

        errorElement.classList.remove('show');
        return true;
    };

    // Real-time validation
    inputs.name.addEventListener('blur', () => validateField('name', inputs.name.value));
    inputs.email.addEventListener('blur', () => validateField('email', inputs.email.value));
    inputs.subject.addEventListener('blur', () => validateField('subject', inputs.subject.value));
    inputs.message.addEventListener('blur', () => validateField('message', inputs.message.value));

    // Form submission
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();

        // Validate all fields
        const isNameValid = validateField('name', inputs.name.value);
        const isEmailValid = validateField('email', inputs.email.value);
        const isSubjectValid = validateField('subject', inputs.subject.value);
        const isMessageValid = validateField('message', inputs.message.value);

        if (!inputs.terms.checked) {
            alert('Please agree to the terms and privacy policy');
            return;
        }

        if (isNameValid && isEmailValid && isSubjectValid && isMessageValid) {
            // Show success message
            alert('Thank you for your message! I will get back to you soon.');
            
            // Clear all form fields
            contactForm.reset();
            
            // Clear error messages
            document.querySelectorAll('.error-message').forEach(el => {
                el.classList.remove('show');
                el.textContent = '';
            });
        }
    });
}

// Blog Card Expand/Collapse Functionality
document.querySelectorAll('.read-more').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        
        const isExpanded = this.getAttribute('data-expanded') === 'true';
        const blogContent = this.closest('.blog-content');
        const excerpt = blogContent.querySelector('.blog-excerpt');
        const fullContent = blogContent.querySelector('.blog-full-content');
        
        if (isExpanded) {
            // Collapse
            fullContent.style.display = 'none';
            excerpt.style.display = 'block';
            this.textContent = 'Read More →';
            this.setAttribute('data-expanded', 'false');
            this.classList.remove('expanded');
        } else {
            // Expand
            fullContent.style.display = 'block';
            excerpt.style.display = 'none';
            this.textContent = 'Read Less ←';
            this.setAttribute('data-expanded', 'true');
            this.classList.add('expanded');
        }
    });
});
