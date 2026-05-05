import {awards} from "../data/awards.js";
import {awardTemplate} from "../template/awardTemplate.js";

let awardDisplayLength = 5;
let awardsHTML = "";


if (document.getElementById('awards')) {

    let awardsToDisplay = awards.slice(0, awardDisplayLength);
    awardsToDisplay.forEach(item => {
        awardsHTML += Mustache.render(awardTemplate, item);
    });

    document.getElementById('awards').innerHTML = awardsHTML;
}
