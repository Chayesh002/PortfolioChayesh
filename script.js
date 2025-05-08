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
        description: 'This project involved performing comprehensive maintenance on a Toyota bakkie to ensure optimal performance and reliability. Key tasks included diagnosing mechanical issues, conducting routine servicing, and implementing preventative measures to extend the vehicle’s lifespan. The project showcased practical skills in automotive care and attention to detail',
        media: 'harmony-project.mp4',
        type: 'video',
        
    },
    {
        title: ' Shock Tube Project – Blast Wave Simulation ',
        description: 'This project involved the use of a shock tube to replicate and study the effects of explosive blast waves in a controlled environment. Key responsibilities included preparing the experimental setup, triggering high-pressure shock waves, and analysing material responses under dynamic loading. The project highlighted expertise in explosive testing, safety compliance and data analysis',
        media: 'harmony-project2.mp4',
        type: 'video',
       
    },
    {
        title: 'Sandvik POC Project – PC Training SimulationC',
        description: 'Developed a VR mining training simulation and assisted with real-world explosive testing using a shock tube. Focused on terrain analysis, blast effects, and safety protocols.',
        media: 'harmony-project3.mp4',
        type: 'video',
     
    },
    {
        title: ' WebGL Emulator Project',
        description: 'This project is a Unity-based WebGL launcher designed to load multiple applications from a single interface. It uses a JSON configuration file to dynamically display buttons that launch individual WebGL builds. The system is lightweight, modular, and ideal for offline use, such as on MoodleBox devices. It demonstrates effective use of Unity UI, JSON parsing, and WebGL deployment strategies for scalable content delivery.',
        media: 'harmony-project4.mp4',
        type: 'video',
      
    },
      {
        title: 'Custom Unity Package',
        description: 'Developed a modular Unity package featuring the mining vehicle. The package includes a clean prefab, optimised FBX model, physically-based materials, and all texture dependencies. Designed for industrial simulations, it supports scalable and plug-and-play deployment in Unity projects, demonstrating strong skills in asset packaging, prefab structuring, and UPM compatibility.',
        media: 'harmony-project5.mp4',
        type: 'video',
       
    },
          {
        title: 'AR Project',
        description: 'This AR experience uses the devices camera to blend the real world with digital content. When the user taps the screen, a branded logo appears seamlessly in the environment. The project demonstrates interactive touch-based placement in AR.',
        media: 'harmony-project6.mp4',
        type: 'video',
      
    },
              {
        title: 'Water Simulation Sandbox',
        description: 'A small interactive scene where cubes drop into water, creating realistic splashes and ripples. Users can tweak everything from the time of day and water depth to reflection, distortion, and even the colour of the water — all through a simple control panel. A fun way to explore real-time physics and visual effects!',
        media: 'harmony-project7.mp4',
        type: 'video',
        
    },
              {
        title: 'Free-Roam Ocean Experience',
        description: 'An interactive boat experience on dynamic water, featuring real-time controls for lighting, waves, and visuals—showcasing physics, environment design, and visual customisation..',
        media: 'harmony-project8.mp4',
        type: 'video',
    
    },
             {
        title: 'Driving Simulation Project',
        description: 'An immersive Unity-based driving simulator featuring free-roam exploration, vehicle spawning, and AI competition. Players can switch between different vehicles and explore a detailed open map while hunting down and racing against an AI-controlled car that loops the environment. The project showcases mechanics such as real-time vehicle control, AI pathfinding, and interactive world design.(Unity project Revamp)',
        media: 'harmony-project9.mp4',
        type: 'video',
    
    },
                 {
        title: 'Octopus AR Demo – Image Tracking Experience',
        description: 'This augmented reality demo uses image tracking to bring a playful 3D squid to life. When the target image is scanned, the squid appears with looping animations, and users can place underwater assets like coral, creating an interactive and immersive scene that blends digital content with the real world.',
        media: 'harmony-project10.mp4',
        type: 'video',
    
    },
    {
        title: 'Unity Project Revamp',
        description: 'Rescued and optimised a legacy Unity project by upgrading it to the latest compatible version. Identified and resolved critical bugs, restoring full functionality and improving performance, pc -> mobile ',
        media: 'harmony-project11.mp4',
        type: 'video',
    
    },
   // {
   //     title: 'Octopus AR Demo – Image Tracking Experience',
   //     description: 'This augmented reality demo uses image tracking to anchor an animated octopus to a real-world surface. Once the image is recognised, the octopus spawns at the correct position and plays a looping animation. Users can drag and place additional underwater assets like coral and sea plants, which snap to the tracked surface. The project demonstrates AR anchoring, interactive asset placement, and animation triggering in a responsive 3D environment.',
   //     media: 'harmony-project10.mp4',
   //     type: 'video',
    
   // }
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
    //link.href = project.link; 
    link.target = '_blank';

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


