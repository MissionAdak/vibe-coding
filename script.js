// Initialize all libraries and functionality when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM loaded, initializing...');
    
    // Initialize Particles.js
    initParticles();
    
    // Initialize Typed.js
    initTyped();
    
    // Initialize GSAP animations
    initGSAP();
    
    // Initialize AOS
    initAOS();
    
    // Initialize countdown timer
    initCountdown();
    
    // Initialize mobile navigation
    initMobileNav();
    
    // Initialize form validation
    initFormValidation();
    
    // Initialize smooth scrolling
    initSmoothScrolling();
    
    // Initialize custom cursor
    initCustomCursor();
    
    // Initialize cursor trails
    initCursorTrails();
    
    // Initialize scroll-based glow effects
    initScrollGlowEffects();
    
    // Debug sponsors section
    debugSponsorsSection();
});

// Enhanced Particles.js Configuration
function initParticles() {
    if (typeof particlesJS !== 'undefined') {
        particlesJS('particles-js', {
            particles: {
                number: {
                    value: 120,
                    density: {
                        enable: true,
                        value_area: 800
                    }
                },
                color: {
                    value: ['#8B5CF6', '#3B82F6', '#10B981', '#EC4899', '#F59E0B', '#EF4444']
                },
                shape: {
                    type: ['circle', 'triangle'],
                    stroke: {
                        width: 0,
                        color: '#000000'
                    }
                },
                opacity: {
                    value: 0.6,
                    random: true,
                    anim: {
                        enable: true,
                        speed: 2,
                        opacity_min: 0.1,
                        sync: false
                    }
                },
                size: {
                    value: 4,
                    random: true,
                    anim: {
                        enable: true,
                        speed: 3,
                        size_min: 0.1,
                        sync: false
                    }
                },
                line_linked: {
                    enable: true,
                    distance: 150,
                    color: '#8B5CF6',
                    opacity: 0.4,
                    width: 1
                },
                move: {
                    enable: true,
                    speed: 4,
                    direction: 'none',
                    random: true,
                    straight: false,
                    out_mode: 'out',
                    bounce: false,
                    attract: {
                        enable: true,
                        rotateX: 600,
                        rotateY: 1200
                    }
                }
            },
            interactivity: {
                detect_on: 'canvas',
                events: {
                    onhover: {
                        enable: true,
                        mode: ['repulse', 'bubble']
                    },
                    onclick: {
                        enable: true,
                        mode: 'push'
                    },
                    resize: true
                },
                modes: {
                    grab: {
                        distance: 400,
                        line_linked: {
                            opacity: 1
                        }
                    },
                    bubble: {
                        distance: 400,
                        size: 40,
                        duration: 2,
                        opacity: 8,
                        speed: 3
                    },
                    repulse: {
                        distance: 200,
                        duration: 0.4
                    },
                    push: {
                        particles_nb: 6
                    },
                    remove: {
                        particles_nb: 2
                    }
                }
            },
            retina_detect: true
        });
    }
}

// Enhanced Typed.js Configuration with Glow Effects
function initTyped() {
    if (typeof Typed !== 'undefined') {
        const typed = new Typed('#typed-text', {
            strings: [
                'Code. Create. Collaborate.',
                'Build the future.',
                'Learn. Grow. Innovate.',
                'Join the revolution.'
            ],
            typeSpeed: 50,
            backSpeed: 30,
            backDelay: 2000,
            loop: true,
            showCursor: true,
            cursorChar: '|',
            autoInsertCss: true,
            onStringTyped: (arrayPos) => {
                // Add glow effect when typing completes
                const typedElement = document.getElementById('typed-text');
                if (typedElement) {
                    gsap.to(typedElement, {
                        textShadow: '0 0 30px rgba(139, 92, 246, 1)',
                        duration: 0.5,
                        ease: 'power2.out',
                        yoyo: true,
                        repeat: 1
                    });
                }
            }
        });
        
        // Add continuous glow animation
        if (typeof gsap !== 'undefined') {
            gsap.to('#typed-text', {
                textShadow: '0 0 20px rgba(139, 92, 246, 0.8)',
                duration: 2,
                ease: 'power1.inOut',
                yoyo: true,
                repeat: -1
            });
        }
    }
}


// New function to handle the fade-in effect on scroll
function setupCountdownObserver() {
    const countdownSection = document.querySelector('.countdown-section');
    if (!countdownSection) return;

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target); // Stop observing after animation
            }
        });
    }, {
        threshold: 0.5 // Trigger when 50% of the section is visible
    });

    observer.observe(countdownSection);
}

// Call this function inside your DOMContentLoaded listener
document.addEventListener('DOMContentLoaded', function() {
    // ... all other init calls
    // setupCountdownObserver();
    setupCountdownObserver();
});

// GSAP Animations
function initGSAP() {
    if (typeof gsap !== 'undefined') {
        // Register ScrollTrigger plugin
        gsap.registerPlugin(ScrollTrigger);
        
        // Hero section animations
        gsap.from('.hero-content', {
            duration: 1.5,
            y: 100,
            opacity: 0,
            ease: 'power3.out'
        });
        
        // Countdown numbers animation
        // gsap.from('.countdown-number', {
        //     duration: 0.8,
        //     scale: 0,
        //     opacity: 0,
        //     stagger: 0.1,
        //     ease: 'back.out(1.7)',
        //     scrollTrigger: {
        //         trigger: '.countdown-section',
        //         start: 'top 80%',
        //         end: 'bottom 20%',
        //         toggleActions: 'play none none reverse'
        //     }
        // });
        
        // Timeline items animation
        // gsap.from('.timeline-item', {
        //     duration: 1,
        //     y: 50,
        //     opacity: 0,
        //     stagger: 0.3,
        //     ease: 'power2.out',
        //     scrollTrigger: {
        //         trigger: '.timeline',
        //         start: 'top 80%',
        //         end: 'bottom 20%',
        //         toggleActions: 'play none none reverse'
        //     },
        //     onComplete: () => {
        //         console.log('Timeline animation completed');
        //     }
        // });
        
        // Sponsor items animation
        gsap.from('.sponsor-item', {
            duration: 0.8,
            y: 50,
            opacity: 0,
            stagger: 0.1,
            ease: 'power2.out',
            scrollTrigger: {
                trigger: '.sponsors-grid',
                start: 'top 80%',
                end: 'bottom 20%',
                toggleActions: 'play none none reverse'
            }
        });
        
        // Form animation
        gsap.from('.registration-form', {
            duration: 1,
            y: 50,
            opacity: 0,
            ease: 'power2.out',
            scrollTrigger: {
                trigger: '.registration-form',
                start: 'top 80%',
                end: 'bottom 20%',
                toggleActions: 'play none none reverse'
            }
        });
        
        // Floating animation for sponsor icons
        gsap.to('.sponsor-item', {
            y: -10,
            duration: 2,
            ease: 'power1.inOut',
            stagger: 0.2,
            yoyo: true,
            repeat: -1
        });
        
        // Glow pulse animation for headings
        gsap.to('h2', {
            textShadow: '0 0 20px rgba(139, 92, 246, 0.8)',
            duration: 2,
            ease: 'power1.inOut',
            yoyo: true,
            repeat: -1,
            stagger: 0.5
        });
        
        // Countdown glow animation
        gsap.to('.countdown-number', {
            textShadow: '0 0 30px rgba(139, 92, 246, 1)',
            duration: 1.5,
            ease: 'power1.inOut',
            yoyo: true,
            repeat: -1,
            stagger: 0.3
        });
        
        // Timeline glow animation
        gsap.to('.timeline-day', {
            boxShadow: '0 0 30px rgba(139, 92, 246, 0.8)',
            duration: 2,
            ease: 'power1.inOut',
            yoyo: true,
            repeat: -1,
            stagger: 0.4
        });
    }
}

// AOS (Animate On Scroll) Configuration
function initAOS() {
    if (typeof AOS !== 'undefined') {
        console.log('Initializing AOS...');
        AOS.init({
            duration: 1000,
            easing: 'ease-in-out',
            once: true,
            mirror: false,
            offset: 100
        });
        console.log('AOS initialized successfully');
    } else {
        console.warn('AOS library not found');
    }
}

// Countdown Timer
// Countdown Timer
function initCountdown() {
    // Set a fixed target date for the hackathon (e.g., December 31, 2025)
    // Month is 0-indexed: January is 0, December is 11
    const hackathonDate = new Date(2025, 7, 24, 15, 0, 0).getTime();
    console.log('Target Hackathon Date (in ms):', hackathonDate);

    // Update the countdown every 100 milliseconds
    const countdownInterval = setInterval(function() {
        const now = new Date().getTime();
        const distance = hackathonDate - now;

        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);
        const milliseconds = Math.floor(distance % 1000);

        const daysElement = document.getElementById('days');
        const hoursElement = document.getElementById('hours');
        const minutesElement = document.getElementById('minutes');
        const secondsElement = document.getElementById('seconds');
        const millisecondsElement = document.getElementById('milliseconds');

        if (distance > 0) {
            daysElement.textContent = days.toString().padStart(2, '0');
            hoursElement.textContent = hours.toString().padStart(2, '0');
            minutesElement.textContent = minutes.toString().padStart(2, '0');
            secondsElement.textContent = seconds.toString().padStart(2, '0');
            millisecondsElement.textContent = milliseconds.toString().padStart(3, '0');
        } else {
            clearInterval(countdownInterval);
            const countdownTimer = document.querySelector('.countdown-timer');
            if (countdownTimer) {
                countdownTimer.innerHTML = '<h2 style="font-size: 2rem;">Hackathon is Live! 🚀</h2>';
            }
        }
    }, 100);
}

// Mobile Navigation
function initMobileNav() {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    
    if (hamburger && navMenu) {
        hamburger.addEventListener('click', function() {
            hamburger.classList.toggle('active');
            navMenu.classList.toggle('active');
            
            // Animate hamburger
            const spans = hamburger.querySelectorAll('span');
            if (hamburger.classList.contains('active')) {
                spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
                spans[1].style.opacity = '0';
                spans[2].style.transform = 'rotate(-45deg) translate(7px, -6px)';
            } else {
                spans[0].style.transform = 'none';
                spans[1].style.opacity = '1';
                spans[2].style.transform = 'none';
            }
        });
        
        // Close mobile menu when clicking on a link
        const navLinks = document.querySelectorAll('.nav-menu a');
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                hamburger.classList.remove('active');
                navMenu.classList.remove('active');
                
                // Reset hamburger animation
                const spans = hamburger.querySelectorAll('span');
                spans[0].style.transform = 'none';
                spans[1].style.opacity = '1';
                spans[2].style.transform = 'none';
            });
        });
    }
}

// Form Validation
function initFormValidation() {
    const form = document.getElementById('registrationForm');
    
    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Reset previous error messages
            clearErrors();
            
            // Get form values
            const name = document.getElementById('name').value.trim();
            const email = document.getElementById('email').value.trim();
            const teamSize = document.getElementById('teamSize').value;
            
            let isValid = true;
            
            // Validate name
            if (!name) {
                showError('name-error', 'Name is required');
                isValid = false;
            } else if (name.length < 2) {
                showError('name-error', 'Name must be at least 2 characters');
                isValid = false;
            }
            
            // Validate email
            if (!email) {
                showError('email-error', 'Email is required');
                isValid = false;
            } else if (!isValidEmail(email)) {
                showError('email-error', 'Please enter a valid email address');
                isValid = false;
            }
            
            // Validate team size
            if (!teamSize) {
                showError('teamSize-error', 'Please select a team size');
                isValid = false;
            }
            
            if (isValid) {
                // Simulate form submission
                showSuccessMessage();
                
                // Reset form
                form.reset();
            }
        });
        
        // Real-time validation
        const inputs = form.querySelectorAll('input, select');
        inputs.forEach(input => {
            input.addEventListener('blur', function() {
                validateField(this);
            });
            
            input.addEventListener('input', function() {
                clearFieldError(this);
            });
        });
    }
}

// Helper functions for form validation
function showError(elementId, message) {
    const errorElement = document.getElementById(elementId);
    if (errorElement) {
        errorElement.textContent = message;
        errorElement.style.display = 'block';
    }
}

function clearErrors() {
    const errorElements = document.querySelectorAll('.error-message');
    errorElements.forEach(element => {
        element.textContent = '';
        element.style.display = 'none';
    });
}

function clearFieldError(input) {
    const fieldName = input.name;
    const errorElement = document.getElementById(fieldName + '-error');
    if (errorElement) {
        errorElement.textContent = '';
        errorElement.style.display = 'none';
    }
}

function validateField(input) {
    const value = input.value.trim();
    const fieldName = input.name;
    
    switch (fieldName) {
        case 'name':
            if (!value) {
                showError('name-error', 'Name is required');
            } else if (value.length < 2) {
                showError('name-error', 'Name must be at least 2 characters');
            }
            break;
        case 'email':
            if (!value) {
                showError('email-error', 'Email is required');
            } else if (!isValidEmail(value)) {
                showError('email-error', 'Please enter a valid email address');
            }
            break;
        case 'teamSize':
            if (!value) {
                showError('teamSize-error', 'Please select a team size');
            }
            break;
    }
}

function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function showSuccessMessage() {
    // Create success message
    const successDiv = document.createElement('div');
    successDiv.className = 'success-message';
    successDiv.innerHTML = `
        <div style="
            background: linear-gradient(135deg, #10B981, #3B82F6);
            color: white;
            padding: 1rem;
            border-radius: 10px;
            text-align: center;
            margin-top: 1rem;
            box-shadow: 0 10px 30px rgba(16, 185, 129, 0.4);
        ">
            <i class="fas fa-check-circle" style="font-size: 1.5rem; margin-bottom: 0.5rem;"></i>
            <p style="margin: 0;">Registration successful! Welcome to the hackathon! 🚀</p>
        </div>
    `;
    
    const form = document.getElementById('registrationForm');
    form.appendChild(successDiv);
    
    // Remove success message after 5 seconds
    setTimeout(() => {
        if (successDiv.parentNode) {
            successDiv.parentNode.removeChild(successDiv);
        }
    }, 5000);
}

// Smooth Scrolling
function initSmoothScrolling() {
    // Smooth scroll for navigation links
    const navLinks = document.querySelectorAll('a[href^="#"]');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                const offsetTop = targetSection.offsetTop - 80; // Account for fixed navbar
                
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Utility function for scrolling to sections
function scrollToSection(sectionId) {
    const targetSection = document.querySelector('#' + sectionId);
    if (targetSection) {
        const offsetTop = targetSection.offsetTop - 80;
        window.scrollTo({
            top: offsetTop,
            behavior: 'smooth'
        });
    }
}

// Add some interactive effects
document.addEventListener('DOMContentLoaded', function() {
    // Add hover effects to sponsor items
    const sponsorItems = document.querySelectorAll('.sponsor-item');
    sponsorItems.forEach(item => {
        item.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-15px) scale(1.05)';
        });
        
        item.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });
    
    // Add parallax effect to hero section
    window.addEventListener('scroll', function() {
        const scrolled = window.pageYOffset;
        const hero = document.querySelector('.hero');
        if (hero) {
            const rate = scrolled * -0.5;
            hero.style.transform = `translateY(${rate}px)`;
        }
    });
    
    // Add glow effect to CTA button on hover
    const ctaButton = document.querySelector('.cta-button');
    if (ctaButton) {
        ctaButton.addEventListener('mouseenter', function() {
            this.style.boxShadow = '0 0 40px rgba(139, 92, 246, 0.8)';
        });
        
        ctaButton.addEventListener('mouseleave', function() {
            this.style.boxShadow = '0 0 20px rgba(139, 92, 246, 0.5)';
        });
    }
});

// Performance optimization: Throttle scroll events
function throttle(func, limit) {
    let inThrottle;
    return function() {
        const args = arguments;
        const context = this;
        if (!inThrottle) {
            func.apply(context, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    }
}

// Performance optimization: Debounce function
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Apply throttling to scroll events
window.addEventListener('scroll', throttle(function() {
    // Scroll-based animations and effects
}, 16)); // 60fps

// Performance monitoring
function monitorPerformance() {
    if ('performance' in window) {
        const observer = new PerformanceObserver((list) => {
            for (const entry of list.getEntries()) {
                if (entry.entryType === 'measure') {
                    console.log(`${entry.name}: ${entry.duration}ms`);
                }
            }
        });
        observer.observe({ entryTypes: ['measure'] });
    }
}

// Initialize performance monitoring
monitorPerformance();

// Custom Cursor
function initCustomCursor() {
    // Create custom cursor element
    const cursor = document.createElement('div');
    cursor.className = 'custom-cursor';
    document.body.appendChild(cursor);
    
    // Create cursor trail elements
    const trails = [];
    for (let i = 0; i < 5; i++) {
        const trail = document.createElement('div');
        trail.className = 'cursor-trail';
        document.body.appendChild(trail);
        trails.push(trail);
    }
    
    let mouseX = 0;
    let mouseY = 0;
    let cursorX = 0;
    let cursorY = 0;
    let trailX = 0;
    let trailY = 0;
    
    // Mouse move event
    document.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
    });
    
    // Hover effects for interactive elements
    const interactiveElements = document.querySelectorAll('a, button, .sponsor-item, .timeline-item, .countdown-item');
    interactiveElements.forEach(element => {
        element.addEventListener('mouseenter', () => {
            cursor.classList.add('hover');
        });
        element.addEventListener('mouseleave', () => {
            cursor.classList.remove('hover');
        });
    });
    
    // Animation loop
    function animateCursor() {
        // Smooth cursor movement
        cursorX += (mouseX - cursorX) * 0.1;
        cursorY += (mouseY - cursorY) * 0.1;
        cursor.style.left = cursorX + 'px';
        cursor.style.top = cursorY + 'px';
        
        // Smooth trail movement
        trailX += (mouseX - trailX) * 0.05;
        trailY += (mouseY - trailY) * 0.05;
        
        // Update trail positions
        trails.forEach((trail, index) => {
            const delay = (index + 1) * 0.1;
            const trailXPos = trailX + (mouseX - trailX) * delay;
            const trailYPos = trailY + (mouseY - trailY) * delay;
            
            trail.style.left = trailXPos + 'px';
            trail.style.top = trailYPos + 'px';
            trail.style.opacity = 0.7 - (index * 0.1);
        });
        
        requestAnimationFrame(animateCursor);
    }
    
    animateCursor();
}

// Cursor Trails with Particles
function initCursorTrails() {
    let particles = [];
    
    document.addEventListener('mousemove', (e) => {
        if (Math.random() > 0.7) {
            createTrailParticle(e.clientX, e.clientY);
        }
    });
    
    function createTrailParticle(x, y) {
        const particle = document.createElement('div');
        particle.style.position = 'fixed';
        particle.style.left = x + 'px';
        particle.style.top = y + 'px';
        particle.style.width = '4px';
        particle.style.height = '4px';
        particle.style.background = `hsl(${Math.random() * 360}, 70%, 60%)`;
        particle.style.borderRadius = '50%';
        particle.style.pointerEvents = 'none';
        particle.style.zIndex = '9997';
        particle.style.boxShadow = '0 0 10px currentColor';
        
        document.body.appendChild(particle);
        
        const animation = particle.animate([
            { transform: 'scale(1)', opacity: 1 },
            { transform: 'scale(0)', opacity: 0 }
        ], {
            duration: 1000,
            easing: 'ease-out'
        });
        
        animation.onfinish = () => {
            particle.remove();
        };
    }
}

// Scroll-based Glow Effects
function initScrollGlowEffects() {
    if (typeof gsap !== 'undefined') {
        // Section-based glow intensity
        gsap.utils.toArray('section').forEach((section, index) => {
            const glowIntensity = gsap.utils.wrap(0.3, 1, index * 0.2);
            
            ScrollTrigger.create({
                trigger: section,
                start: 'top center',
                end: 'bottom center',
                onUpdate: (self) => {
                    const progress = self.progress;
                    const currentGlow = glowIntensity * (0.5 + progress * 0.5);
                    
                    // Apply glow to section elements
                    const headings = section.querySelectorAll('h2, h3');
                    headings.forEach(heading => {
                        heading.style.textShadow = `0 0 ${20 * currentGlow}px rgba(139, 92, 246, ${currentGlow})`;
                    });
                    
                    const buttons = section.querySelectorAll('button');
                    buttons.forEach(button => {
                        button.style.boxShadow = `0 0 ${30 * currentGlow}px rgba(139, 92, 246, ${currentGlow})`;
                    });
                }
            });
        });
    }
}

// Debug function for sponsors section
function debugSponsorsSection() {
    console.log('Debugging sponsors section...');
    
    const sponsorsSection = document.getElementById('sponsors');
    const sponsorsGrid = document.querySelector('.sponsors-grid');
    const sponsorItems = document.querySelectorAll('.sponsor-item');
    
    console.log('Sponsors section:', sponsorsSection);
    console.log('Sponsors grid:', sponsorsGrid);
    console.log('Sponsor items count:', sponsorItems.length);
    
    if (sponsorItems.length > 0) {
        sponsorItems.forEach((item, index) => {
            console.log(`Sponsor item ${index + 1}:`, item);
            console.log(`Sponsor item ${index + 1} computed styles:`, window.getComputedStyle(item));
        });
    }
    
    // Force visibility if needed
    if (sponsorsGrid) {
        sponsorsGrid.style.opacity = '1';
        sponsorsGrid.style.visibility = 'visible';
    }
    
    sponsorItems.forEach(item => {
        item.style.opacity = '1';
        item.style.visibility = 'visible';
        item.style.display = 'flex';
    });
}
