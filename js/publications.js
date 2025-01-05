import {bibtex, publications} from "../data/publications.js";
import {publicationTemplate} from "../template/publicationTemplate.js";
import {popupTemplate} from "../template/popupTemplate.js";

const publicationsElement = document.getElementById('publications')
if (publicationsElement) {
    let selectedPublicationsHTML = "";
    const showAll = publicationsElement.getAttribute("data-show-all")
    let sortedPublications = publications.sort((a, b) => b.year - a.year);
    let yearList = []
    sortedPublications.forEach(item => {
        if (showAll && !yearList.includes(item.year)) {
            yearList.push(item.year)
            selectedPublicationsHTML += `<div class='publication-year text-medium text-21'>${item.year}</div>`
            selectedPublicationsHTML += `<hr>`
        }
        if (item.selected || showAll) {
            selectedPublicationsHTML += Mustache.render(publicationTemplate, item);
        }
    });

    publicationsElement.innerHTML = selectedPublicationsHTML;
}

let popupIcons = document.querySelectorAll(".popup-icon");
if (popupIcons) {
    for (let i = 0; i < popupIcons.length; i++) {
        popupIcons[i].addEventListener("click", function (e) {
            let contentId = e.currentTarget.getAttribute("data-popup-id");
            if (!contentId || !bibtex[contentId]) {
                console.error('Invalid content ID or missing BibTeX entry');
                return;
            }

            let popupElement = document.getElementById('popup');
            if (popupElement && popupElement.parentNode) {
                popupElement.parentNode.removeChild(popupElement);
            }

            let title = "BibTeX entry:";
            let popupHTML = Mustache.render(popupTemplate, {
                title: title,
                content: bibtex[contentId]
            });
            document.body.insertAdjacentHTML('beforeend', popupHTML);

            document.querySelector('#popup .popup-close').addEventListener("click", () => {
                let popupElement = document.getElementById('popup');
                if (popupElement && popupElement.parentNode) {
                    popupElement.parentNode.removeChild(popupElement);
                }
            });

            document.querySelector('#popup .popup-copy').addEventListener("click", () => {
                setTimeout(() => {
                    document.getElementById("copy-text").innerText = "Copied";
                    document.querySelector(".popup-copy").classList.add("text-orange");
                }, 500);

                setTimeout(() => {
                    document.getElementById("copy-text").innerText = "Copy";
                    document.querySelector(".popup-copy").classList.remove("text-orange");
                }, 5000);

                navigator.clipboard.writeText(bibtex[contentId]).then(() => {
                });
            });
        });
    }
}
