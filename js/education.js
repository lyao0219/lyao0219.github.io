import {education} from "../data/education.js";
import {educationTemplate} from "../template/educationTemplate.js";


if (document.getElementById('education')) {
    let educationHTML = "";
    education.forEach(item => {
        educationHTML += Mustache.render(educationTemplate, item);
    });

    document.getElementById('education').innerHTML = educationHTML;
}

