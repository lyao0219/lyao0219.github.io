import "./navbar.js"
import "./publications.js"
import "./socialLinks.js"
import "./education.js"
import "./experiences.js"
import "./news.js"
import "./awards.js"

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

if (document.getElementById('copyright')) {
    document.getElementById('copyright').innerHTML =
        '<p class="text-14 text-light">Copyright &copy 2025 Lijie Yao. All Rights Reserved. Last update: April 2025</p>'
}

if (document.getElementById('profile')) {
    document.getElementById('profile').innerHTML =
        '<img class="img-profile" src="assets/img/LijieYao.jpg" alt="Lijie Yao\'s Photo"/>\n' +
        '<div class="profile-text">' +
        '<p class="text-heavy text-25 name">Lijie <span class="text-orange">YAO</span></p>\n' +
        '<p class="text-heavy text-25 name"><span class="text-orange">姚</span>李捷</p>\n' +
        '<div class="bar orange"></div>\n' +
        '<p class="text-medium text-14 job-title">ASSISTANT PROFESSOR</p>\n' +
        '<p class="text-medium text-14 job-title">IN VISUALIZATION</p>' +
        '</div>'
}

if (document.getElementById('self-introduction')) {
    document.getElementById('self-introduction').innerHTML =
        '                   <p class="text-17 text-light">\n' +
        '                    I am an Assistant Professor at\n' +
        '                    <img src="assets/img/icons/china.png" class="inner-text-icon"/>\n' +
        '                    <img src="assets/img/icons/uk.png" class="inner-text-icon"/>\n' +
        '                    <a href="https://www.xjtlu.edu.cn/en" target="_blank">Xi\'an Jiaotong-Liverpool University</a>.\n' +
        '                    I received my Ph.D. degree from\n' +
        '                    <img src="assets/img/icons/france.png" class="inner-text-icon">\n' +
        '                    <a href="https://www.universite-paris-saclay.fr/en" target="_blank">University Paris-Saclay</a>,\n' +
        '                    supervised by <a href="https://petra.isenberg.cc/wiki/pmwiki.php" target="_blank">Dr. Petra\n' +
        '                    Isenberg</a>\n' +
        '                    and <a href="https://www.lri.fr/~anab/" target="_blank">Prof. Anastasia Bezerianos</a>.\n' +
        '                    My Ph.D. dissertation on <a href="https://www.theses.fr/s258022" target="_blank">"Situated\n' +
        '                    Visualization\n' +
        '                    in Motion"</a> received the <a href="https://www.afihm.org/" target="_blank">PhD Thesis Prize from\n' +
        '                    AFIHM</a>. Previously, I was a postdoctoral and doctoral researcher at\n' +
        '                    <img src="assets/img/icons/france.png" class="inner-text-icon">\n' +
        '                    <a href="https://www.inria.fr/en" target="_blank">INRIA</a>,\n' +
        '                    <a href="https://www.aviz.fr/" target="_blank">AVIZ</a> team,\n' +
        '                    and a visiting researcher at <img src="assets/img/icons/canada.png" class="inner-text-icon">\n' +
        '                    <a href="https://www.ucalgary.ca/" target="_blank">University of Calgary</a>, hosted by\n' +
        '                    <a href="https://www.wjwillett.net/" target="_blank">Dr. Wesley Willett</a>.\n' +
        '                    My research focuses on exploring the impact of motion characteristics and spatial factors on the\n' +
        '                    perception, design, and user experience of visual representations.\n' +
        '                </p>\n' +
        '                <p class="text-17 text-light">\n' +
        '                    <img src="assets/img/icons/promote.png" class="inner-text-icon">I am looking for <strong>highly\n' +
        '                    motivated PhD students, research assistants, and graduate students</strong>.\n' +
        '                    Please explore <a href="publications.html">PUBLICATIONS</a> section\n' +
        '                    for possible project ideas and research opportunities. If you are passionate about visualization, feel\n' +
        '                    free to contact me! Meeting availabilities from June to September are based on email requirements.\n' +
        '                </p>\n' +
        '                <p class="text-17 text-light">\n' +
        '                    <img src="assets/img/icons/collaborate.png" class="inner-text-icon">If you are a\n' +
        '                    <strong>company</strong> or <strong>academic</strong> that wants to discuss <strong>anything\n' +
        '                    visualisation</strong>, please drop me an email at\n' +
        '                    <a href="mailto: yaolijie0219@gmail.com?subject=[CONTACT]&cc=yaolijie0219@163.com" target="_blank">yaolijie0219@gmail.com</a>.\n' +
        '                    I am very good at replying emails 🙂.\n' +
        '                </p>'
}
