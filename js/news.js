import {news} from "../data/news.js";
import {newsTemplate} from "../template/newsTemplate.js";

let displayLength = 3
let newsHTML = "";

if (document.getElementById('news')) {

    let newsToDisplay = news.slice(0, displayLength)
    newsToDisplay.forEach(item => {
        newsHTML += Mustache.render(newsTemplate, item);
    });

    document.getElementById('news').innerHTML = newsHTML;

    document.getElementById('load-more-btn').addEventListener("click", () => {
        displayLength = news.length
        let newsToDisplay = news.slice(3, displayLength)
        newsToDisplay.forEach(item => {
            newsHTML += Mustache.render(newsTemplate, item);
        });

        document.getElementById('news').innerHTML = newsHTML;
        document.getElementById('load-more-btn').classList.add("hide")
        document.getElementById('show-less-btn').classList.remove("hide")
    });

    document.getElementById('show-less-btn').addEventListener("click", () => {
        displayLength = 3
        newsHTML = ""
        let newsToDisplay = news.slice(0, displayLength)
        newsToDisplay.forEach(item => {
            newsHTML += Mustache.render(newsTemplate, item);
        });
        window.scrollTo({ top: 0, behavior: 'smooth' })
        document.getElementById('news').innerHTML = newsHTML;
        document.getElementById('load-more-btn').classList.remove("hide")
        document.getElementById('show-less-btn').classList.add("hide")
    });
}
