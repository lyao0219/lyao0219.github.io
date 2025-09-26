import "./navbar.js"
import "./publications.js"
import "./socialLinks.js"
import "./education.js"
import "./experiences.js"
import "./news.js"
import "./awards.js"
import "./projects.js"
import "./project.js"

document.getElementById("mobile-menu").addEventListener("click", () => {
    let menuBox = document.getElementById('header');
    if (menuBox && menuBox.style && menuBox.style.display === 'flex') {
        menuBox.style.display = 'none';
        document.body.style.overflowY = "unset"
    } else {
        menuBox.style.display = 'flex';
        menuBox.classList.toggle("open");
        document.body.style.overflowY = "hidden"
    }
})


async function init() {
    await new Promise((resolve) => {
        if (document.readyState === 'complete') {
            resolve();
        } else {
            const timeoutId = setTimeout(() => {
                console.warn('Forced load after 20s timeout');
                resolve();
            }, 20000);

            window.addEventListener('load', () => {
                clearTimeout(timeoutId);
                resolve();
            }, { once: true });
        }
    });

    document.querySelector('.loader-block').style.display = 'none';
    document.querySelector('.content').style.display = 'block';
}

init().then();

if (document.getElementById('copyright')) {
    document.getElementById('copyright').innerHTML =
    '<p class="text-14 text-light">Copyright &copy 2025 Lijie Yao. All Rights Reserved. Last update: September 2025</p>'
}

if (document.getElementById('profile')) {
    document.getElementById('profile').innerHTML =
        '<img class="img-profile" src="assets/img/LijieYao.jpg" alt="Lijie Yao\'s Photo"/>\n' +
        '<div class="profile-text">' +
        '<p class="text-heavy text-25 name">Lijie <span class="text-orange">YAO</span></p>\n' +
        '<p class="text-heavy text-25 name"><span class="text-orange">姚</span>李捷</p>\n' +
        '<div class="bar orange"></div>\n' +
        '<p class="text-medium text-14 job-title">ASSISTANT PROFESSOR</p>' +
        '</div>'
}

if (document.getElementById('self-introduction')) {
    document.getElementById('self-introduction').innerHTML =
        '                   <p class="text-17 text-light">\n' +
        '                    I am an Assistant Professor at\n' +
        '                    <img src="assets/img/icons/china.png" class="inner-text-icon"/>\n' +
        '                    <img src="assets/img/icons/uk.png" class="inner-text-icon"/>\n' +
        '                    <a href="https://www.xjtlu.edu.cn/en" target="_blank">Xi\'an Jiaotong-Liverpool University</a> (XJTLU).\n' +
        '                    Before I joined XJTLU, I was a  postdoctoral and doctoral research at <img src="assets/img/icons/france.png" class="inner-text-icon">\n' +
        '                    <a href="https://www.inria.fr/en" target="_blank">INRIA</a>, <a href="https://www.aviz.fr/" target="_blank">AVIZ</a> team (worked with <a href="https://petra.isenberg.cc/wiki/pmwiki.php" target="_blank">Dr. Petra Isenberg</a>\n' +
        '                    and <a href="https://www.lri.fr/~anab/" target="_blank">Prof. Anastasia Bezerianos</a>), and a visiting research at the <img src="assets/img/icons/canada.png" class="inner-text-icon">\n' +
        '                    <a href="https://www.ucalgary.ca/" target="_blank">University of Calgary</a> (worked with \n' +
        '                    <a href="https://www.wjwillett.net/" target="_blank">Dr. Wesley Willett</a>).\n' +
        '                    I obtained my Ph.D. degree from\n' +
        '                    <img src="assets/img/icons/france.png" class="inner-text-icon">\n' +
        '                    <a href="https://www.universite-paris-saclay.fr/en" target="_blank">University Paris-Saclay</a>,\n' +
        '                    My dissertation work received the <a href="https://www.afihm.org/" target="_blank">PhD Thesis Prize from\n' +
        '                    AFIHM</a> and Canada Mitacs Globalink Research Award. Part of my work on <a href="https://www.theses.fr/s258022" target="_blank">"Visualization in Motion"</a>  was applied in the 2024 Paris Olympics swimming races.\n' +
        '                    My research interested include <i>visualization in motion</i>, <i>AI-assisted data communication</i>, and <i>human-AI interaction</i>.\n' +
        '                    Collaboration from both academia and industry is more than welcome. Please drop me an email at\n' +
        '                    <a href="mailto: yaolijie0219@gmail.com?subject=[CONTACT]&cc=yaolijie0219@163.com" target="_blank">yaolijie0219@gmail.com</a>.\n' +
        '                    I am very good at replying to emails 🙂. \n' + 
        '                </p>\n' +
        '                <div class="highlighted-part">' +
        '                <p class="text-17 text-light">\n' +
        '                    <img src="assets/img/icons/promote.png" class="inner-text-icon hiring-icon">I am hiring <strong>highly\n' +
        '                    motivated PhD students, half-scholarship can be provided (tuition fee + conference attendance)</strong>, please click <a href = "http://www.findaphd.com/phds/projectdetails.aspx?PJID=186186" target="_blank"><strong>here</strong></a>for details.\n' +
        '                </p>\n' +
        '                <p class="text-17 text-light">\n' +
        '                    For students who is interested in visualization, AI, and HCI, and want to conduct their post-graduate and graduate research with me, please fill in the <a href="https://forms.gle/h3qb57hbCDJiuERz9" target="_blank">Google Form</a>. For PhD and Master, degrees will be adwarded by the <img src="assets/img/icons/uk.png" class="inner-text-icon"/>\n' +
        '                    <a href="https://www.liverpool.ac.uk/" target="_blank">University of Liverpool</a>.\n' +
        '                </p>\n'
        '                </div>'
}
