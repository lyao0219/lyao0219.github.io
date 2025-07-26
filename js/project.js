import {projects} from "../data/projects.js";
import {projectTemplate} from "../template/projectTemplate.js";
import {publications} from "../data/publications.js";
import {publicationTemplate} from "../template/publicationTemplate.js";

if (document.getElementById('project-detail')) {
    const urlParams = new URLSearchParams(window.location.search);
    const id = urlParams.get('id');

    if (id) {
        const project = projects[id - 1]
        const relatedPublications = project.publications
        let publicationContent = []
        relatedPublications.forEach(el => {
            let publicationIds = el.ids
            let acrossRefHTML = ""
            publicationIds.forEach(pbId => {
                acrossRefHTML += Mustache.render(publicationTemplate, publications[pbId - 1]);
            })

            publicationContent.push({
                description: el.description,
                content: acrossRefHTML
            })
        })

        project["content"] = publicationContent

        document.getElementById('project-detail').innerHTML = Mustache.render(projectTemplate, project)
    }
}

