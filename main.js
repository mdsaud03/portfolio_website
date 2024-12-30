let menuIcon = document.querySelector('#menu-icon'); // fixed typo here
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('fa-xmark');
    navbar.classList.toggle('active');
};

let sections = document.querySelectorAll('section'); // changed to querySelectorAll for multiple sections
let navLinks = document.querySelectorAll('header nav a'); // changed to querySelectorAll for multiple links

window.onscroll = () => {
    let top = window.scrollY;
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach.apply(link => {
                link.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        }
    });

    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100);

    menuIcon.classList.remove('fa-xmark');
    navbar.classList.remove('active');
};

// ScrollReveal initialization
ScrollReveal({
    distance: '80px',
    duration: 2000,
    delay: 200,
});

ScrollReveal().reveal('.home-content, heading', { origin: 'top' }); // fixed missing comma
ScrollReveal().reveal('.home-img, .services-container, .portfolio-box, .contact form', { origin: 'bottom' });
ScrollReveal().reveal('.home-contact h1, .about-img', { origin: 'left' });
ScrollReveal().reveal('.home-contact p, .about-content', { origin: 'right' });

// Typed.js initialization
const typed = new Typed('.multiple-text', {
    strings: ['Frontend Developer', 'Network Administrator', 'Data Analyst'],
    typeSpeed: 70,
    backSpeed: 70,
    backDelay: 1000,
    loop: true, // changed semicolon to comma here
});
