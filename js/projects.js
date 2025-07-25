import {projects} from "../data/projects.js";
import {projectTemplate} from "../template/projectTemplate.js";

if (document.getElementById('projects')) {
    let projectHTML = "";
    projects.forEach(item => {
        projectHTML += Mustache.render(projectTemplate, item);
    });

    document.getElementById('projects').innerHTML = projectHTML;
}

