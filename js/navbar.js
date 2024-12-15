import {navbar} from "../data/navbar.js";
import {navbarTemplate} from "../template/navbarTemplate.js";


if (document.getElementById('navbar')) {
    let navBarHTML = "";
    navbar.forEach(item => {
        navBarHTML += Mustache.render(navbarTemplate, item);
    });

    document.getElementById('navbar').innerHTML = navBarHTML;
}

