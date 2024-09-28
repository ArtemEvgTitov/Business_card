const projects = document.getElementById('projects');
const start = document.getElementById('start');
const skills = document.getElementById('skills');
const projectsDisplay = document.getElementById('projects-display');
const startDisplay = document.getElementById('start-display');
const skillsDisplay = document.getElementById('skills-display');


projects.addEventListener('click', () => {
    startDisplay.classList.add('inactive');
    skillsDisplay.classList.add('inactive');
    projectsDisplay.classList.remove('inactive');
    start.classList.remove('active-link');
    skills.classList.remove('active-link');
    projects.classList.add('active-link');
})

skills.addEventListener('click', () => {
    startDisplay.classList.add('inactive');
    projectsDisplay.classList.add('inactive');
    skillsDisplay.classList.remove('inactive');
    start.classList.remove('active-link');
    projects.classList.remove('active-link');
    skills.classList.add('active-link');
})

start.addEventListener('click', () => {
    projectsDisplay.classList.add('inactive');
    skillsDisplay.classList.add('inactive');
    startDisplay.classList.remove('inactive');
    start.classList.add('active-link');
    projects.classList.remove('active-link');
    skills.classList.remove('active-link');
})