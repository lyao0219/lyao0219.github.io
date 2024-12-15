import {experiences} from "../data/experiences.js";
import {experienceTemplate} from "../template/experienceTemplate.js";


if (document.getElementById('experiences')) {
    let experiencesHTML = "";
    experiences.forEach(item => {
        experiencesHTML += Mustache.render(experienceTemplate, item);
    });

    document.getElementById('experiences').innerHTML = experiencesHTML;
}

