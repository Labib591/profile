// Navigation Menu Toggle
const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');

    burger.addEventListener('click', () => {
        // Toggle Nav
        nav.classList.toggle('nav-active');

        // Animate Links
        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = '';
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
            }
        });

        // Burger Animation
        burger.classList.toggle('toggle');
    });
}

// Glitch Effect
const glitchText = () => {
    const glitch = document.querySelector('.glitch');
    if (!glitch) return;

    setInterval(() => {
        glitch.style.transform = `translate(${Math.random() * 2}px, ${Math.random() * 2}px)`;
        setTimeout(() => {
            glitch.style.transform = 'translate(0, 0)';
        }, 50);
    }, 3000);
}

// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Form Handling
const handleForm = () => {
    const form = document.getElementById('contact-form');
    if (!form) return;

    form.addEventListener('submit', async (e) => {
        e.preventDefault();

        const formData = {
            name: document.getElementById('name').value,
            email: document.getElementById('email').value,
            message: document.getElementById('message').value
        };

        // Here you would typically send the form data to a server
        console.log('Form submitted:', formData);
        
        // Clear form
        form.reset();
        
        // Show success message
        alert('Thank you for your message! I will get back to you soon.');
    });
}

// Project Cards Data
const projects = [
    {
        title: 'Weather App',
        description: 'A sleek weather application built with Flutter that provides real-time weather information using the OpenWeather API. Features include current weather conditions, forecasts, and beautiful weather animations.',
        image: '../assets/weather-news.png',
        tags: ['Flutter', 'Dart', 'OpenWeather API', 'REST API']
    },
    {
        title: 'To-Do App',
        description: 'A minimalist yet powerful to-do list application built with Flutter. Features include task categories, due dates, priority levels, and local storage for persistent data.',
        image: '../assets/to-do-list (1).png',
        tags: ['Flutter', 'Dart', 'SQLite', 'State Management']
    },
    {
        title: 'Flappy Bird Clone',
        description: 'A faithful recreation of the classic Flappy Bird game using Flutter. Features smooth animations, physics-based gameplay, and high score tracking.',
        image: '../assets/bird.png',
        tags: ['Flutter', 'Dart', 'Game Development', 'Animation']
    }
];

// Populate Projects
const populateProjects = () => {
    const projectsGrid = document.querySelector('.projects-grid');
    if (!projectsGrid) return;

    projects.forEach(project => {
        const projectCard = document.createElement('div');
        projectCard.className = 'project-card';
        projectCard.innerHTML = `
            <div class="project-image">
                <img src="${project.image}" alt="${project.title}">
            </div>
            <div class="project-content">
                <h3>${project.title}</h3>
                <p>${project.description}</p>
                <div class="project-tags">
                    ${project.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
                </div>
            </div>
        `;
        projectsGrid.appendChild(projectCard);
    });
}

// Scroll Animations
const scrollReveal = () => {
    const sections = document.querySelectorAll('section');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('section-visible');
            }
        });
    }, { threshold: 0.1 });

    sections.forEach(section => {
        section.classList.add('section-hidden');
        observer.observe(section);
    });
}

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    navSlide();
    glitchText();
    handleForm();
    populateProjects();
    scrollReveal();
});
