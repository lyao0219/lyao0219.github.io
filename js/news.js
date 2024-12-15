import {news} from "../data/news.js";
import {newsTemplate} from "../template/newsTemplate.js";

if (document.getElementById('news')) {
    let newsHTML = "";
    news.forEach(item => {
        newsHTML += Mustache.render(newsTemplate, item);
    });

    document.getElementById('news').innerHTML = newsHTML;
}
