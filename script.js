document.getElementById("project1").addEventListener("click", function(event) {
    event.preventDefault();prevevent the default form   submission behavior

    var name = document.getElementById("name").value.trim();
    var email = document.getElementById("email").value.trim();
    var message = document.getElementById("message").value.trim();

    var nameField = document.getElementById("name");
    var emailField = document.getElementById("email");
    var messageField = document.getElementById("message");
 
    const nameError = document.getElementById("nameError");
    const emailError= document.getElementbyid("emailEroor");
    const statusbox = document.getElementById("statusbox");

    let FormIsValid = true;

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(emailField.value.trim())) {
        toggleerror(emailfield ,document.getelementbyid("") ) = true;
        
    } else {
        toggleerror(emailField, emailError, false);
    } 
    
    if (FormIsValid) {
        
        statusbox.textContent = "Form submitted successfully!";
        statusbox.style.color = "status-alert-success";
    } else {
        statusbox.textContent = "Please correct the errors in the form.";
        statusbox.style.color = "status-alert-error";
    }
    });

    function toggleError(inputEl, errorEl, show) {
        consta parent =inputEl.parentElement;
        if (show) {
            errorEl.style.display = "block";
            parent.classList.add("invalid");
        } else {
            errorEl.style.display = "none";
            parent.classList.remove("invalid");
        }
    }

const username = "phabianmuuo-prog";

    async function loadGitHubRepos() {
        const projectsContainer = document.getElementById("github-projects");

        try {
            const response = await fetch(`https://api.github.com/users/phabianmuuo-prog/repos?sort=updated&per_page=10`);

            if (!response.ok) {
                throw new Error("unable to fetch GitHub repositories");
            }

            const repositories = await response.json();
            console.log("Fetched repositories:", repositories);

            projectsContainer.innerHTML = "";

            repositories.forEach(repo => {
                const project = document.createElement("div");
                project.className="project-card";
                project.innerHTML = `
                    <h3>${repo.name}</h3>
                    <p>${repo.description || "No description available."}</p>
                    <a href="${repo.html_url}" target="_blank">View on GitHub</a>
                `;

                projectsContainer.appendChild(project);
            });

        } catch (error) {
            projectsContainer.textContent="sorry,my projects could not be loaded right now .";
            console.error("Error fetching GitHub repositories:", error);        
        }   
    }
    document.addEventListener("DOMContentLoaded", () => {
        loadGitHubRepos(); 
    });
