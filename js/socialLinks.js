import {socialLinks} from "../data/socialLinks.js";
import {socialLinkTemplate} from "../template/socialLinkTemplate.js";

if (document.getElementById('social-links')) {
    let socialLinksHTML = "";
    socialLinks.forEach(item => {
        socialLinksHTML += Mustache.render(socialLinkTemplate, item);
    });

    document.getElementById('social-links').innerHTML = socialLinksHTML;
}

