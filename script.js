// Typing effect in hero section
const typingText = document.querySelector('.typing');
const words = ['Web Developer', 'XR Developer', 'Human Being'];
let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;

function type() {
    const currentWord = words[wordIndex];
    
    if (isDeleting) {
        typingText.textContent = currentWord.substring(0, charIndex - 1);
        charIndex--;
    } else {
        typingText.textContent = currentWord.substring(0, charIndex + 1);
        charIndex++;
    }

    if (!isDeleting && charIndex === currentWord.length) {
        isDeleting = true;
        setTimeout(type, 1500);
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        wordIndex = (wordIndex + 1) % words.length;
        setTimeout(type, 500);
    } else {
        setTimeout(type, isDeleting ? 50 : 100);
    }
}

// Start typing effect
type();

// Project data
const projects = [
    {
        title: 'Harmony Project – Toyota Bakkie Maintenance',
        description: 'This project involved performing comprehensive maintenance on a Toyota bakkie to ensure optimal performance and reliability. Key tasks included diagnosing mechanical issues, conducting routine servicing, and implementing preventative measures to extend the vehicle’s lifespan. The project showcased practical skills in automotive care, attention to detail, and a methodical approach to problem-solving.',
        media: 'harmony-project.mp4',
        type: 'video',
        link: 'https://google.com'
    },
    {
        title: ' Shock Tube Project – Blast Wave Simulation ',
        description: 'This project involved the use of a shock tube to replicate and study the effects of explosive blast waves in a controlled environment. Key responsibilities included preparing the experimental setup, triggering high-pressure shock waves, and analysing material responses under dynamic loading. The project highlighted expertise in explosive testing, safety compliance, and data analysis related to high-speed shock phenomena.',
        media: 'harmony-project2.mp4',
        type: 'video',
        link: '#'
    },
    {
        title: 'Sandvik POC Project – VR Training SimulationC',
        description: 'This VR-based proof of concept was developed for Sandvik to simulate heavy machinery operations in a virtual mining environment. The interactive experience allowed users to engage with complex equipment procedures for training, safety demonstration, and operational planning. Built using Unity, the project showcased immersive 3D design, realistic physics, and intuitive user interactions—supporting Sandvik’s push toward innovative, tech-driven workforce development.',
        media: 'harmony-project3.mp4',
        type: 'video',
        link: '#'
    },
    {
        title: ' WebGL Emulator Project',
        description: 'This project is a Unity-based WebGL launcher designed to load multiple applications from a single interface. It uses a JSON configuration file to dynamically display buttons that launch individual WebGL builds. The system is lightweight, modular, and ideal for offline use, such as on MoodleBox devices. It demonstrates effective use of Unity UI, JSON parsing, and WebGL deployment strategies for scalable content delivery.',
        media: 'harmony-project4.mp4',
        type: 'video',
        link: '#'
    }
];

// Populate projects
const projectGrid = document.getElementById('projectGrid');

projects.forEach(project => {
    const projectCard = document.createElement('div');
    projectCard.className = 'project-card';

    let mediaElement;
    if (project.type === 'video') {
        mediaElement = document.createElement('video');
        mediaElement.src = project.media;
        mediaElement.controls = true;
        mediaElement.muted = true;
        mediaElement.playsInline = true;
        mediaElement.classList.add('project-media');
    } else {
        mediaElement = document.createElement('img');
        mediaElement.src = project.media;
        mediaElement.alt = project.title;
        mediaElement.classList.add('project-media');
    }

    const info = document.createElement('div');
    info.classList.add('project-info');

    const title = document.createElement('h3');
    title.textContent = project.title;

    const desc = document.createElement('p');
    desc.textContent = project.description;

    const link = document.createElement('a');
    link.href = project.link;
    link.target = '_blank';
    link.textContent = 'View Project';

    info.appendChild(title);
    info.appendChild(desc);
    info.appendChild(link);

    projectCard.appendChild(mediaElement);
    projectCard.appendChild(info);
    projectGrid.appendChild(projectCard);
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

// Form submission
const contactForm = document.getElementById('contactForm');
contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    // Add your form submission logic here
    alert('Thank you for your message! I will get back to you soon.');
    contactForm.reset();
}); 
