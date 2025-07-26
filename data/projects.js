export const projects = [
    {
        id: 1,
        title: "Visualization in Motion",
        teaser: "assets/teaser/visinmotion_logo.png",
        publications: [
            {
                description: "Main papers:",
                ids: [7, 5, 4]
            },
            {
                description: "A compacted version of main papers:",
                ids: [3]
            },
            {
                description: "An even short version in the format of a poster:",
                ids: [2]
            },
            {
                description: "Initial posters from where the story started:",
                ids: [17, 15, 14, 16]
            }
        ],
        collaboration: "Most of this project was done at Aviz, Inria, France, a few was done at Xi’an Jiaotong-Liverpool University, China, in collaboration with University Paris-Saclay, France, Ecole Centrable de Lyon, France and Carleton University, Canada. \n",
        introduction: "With the development of computing technologies, visualization has moved from paper to digital devices and has even been physicalized. The relative movement relationship between the visualization and its viewer has more possibilities, such as under motion. We defined such visualizations that illustrated the relative movement relationship between its viewer as a visualization in motion:\n" +
            "<div class='italic-text'><i>Visualizations in motion are visual data representations used in contexts that exhibit relative motion between a viewer and an entire visualization.</i></div>" +
            "Based on the different movement status of visualizations and their viewers, we classified visualizations in motion into three categories:\n" +
            "<div class='italic-text'>" +
            "a. Moving visualization & Stationary viewer\n" +
            "b. Moving viewer & Stationary visualization\n" +
            "c. Moving visualization & Moving viewer</div>" +
            "We excluded the case when both the visualization and the viewer are stationary, as there is no relative motion between them, and as such, it is out of the scope of our topic.\n\n" +
            "We first proposed a research agenda in which we articulated from 4 aspects what features may have an impact and which kind of work needs to be done. We next conducted a series of perception studies to understand how motion characteristics can affect visualization readability and to what extent. Our results showed that people can get reliable information from visualizations in motion even under high speeds and irregular trajectories. \n\n" +
            "<a href='https://youtu.be/sIzRfNIsRV4'>Presentation video at IEEE VIS 2022:</a>\n" +
            "<div class='video'><iframe src=\"https://www.youtube.com/embed/sIzRfNIsRV4?si=1MEiPohjpSeVKqwn\" title=\"YouTube video player\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share\" referrerpolicy=\"strict-origin-when-cross-origin\" allowfullscreen></iframe></div>\n" +
            "<a href='https://youtu.be/sIzRfNIsRV4'>Experiment demonstration:</a>\n" +
            "<div class='video'><iframe src=\"https://www.youtube.com/embed/z9LsWYHSGHc?si=RGG4lj8_cI-8Ly7h\" title=\"YouTube video player\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share\" referrerpolicy=\"strict-origin-when-cross-origin\" allowfullscreen></iframe></div>\n" +
            "After which, we explored how to design and embed visualizations in motion into a dynamic context— swimming. We first proposed a data matrix to show what kind of swimming data can be collected and visualized. We then conducted an online survey with swimming enthusiasts to investigate what data they are really interested in seeing during the race. Following, we conducted an ideation workshop with visualization practitioners to elicit dedicated visual designs for swimming data. After, we implemented a technical probe, SwimFlow, that allows users to design, embed, and redesign visualizations in motion in real time onto a swimming video, and to generate live demos. We finally evaluate SwimFlow with professional designers. Our work is a first attempt to apply visualizations in motion in a real application scenario. A part of our output has been used in practice in the 2024 Paris Olympics.\n\n" +
            "<a href='https://www.youtube.com/watch?v=lFf8sM52rMc'>FastForward video at IEEE VIS 2024:</a>\n" +
            "<div class='video'><iframe src=\"https://www.youtube.com/embed/lFf8sM52rMc?si=TFNEBdbQcRPoHHUp\" title=\"YouTube video player\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share\" referrerpolicy=\"strict-origin-when-cross-origin\" allowfullscreen></iframe></div>" +
            "<a href='https://www.youtube.com/watch?v=7Y2cPfXGiAY&t=2011s'>Presentation video at IEEE VIS 2024:</a>\n" +
            "<div class='video'><iframe src=\"https://www.youtube.com/embed/7Y2cPfXGiAY?si=KWgb4pa5wSbXSCjR\" title=\"YouTube video player\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share\" referrerpolicy=\"strict-origin-when-cross-origin\" allowfullscreen></iframe></div>" +
            "<a href='https://youtu.be/yC39NXBJiE8'><i>SwimFlow</i> demonstration:</a>\n" +
            "<div class='video'><iframe src=\"https://www.youtube.com/embed/yC39NXBJiE8?si=Fje1QXkx7P6JDmpH\" title=\"YouTube video player\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share\" referrerpolicy=\"strict-origin-when-cross-origin\" allowfullscreen></iframe></div>" +
            "Next, we explored the user experience of visualization in motion. We selected video games as our testbed as it has rich and dynamic game data, as well as multiple types of motion, including the movement of game characters and the camera. We first conducted a comprehensive systematic review of in-game visualization in motion to understand how visualizations have been designed in practice, what kind of data has been shown, and where the visualizations have been embedded. We found that the practical designers have various design considerations. To determine the proper designs for evaluation, we conducted an internal brainstorming. We then developed our own video game, RobotLife, and embedded the 3 designs to evaluate in it. We conducted a user evaluation with senior game players. Our results showed that there are full design trade-offs for visualization in motion, a balance between readability, aesthetics, engagement, and task support needs to be achieved.\n\n" +
            "<a href='https://www.youtube.com/watch?v=X9GOtQyXfx8'>FastForward video at IEEE VIS 2024:</a>\n" +
            "<div class='video'><iframe src=\"https://www.youtube.com/embed/X9GOtQyXfx8?si=OeBxeOT3KZTwT43A\" title=\"YouTube video player\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share\" referrerpolicy=\"strict-origin-when-cross-origin\" allowfullscreen></iframe></div>\n" +
            "<a href='https://www.youtube.com/watch?v=7Y2cPfXGiAY&t=1237s'>Presentation video at IEEE VIS 2024:</a>\n" +
            "<div class='video'><iframe src=\"https://www.youtube.com/embed/7Y2cPfXGiAY?si=Axp331PSxbfjUBXh\" title=\"YouTube video player\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share\" referrerpolicy=\"strict-origin-when-cross-origin\" allowfullscreen></iframe></div>\n" +
            "<a href='https://youtu.be/yC39NXBJiE8'><i>RobotLife</i> demonstration:</a>\n" +
            "<div class='video'><iframe src=\"https://www.youtube.com/embed/yC39NXBJiE8?si=5N3ls_1US42QwO1q\" title=\"YouTube video player\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share\" referrerpolicy=\"strict-origin-when-cross-origin\" allowfullscreen></iframe></div>\n"
    },
    {
        id: 2,
        title: "Mobile and Wearable Visualization",
        teaser: "assets/teaser/mwv.png",
        publications: [
            {
                description: "A research agenda:",
                ids: [13]
            },
            {
                description: "A series of perception studies:",
                ids: [8]
            },
            {
                description: "A data needs collection:",
                ids: [11]
            }
        ],
        introduction: "Mobile and wearable devices, such as smartwatches, are widely used in daily life to collect, track, and monitor personal health and fitness data, such as heart rate, calories burned, and exercise time. Users commonly need to read data from their smartwatches at a glance, especially when doing physical exercises. Different from a desk monitor or a regular display, smartwatches always have a small screen size and limited space to display data, which brings additional challenges for reading visualizations, especially when in motion.\n" +
            "\n" +
            "To understand what the research challenges and opportunities are for visualizations displayed on mobile and wearable devices such as smartwatches and fitness trackers, we first reviewed the current designs of data representations on smartwatches. We next discussed how motion characteristics, such as speed, trajectory, direction, and acceleration, may impact the data design that needs to be read within a brief, on a small screen, and under motion. We then proposed a dedicated research agenda for visualization in motion on smartwatches.\n\n<a href='https://www.youtube.com/watch?v=7qy-dgjE4L4' target='_blank'>Fastforward video at MobileHCI 2022 workshop:</a>\n" +
            "<div class='video'><iframe src=\"https://www.youtube.com/embed/7qy-dgjE4L4?si=1dUWUa0GmhgAFCW1\" title=\"YouTube video player\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share\" referrerpolicy=\"strict-origin-when-cross-origin\" allowfullscreen></iframe></div>" +
            "\n" +
            "Next, we conducted a series of perception studies to investigate how motion characteristics: speeds and trajectories can affect the reading performance from a smartwatch and to what extent. We asked participants to wear a smartwatch and read from it by raising their wrist when walking and jogging at different speeds (2 km/h, 4 km/h, and 6 km/h) and along different trajectories (straight line, circular, and infinity). Our results showed that the walking activity, especially at higher speeds, would impact the reading accuracy and, to some extent, response time; while the walking trajectories didn’t significantly affect the reading performance.\n" +
            "\n" +
            "<a href='https://www.youtube.com/watch?v=2DE5LfUsIWA' target='_blank'>FastForward video at IEEE VIS 2024:</a>\n" +
            "<div class='video'><iframe src=\"https://www.youtube.com/embed/2DE5LfUsIWA?si=rl9ewLE4IxX3MFHT\" title=\"YouTube video player\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share\" referrerpolicy=\"strict-origin-when-cross-origin\" allowfullscreen></iframe></div>\n" +
            "<a href='https://www.youtube.com/watch?v=5O_zfoG4xOo&t=3931s' target='_blank'>Presentation video at IEEE VIS 2024:</a>\n" +
            "<div class='video'><iframe src=\"https://www.youtube.com/embed/5O_zfoG4xOo?si=BLNqAqI-OnIgHESA\" title=\"YouTube video player\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share\" referrerpolicy=\"strict-origin-when-cross-origin\" allowfullscreen></iframe></div>\n" +
            "Apart from basic knowledge on perception influence, we were also curious about the information needs of people who are used to wearing and reading from their smartwatch while doing outdoor activities. Not all data will be relevant all the time. Instead, users have information needs that change throughout their activity depending on the context and their performance. To address this challenge, we collected a diverse corpus of information needs paired with contextualizing audio, video, and sensor data. We proposed a set of challenges and design considerations that explore the difficulties of visualizing those real data needs in context and demonstrate a prototype tool for browsing, aggregating, and analyzing this information. Our ultimate goal is to understand and support embedding visualizations into outdoor contexts with changing environments and varying data needs.\n" +
            "\n" +
            "<a href='https://youtu.be/4hNulDHo7Ak&t=1908s'>Presentation video at IEEE VIS 2024 workshop:</a>\n" +
            "<div class='video'><iframe src=\"https://www.youtube.com/embed/4hNulDHo7Ak?si=AzUKNiyWF8YKfhML\" title=\"YouTube video player\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share\" referrerpolicy=\"strict-origin-when-cross-origin\" allowfullscreen></iframe></div>\n" +
            "\n",
        collaboration: "This project has multiple parts of collaboration, including Aviz, Inria, France, University Paris-Saclay, France, University of Stuttgart, Germany, Microsoft, USA, Ecole Centrale de Lyon, France, University of Calgary, Canada, University of Victoria, Canada, and Xi'an Jiaotong-Liverpool University, China.",
    },
    {
        id: 3,
        title: "Tangible Interaction",
        teaser: "assets/teaser/ti_logo.png",
        publications: [
            {
                description: "A systematic review",
                ids: [1]
            }
        ],
        introduction: 'Tangible widgets have been shown to reduce cognitive load, enable more natural interactions, and support the completion of complex data exploration tasks. Yet, the field lacks a structured understanding of how task types, interaction methods, and widget designs are coordinated, limiting the ability to identify recurring design patterns and opportunities for innovation. \n' +
            '\n' +
            'To address this gap, we conduct a systematic review to analyze existing work and characterize the current design of data exploration tasks, interactions, and tangible visualization widgets. We next reflect based on our findings and propose a research agenda to inform the development of a future widget design toolkit for tangible data exploration.\n',
        collaboration: "This project was done at Xi'an Jiaotong-Liverpool University, China.\n",
    }
]
