import "./navbar.js";
import "./publications.js";
import "./socialLinks.js";
import "./education.js";
import "./experiences.js";
import "./news.js";
import "./awards.js";
import "./projects.js";
import "./project.js";

const mobileMenu = document.getElementById("mobile-menu");
const header = document.getElementById("header");

if (mobileMenu && header) {
    mobileMenu.addEventListener("click", () => {
        const isOpen = header.classList.toggle("open");
        header.style.display = isOpen ? "flex" : "";
        document.body.style.overflowY = isOpen ? "hidden" : "unset";
    });
}

async function init() {
    await new Promise((resolve) => {
        if (document.readyState === "complete") {
            resolve();
            return;
        }

        const timeoutId = setTimeout(() => {
            console.warn("Forced load after 20s timeout");
            resolve();
        }, 20000);

        window.addEventListener("load", () => {
            clearTimeout(timeoutId);
            resolve();
        }, {once: true});
    });

    const loader = document.querySelector(".loader-block");
    const content = document.querySelector(".content");

    if (loader) {
        loader.style.display = "none";
    }

    if (content) {
        content.style.display = "block";
    }
}

init();

const copyright = document.getElementById("copyright");
if (copyright) {
    copyright.innerHTML = '<p class="text-14 text-light">Copyright &copy; 2026 Lijie Yao. All Rights Reserved. Last update: May 2026</p>';
}

const profile = document.getElementById("profile");
if (profile) {
    profile.innerHTML = `
        <div class="profile-photo-wrap">
            <img class="img-profile" src="assets/img/LijieYao.jpg" alt="Lijie Yao's photo"/>
        </div>
        <div class="profile-text">
            <p class="text-heavy text-25 name">Lijie <span class="text-orange">YAO</span></p>
            <p class="text-heavy text-25 name"><span class="text-orange">姚</span>李捷</p>
            <div class="bar orange"></div>
            <p class="text-medium text-14 job-title">Assistant Professor</p>
        </div>
    `;
}

const selfIntroduction = document.getElementById("self-introduction");
if (selfIntroduction) {
    selfIntroduction.innerHTML = `
        <p class="text-17 text-light">
            I am an Assistant Professor at
            <img src="assets/img/icons/china.png" class="inner-text-icon" alt="China"/>
            <img src="assets/img/icons/uk.png" class="inner-text-icon" alt="United Kingdom"/>
            <a href="https://www.xjtlu.edu.cn/en" target="_blank">Xi'an Jiaotong-Liverpool University</a> (XJTLU).
            Before joining XJTLU, I was a postdoctoral and doctoral researcher at
            <img src="assets/img/icons/france.png" class="inner-text-icon" alt="France"/>
            <a href="https://www.inria.fr/en" target="_blank">INRIA</a>, <a href="https://www.aviz.fr/" target="_blank">AVIZ</a>,
            working with <a href="https://petra.isenberg.cc/wiki/pmwiki.php" target="_blank">Dr. Petra Isenberg</a>
            and <a href="https://www.lri.fr/~anab/" target="_blank">Prof. Anastasia Bezerianos</a>.
            I also visited the
            <img src="assets/img/icons/canada.png" class="inner-text-icon" alt="Canada"/>
            <a href="https://www.ucalgary.ca/" target="_blank">University of Calgary</a>, working with
            <a href="https://www.wjwillett.net/" target="_blank">Dr. Wesley Willett</a>.
        </p>
        <p class="text-17 text-light">
            I received my Ph.D. from
            <img src="assets/img/icons/france.png" class="inner-text-icon" alt="France"/>
            <a href="https://www.universite-paris-saclay.fr/en" target="_blank">Université Paris-Saclay</a>.
            My dissertation received the <a href="https://www.afihm.org/" target="_blank">AFIHM Ph.D. Thesis Prize</a>
            and the Canada Mitacs Globalink Research Award. Part of my work on
            <a href="https://www.theses.fr/s258022" target="_blank">Visualization in Motion</a>
            was applied in the 2024 Paris Olympics swimming races.
        </p>
        <p class="text-17 text-light">
            My research interests include <i>visualization in motion</i>,
            <i>AI-assisted data communication</i>, and <i>human-AI interaction</i>.
            Collaboration from academia and industry is welcome. Please contact me at
            <a href="mailto:yaolijie0219@gmail.com?subject=[CONTACT]&cc=yaolijie0219@163.com" target="_blank">yaolijie0219@gmail.com</a>.
        </p>
        <div class="highlighted-part recruitment-callout">
            <div class="hiring-icon-wrap">
                <img src="assets/img/icons/megaphone.png" class="hiring-icon" alt="Recruitment announcement"/>
            </div>
            <div class="recruitment-content">
                <p class="recruitment-label text-medium text-14">Recruitment</p>
                <p class="text-17 text-light">
                    I am hiring <strong>highly motivated Ph.D. students</strong>.
                    Students interested in visualization, AI, and HCI can fill in this
                    <a class="recruitment-cta" href="https://forms.gle/h3qb57hbCDJiuERz9" target="_blank">Google Form</a>.
                    Ph.D. and Master's degrees are awarded by the
                    <img src="assets/img/icons/uk.png" class="inner-text-icon" alt="United Kingdom"/>
                    <a href="https://www.liverpool.ac.uk/" target="_blank">University of Liverpool</a>.
                </p>
            </div>
        </div>
    `;
}
