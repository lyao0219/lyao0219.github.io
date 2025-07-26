import {projects} from "../data/projects.js";
import {projectTeaserTemplate} from "../template/projectTeaserTemplate.js";

if (document.getElementById('projects')) {
    let projectHTML = "";
    projects.forEach(item => {
        projectHTML += Mustache.render(projectTeaserTemplate, item);
    });

    document.getElementById('projects').innerHTML = projectHTML;

    document.querySelectorAll(".project-block").forEach(el => {
        el.addEventListener("click", (event) => {
            let projectId = event.currentTarget.getAttribute("data-id")
            window.location.href = "project.html?id=" + projectId
        })
    })
}

