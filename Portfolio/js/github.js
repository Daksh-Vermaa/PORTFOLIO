/* GITHUB.JS
    Fetches public repositories from GitHub API.
*/

// !!! CHANGE THIS TO YOUR GITHUB USERNAME !!!
const username = 'Daksh-Vermaa'; 

const container = document.getElementById('project-container');

async function fetchProjects() {
    try {
        const response = await fetch(`https://api.github.com/users/${username}/repos?sort=updated&direction=desc`);
        const data = await response.json();

        // Clear loading state
        container.innerHTML = '';

        // Take top 6 repos
        const projects = data.slice(0, 6);

        projects.forEach(repo => {
            const card = document.createElement('div');
            card.classList.add('project-card', 'interactable');
            
            // Add interaction listeners for the new dynamic elements
            card.addEventListener('mouseenter', () => {
                const cursor = document.getElementById('cursor');
                cursor.classList.add('hovered');
            });
            card.addEventListener('mouseleave', () => {
                const cursor = document.getElementById('cursor');
                cursor.classList.remove('hovered');
            });

            card.innerHTML = `
                <h3>${repo.name}</h3>
                <p>${repo.description || "No description available."}</p>
                <div class="stats">
                    <span>⭐ ${repo.stargazers_count}</span>
                    <span>🍴 ${repo.forks_count}</span>
                </div>
                <br>
                <a href="${repo.html_url}" target="_blank" class="repo-link">VIEW CODE ></a>
            `;
            
            container.appendChild(card);
        });

    } catch (error) {
        container.innerHTML = `<p class="error">ERROR: GITHUB_UPLINK_FAILED</p>`;
        console.error('Error fetching repos:', error);
    }
}

// Fetch when projects section is revealed
const projectsSection = document.getElementById('projects');
const projectObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if(entry.isIntersecting && container.innerHTML.includes('LOADING')) {
            fetchProjects();
        }
    });
}, { threshold: 0.1 });

projectObserver.observe(projectsSection);