document.addEventListener('DOMContentLoaded', function() {
    // Replace with your actual GitHub projects data
    const projects = [
        {
            name: "Digital Clock",
            description: "A responsive website built with HTML, CSS, and JavaScript",
            technologies: ["HTML", "CSS", "JavaScript"],
            githubUrl: "https://github.com/Anneshabhakta2005/Digital-Clock",
            liveUrl: "https://github.com/Anneshabhakta2005/Digital-Clock",
            category: "Frontend"
        },
        {
            name: "Random Password Generator", 
            description: "A responsive website built with HTML, CSS, and JavaScript",
            technologies: ["HTML", "CSS", "JavaScript"],
            githubUrl: "https://github.com/Anneshabhakta2005/Random-Password-Generator.git",
            liveUrl: "https://github.com/Anneshabhakta2005/Random-Password-Generator.git",
            category: "Frontend"
        },
        {
            name: "Web Development Quiz app",
            description: "A responsive website built with HTML, CSS, and JavaScript",
            technologies: ["HTML", "CSS", "JavaScript"],
            githubUrl: "https://github.com/Anneshabhakta2005/Web-Development-Quiz-app.git",
            liveUrl: "https://github.com/Anneshabhakta2005/Web-Development-Quiz-app.git",
            category: "Frontend"
        },
        // Add more projects as needed
    ];

    const projectsContainer = document.getElementById('projects-container');
    
    projects.forEach(project => {
        const projectCard = document.createElement('div');
        projectCard.className = 'project-card bg-purple-900 bg-opacity-70 rounded-xl overflow-hidden border border-purple-600 transition-all hover:border-pink-400 hover:transform hover:-translate-y-1';
        
        projectCard.innerHTML = `
            <div class="p-6">
                <div class="flex justify-between items-start mb-4">
                    <h3 class="text-2xl font-semibold text-pink-300">${project.name}</h3>
                    <span class="text-xs bg-pink-500 bg-opacity-30 text-pink-200 px-2 py-1 rounded-full">${project.category}</span>
                </div>
                <p class="text-purple-100 mb-4">${project.description}</p>
                <div class="flex flex-wrap gap-2 mb-4">
                    ${project.technologies.map(tech => 
                        `<span class="tech-tag">${tech}</span>`
                    ).join('')}
                </div>
                <div class="flex space-x-3">
                    <a href="${project.githubUrl}" class="project-link" target="_blank">
                        <i class="fab fa-github mr-1"></i> Code
                    </a>
                    ${project.liveUrl ? `
                    <a href="${project.liveUrl}" class="project-link" target="_blank">
                        <i class="fas fa-external-link-alt mr-1"></i> Live Demo
                    </a>
                    ` : ''}
                </div>
            </div>
        `;
        
        projectsContainer.appendChild(projectCard);
    });
});