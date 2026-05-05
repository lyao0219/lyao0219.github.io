import {bibtex, publications} from "../data/publications.js";
import {publicationTemplate} from "../template/publicationTemplate.js";
import {popupTemplate} from "../template/popupTemplate.js";

const monthOrder = {
    jan: 1,
    january: 1,
    feb: 2,
    february: 2,
    mar: 3,
    march: 3,
    apr: 4,
    april: 4,
    may: 5,
    jun: 6,
    june: 6,
    jul: 7,
    july: 7,
    aug: 8,
    august: 8,
    sep: 9,
    sept: 9,
    september: 9,
    oct: 10,
    october: 10,
    nov: 11,
    november: 11,
    dec: 12,
    december: 12
};

const customPublicationOrderByYear = {
    2025: [21, 1, 18, 20, 19, 2, 4]
};

function getPublicationSortMonth(publication) {
    const bibtexText = (publication.popups || [])
        .map(popup => bibtex[popup.contentId] || "")
        .join(" ");
    const dateText = `${publication.subtitle || ""} ${bibtexText}`.toLowerCase();
    const monthMatches = dateText.match(/\b(jan(?:uary)?|feb(?:ruary)?|mar(?:ch)?|apr(?:il)?|may|jun(?:e)?|jul(?:y)?|aug(?:ust)?|sep(?:t)?(?:ember)?|oct(?:ober)?|nov(?:ember)?|dec(?:ember)?)\.?\b/g) || [];

    return monthMatches.reduce((latestMonth, month) => {
        const normalizedMonth = month.replace(".", "");
        return Math.max(latestMonth, monthOrder[normalizedMonth] || 0);
    }, 0);
}

function getSortedPublications(publicationList) {
    return [...publicationList].sort((a, b) => {
        const yearDifference = b.year - a.year;
        if (yearDifference !== 0) {
            return yearDifference;
        }

        const customOrder = customPublicationOrderByYear[a.year];
        if (customOrder) {
            const aIndex = customOrder.indexOf(a.id);
            const bIndex = customOrder.indexOf(b.id);
            if (aIndex !== -1 && bIndex !== -1) {
                return aIndex - bIndex;
            }
        }

        const monthDifference = getPublicationSortMonth(b) - getPublicationSortMonth(a);
        if (monthDifference !== 0) {
            return monthDifference;
        }

        return b.id - a.id;
    });
}

function getSearchableText(publication) {
    return [
        publication.event,
        publication.type?.text,
        publication.title,
        publication.author,
        publication.subtitle,
        publication.description
    ].filter(Boolean).join(" ").replace(/<[^>]*>/g, " ").toLowerCase();
}

function bindPublicationPopups() {
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
}

function renderPublications(publicationList, showAll) {
    let selectedPublicationsHTML = "";
    let yearList = [];

    getSortedPublications(publicationList).forEach(item => {
        if (showAll && !yearList.includes(item.year)) {
            yearList.push(item.year);
            selectedPublicationsHTML += `<div class='publication-year text-medium text-21'>${item.year}</div>`;
            selectedPublicationsHTML += `<hr>`;
        }
        if (item.selected || showAll) {
            selectedPublicationsHTML += Mustache.render(publicationTemplate, item);
        }
    });

    publicationsElement.innerHTML = selectedPublicationsHTML || "<p class='text-17 text-light publication-empty'>No publications found.</p>";
    bindPublicationPopups();
}

function populatePublicationFilter(selectElement, values) {
    if (!selectElement) {
        return;
    }

    values.forEach(value => {
        const option = document.createElement("option");
        option.value = value;
        option.textContent = value;
        selectElement.appendChild(option);
    });
}

function setupPublicationControls(showAll) {
    const searchInput = document.getElementById("publication-search");
    const venueFilter = document.getElementById("publication-venue-filter");
    const typeFilter = document.getElementById("publication-type-filter");

    if (!showAll || !searchInput || !venueFilter || !typeFilter) {
        return;
    }

    const venues = [...new Set(publications.map(item => item.event).filter(Boolean))].sort();
    const types = [...new Set(publications.map(item => item.type?.text).filter(Boolean))].sort();
    populatePublicationFilter(venueFilter, venues);
    populatePublicationFilter(typeFilter, types);

    const applyFilters = () => {
        const searchValue = searchInput.value.trim().toLowerCase();
        const venueValue = venueFilter.value;
        const typeValue = typeFilter.value;

        const filteredPublications = publications.filter(publication => {
            const matchesSearch = !searchValue || getSearchableText(publication).includes(searchValue);
            const matchesVenue = !venueValue || publication.event === venueValue;
            const matchesType = !typeValue || publication.type?.text === typeValue;
            return matchesSearch && matchesVenue && matchesType;
        });

        renderPublications(filteredPublications, showAll);
    };

    searchInput.addEventListener("input", applyFilters);
    venueFilter.addEventListener("change", applyFilters);
    typeFilter.addEventListener("change", applyFilters);
}

const publicationsElement = document.getElementById('publications')
if (publicationsElement) {
    const showAll = publicationsElement.getAttribute("data-show-all");
    renderPublications(publications, showAll);
    setupPublicationControls(showAll);
}
