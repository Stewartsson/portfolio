// Initialize Particles.js
particlesJS('particles-js', {
    particles: {
        number: {
            value: 80,
            density: {
                enable: true,
                value_area: 800
            }
        },
        color: {
            value: '#00f3ff'
        },
        shape: {
            type: 'circle'
        },
        opacity: {
            value: 0.5,
            random: true
        },
        size: {
            value: 3,
            random: true
        },
        line_linked: {
            enable: true,
            distance: 150,
            color: '#00f3ff',
            opacity: 0.2,
            width: 1
        },
        move: {
            enable: true,
            speed: 2,
            direction: 'none',
            random: true,
            straight: false,
            out_mode: 'out',
            bounce: false
        }
    },
    interactivity: {
        detect_on: 'canvas',
        events: {
            onhover: {
                enable: true,
                mode: 'grab'
            },
            onclick: {
                enable: true,
                mode: 'repulse'
            },
            resize: true
        },
        modes: {
            grab: {
                distance: 200,
                line_linked: {
                    opacity: 0.8
                }
            },
            repulse: {
                distance: 200,
                duration: 0.4
            }
        }
    },
    retina_detect: true
});

// Typed.js Animation for Subtitle
const typed = new Typed('.typed-text', {
    strings: [
        'Hardware & Embedded Systems Engineer', 
        'IoT Developer & Enthusiast', 
        'VLSI Design Specialist',
        'C & Python Programmer'
    ],
    typeSpeed: 50,
    backSpeed: 30,
    backDelay: 2000,
    loop: true
});

// Initialize VanillaTilt for 3D Cards
VanillaTilt.init(document.querySelectorAll(".tilt-card"), {
    max: 10,
    speed: 400,
    glare: true,
    "max-glare": 0.2,
    scale: 1.02
});

// GSAP Animations
gsap.registerPlugin(ScrollTrigger);

// Hero Initial Animations
const tl = gsap.timeline();
tl.from('.logo', { y: -50, opacity: 0, duration: 0.8, ease: 'power3.out' })
  .from('.nav-links li', { y: -50, opacity: 0, duration: 0.5, stagger: 0.1, ease: 'power3.out' }, '-=0.4')
  .from('.glitch', { scale: 0.8, opacity: 0, duration: 1, ease: 'back.out(1.7)' }, '-=0.2')
  .from('.subtitle', { y: 20, opacity: 0, duration: 0.8, ease: 'power3.out' }, '-=0.6')
  .from('.tagline', { y: 20, opacity: 0, duration: 0.8, ease: 'power3.out' }, '-=0.6')
  .from('.hero-btns .btn', { y: 20, opacity: 0, duration: 0.5, stagger: 0.2, ease: 'power3.out' }, '-=0.4')
  .from('.scroll-indicator', { opacity: 0, duration: 1 }, '-=0.2');

// Scroll Reveal Animations for Sections
const revealElements = document.querySelectorAll('.gs-reveal');

revealElements.forEach((el) => {
    gsap.fromTo(el, 
        { 
            y: 80, 
            opacity: 0,
            scale: 0.95
        },
        {
            y: 0,
            opacity: 1,
            scale: 1,
            duration: 1,
            ease: 'power3.out',
            scrollTrigger: {
                trigger: el,
                start: 'top 85%',
                toggleActions: 'play none none reverse'
            }
        }
    );
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
