import {publications} from "../data/publications.js";
import {publicationTemplate} from "../template/publicationTemplate.js";

const publicationsElement = document.getElementById('publications')
if (publicationsElement) {
    let selectedPublicationsHTML = "";
    const showAll = publicationsElement.getAttribute("data-show-all")
    publications.forEach(item => {
        if (item.selected || showAll) {
            selectedPublicationsHTML += Mustache.render(publicationTemplate, item);
        }
    });

    publicationsElement.innerHTML = selectedPublicationsHTML;
}

