import {awards} from "../data/awards.js";
import {awardTemplate} from "../template/awardTemplate.js";

if (document.getElementById('awards')) {
    let awardsHTML = "";
    awards.forEach(item => {
        awardsHTML += Mustache.render(awardTemplate, item);
    });

    document.getElementById('awards').innerHTML = awardsHTML;
}
