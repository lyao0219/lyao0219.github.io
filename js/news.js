import {news} from "../data/news.js";
import {newsTemplate} from "../template/newsTemplate.js";

let displayLength = 3;
let newsHTML = "";

if (document.getElementById('news')) {
    let newsToDisplay = news.slice(0, displayLength);
    newsToDisplay.forEach(item => {
        newsHTML += Mustache.render(newsTemplate, item);
    });

    document.getElementById('news').innerHTML = newsHTML;
}
