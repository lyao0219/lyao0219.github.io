//GET NEWS

let news = [];

let newsElement = document.querySelectorAll(".d-flex")
newsElement.forEach(element => {
    let item = {
        type: element.querySelector(".mb-0").innerHTML,
        place: element.querySelector(".mb-3") ? element.querySelector(".mb-3").innerHTML : "",
        time: element.querySelector(".text-primary").innerHTML,
        description: element.querySelector(".flex-grow-1 p").innerHTML
    }
    news.push(item)
})

console.log(JSON.stringify(news))

//GET PUBLICATIONS
let publications = []
let publicationElement = document.querySelectorAll(".flex-grow-1")
publicationElement.forEach(element => {
    let iconElement = element.querySelectorAll(".ml-5")
    let icons = []
    iconElement.forEach(element => {
        icons.push({
            url: element.querySelector("a").getAttribute('href'),
            icon: element.querySelector("img").getAttribute('src')
        })
    })

    let item = {
        event: element.querySelectorAll("mark")[0].innerHTML,
        type: element.querySelectorAll("mark")[1]?.innerHTML,
        title: element.querySelector(".mb-0").innerHTML,
        author: element.querySelector(".subheading").innerHTML,
        subtitle: element.querySelector(".mb-3").innerHTML,
        description: element.querySelector(".flex-grow-1 p").innerHTML,
        teaser: element.querySelector(".border img").getAttribute("src"),
        icons: icons
    }

    publications.push(item)
})

console.log(JSON.stringify(publications))

// EXPERIENCE
let experience = []
let experienceElement = document.querySelectorAll(".d-flex")
experienceElement.forEach(element => {
    let logos = []
    element.querySelectorAll(".mt-2 img").forEach(el => {
        logos.push(el.getAttribute("src"))
    })
    let item = {
        jobTitle: element.querySelector(".me-5 h3").innerHTML,
        time: element.querySelector(".flex-shrink-0 span").innerHTML,
        logo: logos,
        place: element.querySelector(".subheading.mb-3").innerHTML,
        description: element.querySelector(".me-5 p").innerHTML
    }
    education.push(item)
})

console.log(JSON.stringify(experience))


// Education
let education = []
let educationElement = document.querySelectorAll(".d-flex")
educationElement.forEach(element => {
    let logos = []
    element.querySelectorAll(".mt-2 img").forEach(el => {
        logos.push(el.getAttribute("src"))
    })
    let item = {
        title: element.querySelector(".me-5 h3").innerHTML,
        time: element.querySelector(".flex-shrink-0 span").innerHTML,
        logo: logos,
        place: element.querySelector(".subheading.mb-3").innerHTML,
        description: element.querySelector(".me-5 p").innerHTML
    }
    education.push(item)
})

console.log(JSON.stringify(education))

// Study
let study = []
let studyElement = document.querySelectorAll(".float-right .ml-5")
studyElement.forEach(element => {
    let item = {
        title: element.querySelector("span").innerHTML,
        logo1: {
            href: element.querySelectorAll("a")[0].getAttribute("href"),
            icon: element.querySelectorAll("a img")[0].getAttribute("src")
        },
        logo2: {
            href: element.querySelectorAll("a")[1].getAttribute("href"),
            icon: element.querySelectorAll("a img")[1].getAttribute("src")
        }
    }
    study.push(item)
})

console.log(JSON.stringify(study))


// awards
let awards = []
let awardsElement = document.querySelectorAll(".mb-0 li")
awardsElement.forEach(element => {
    let item = {
        text: element.innerHTML,
    }
    awards.push(item)
})

console.log(JSON.stringify(awards))
