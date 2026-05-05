import {awards} from "../data/awards.js";
import {awardTemplate} from "../template/awardTemplate.js";

let awardDisplayLength = 3;
let awardsHTML = "";


if (document.getElementById('awards')) {

    let awardsToDisplay = awards.slice(0, awardDisplayLength)
    awardsToDisplay.forEach(item => {
        awardsHTML += Mustache.render(awardTemplate, item);
    });

    document.getElementById('awards').innerHTML = awardsHTML;

    document.getElementById('award-load-more-btn').addEventListener("click", () => {
        awardDisplayLength = awards.length
        let awardsToDisplay = awards.slice(3, awardDisplayLength)
        awardsToDisplay.forEach(item => {
            awardsHTML += Mustache.render(awardTemplate, item);
        });

        document.getElementById('awards').innerHTML = awardsHTML;
        document.getElementById('award-load-more-btn').classList.add("hide")
        document.getElementById('award-show-less-btn').classList.remove("hide")
    });

    document.getElementById('award-show-less-btn').addEventListener("click", () => {
        awardDisplayLength = 3
        awardsHTML = ""
        let awardsToDisplay = awards.slice(0, awardDisplayLength)
        awardsToDisplay.forEach(item => {
            awardsHTML += Mustache.render(awardTemplate, item);
        });
        window.scrollTo({ top: 0, behavior: 'smooth' })
        document.getElementById('awards').innerHTML = awardsHTML;
        document.getElementById('award-load-more-btn').classList.remove("hide")
        document.getElementById('award-show-less-btn').classList.add("hide")
    });
}