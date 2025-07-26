import {navbar} from "../data/navbar.js";
import {navbarTemplate} from "../template/navbarTemplate.js";


if (document.getElementById('navbar')) {
    let navBarHTML = "";

    const page = window.location.pathname.split('/').pop();

    navbar.forEach(item => {
        if (page.includes(item.href) || (item.href == "projects.html" && page == "project.html")) {
            item.class = "active"
        } else {
            item.class = ""
        }
        navBarHTML += Mustache.render(navbarTemplate, item);
    });

    document.getElementById('navbar').innerHTML = navBarHTML;

}

