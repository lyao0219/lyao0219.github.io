export const projects = [
    {
        id: 1,
        title: "Visualization in Motion",
        teaser: "assets/teaser/visinmotion_logo.png",
        publications: [
            {
                description: "Main papers:",
                ids: [7, 5, 4, 25]
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
        collaboration: "Most of this project was done at Aviz, Inria, France and Xi'an Jiaotong-Liverpool University, China, in collaboration with University Paris-Saclay, France, Ecole Centrable de Lyon, France and Carleton University, Canada. \n",
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
            "<a href='https://youtu.be/z9LsWYHSGHc'>Experiment demonstration:</a>\n" +
            "<div class='video'><iframe src=\"https://www.youtube.com/embed/z9LsWYHSGHc?si=RGG4lj8_cI-8Ly7h\" title=\"YouTube video player\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share\" referrerpolicy=\"strict-origin-when-cross-origin\" allowfullscreen></iframe></div>\n" +
            "After which, we explored how to design and embed visualizations in motion into a dynamic context— swimming. We first proposed a data matrix to show what kind of swimming data can be collected and visualized. We then conducted an online survey with swimming enthusiasts to investigate what data they are really interested in seeing during the race. Following, we conducted an ideation workshop with visualization practitioners to elicit dedicated visual designs for swimming data. After, we implemented a technical probe, SwimFlow, that allows users to design, embed, and redesign visualizations in motion in real time onto a swimming video, and to generate live demos. We finally evaluate SwimFlow with professional designers. Our work is a first attempt to apply visualizations in motion in a real application scenario. A part of our output has been used in practice in the 2024 Paris Olympics.\n\n" +
            "<a href='https://www.youtube.com/watch?v=lFf8sM52rMc'>Fast forward video at IEEE VIS 2024:</a>\n" +
            "<div class='video'><iframe src=\"https://www.youtube.com/embed/lFf8sM52rMc?si=TFNEBdbQcRPoHHUp\" title=\"YouTube video player\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share\" referrerpolicy=\"strict-origin-when-cross-origin\" allowfullscreen></iframe></div>" +
            "<a href='https://www.youtube.com/watch?v=7Y2cPfXGiAY&t=2011s'>Presentation video at IEEE VIS 2024:</a>\n" +
            "<div class='video'><iframe src=\"https://www.youtube.com/embed/7Y2cPfXGiAY?si=aA8Ba9VBFaqV6dtS&amp;start=2011\" title=\"YouTube video player\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share\" referrerpolicy=\"strict-origin-when-cross-origin\" allowfullscreen></iframe></div>" +
            "<a href='https://youtu.be/yC39NXBJiE8'><i>SwimFlow</i> demonstration:</a>\n" +
            "<div class='video'><iframe src=\"https://www.youtube.com/embed/yC39NXBJiE8?si=Fje1QXkx7P6JDmpH\" title=\"YouTube video player\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share\" referrerpolicy=\"strict-origin-when-cross-origin\" allowfullscreen></iframe></div>" +
            "Next, we explored the user experience of visualization in motion. We selected video games as our testbed as it has rich and dynamic game data, as well as multiple types of motion, including the movement of game characters and the camera. We first conducted a comprehensive systematic review of in-game visualization in motion to understand how visualizations have been designed in practice, what kind of data has been shown, and where the visualizations have been embedded. We found that the practical designers have various design considerations. To determine the proper designs for evaluation, we conducted an internal brainstorming. We then developed our own video game, RobotLife, and embedded the 3 designs to evaluate in it. We conducted a user evaluation with senior game players. Our results showed that there are full design trade-offs for visualization in motion, a balance between readability, aesthetics, engagement, and task support needs to be achieved.\n\n" +
            "<a href='https://www.youtube.com/watch?v=X9GOtQyXfx8'>Fast forward video at IEEE VIS 2024:</a>\n" +
            "<div class='video'><iframe src=\"https://www.youtube.com/embed/X9GOtQyXfx8?si=OeBxeOT3KZTwT43A\" title=\"YouTube video player\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share\" referrerpolicy=\"strict-origin-when-cross-origin\" allowfullscreen></iframe></div>\n" +
            "<a href='https://www.youtube.com/watch?v=7Y2cPfXGiAY&t=1237s'>Presentation video at IEEE VIS 2024:</a>\n" +
            "<div class='video'><iframe src=\"https://www.youtube.com/embed/7Y2cPfXGiAY?si=AoDD049K-aD5eQF6&amp;start=1237\" title=\"YouTube video player\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share\" referrerpolicy=\"strict-origin-when-cross-origin\" allowfullscreen></iframe></div>\n" +
            "<a href='https://youtu.be/I7sD-IQlOZM'><i>RobotLife</i> demonstration:</a>\n" +
            "<div class='video'><iframe src=\"https://www.youtube.com/embed/I7sD-IQlOZM?si=9nBFOO2o2iHf6i_P\" title=\"YouTube video player\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share\" referrerpolicy=\"strict-origin-when-cross-origin\" allowfullscreen></iframe></div>\n" +
            "We further extend visualization in motion toward narrative authoring. Rather than embedding separate visualizations into dynamic scenes, this work studies how data, moving entities, views, transitions, and events can be coordinated over time to construct coherent visual stories. Our technology probe, SwimComposer, supports full-race storytelling through editable data layers, athlete tracking, swimmer comparison, view transitions, highlighting, and temporal arrangement.\n\n" +
            "<a href='https://youtu.be/aKzCVDZWVZI' target='_blank'>Presentation video:</a>\n" +
            "<div class='video'><iframe src=\"https://www.youtube.com/embed/aKzCVDZWVZI\" title=\"SwimComposer presentation video\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share\" referrerpolicy=\"strict-origin-when-cross-origin\" allowfullscreen></iframe></div>" +
            "<a href='https://youtu.be/76j0ib1qi5Y' target='_blank'><i>SwimComposer</i> demonstration:</a> <a href='http://43.163.231.237/' target='_blank'><i>SwimComposer</i></a>\n" +
            "<div class='video'><iframe src=\"https://www.youtube.com/embed/76j0ib1qi5Y\" title=\"SwimComposer demonstration video\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share\" referrerpolicy=\"strict-origin-when-cross-origin\" allowfullscreen></iframe></div>\n"
    },
    {
        id: 5,
        title: "Swimming",
        teaser: "assets/teaser/swimming.png",
        publications: [
            {
                description: "Main papers:",
                ids: [5, 22, 25]
            },
            {
                description: "Initial posters:",
                ids: [15]
            }
        ],
        introduction: "Sports broadcasts increasingly embed visualizations to help audiences follow competitions. Swimming, in particular, features rich dynamic data, such as lap times, swimmer positions, and speed metrics, that can be, and some of them have been, visualized to enhance the watching experience. To better support embedding visualizations into a live sports context, we conduct a series of studies using swimming as an ideal scenario.\n\n" +
            "We first investigated how to embed visualizations in live swimming videos by implementing SwimFlow, a technology probe that allows designers to quickly create, test, and refine visual representations of race data on real swimming videos. It enables rapid prototyping with different visual designs and layouts, helping ensure that information is clear, relevant, and engaging for audiences.\n\n" +
            "<a href='https://www.youtube.com/watch?v=lFf8sM52rMc' target='_blank'>Fast forward video at IEEE VIS 2024:</a>\n" +
            "<div class='video'><iframe src=\"https://www.youtube.com/embed/lFf8sM52rMc?si=TFNEBdbQcRPoHHUp\" title=\"YouTube video player\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share\" referrerpolicy=\"strict-origin-when-cross-origin\" allowfullscreen></iframe></div>" +
            "<a href='https://www.youtube.com/watch?v=7Y2cPfXGiAY&t=2011s' target='_blank'>Presentation video at IEEE VIS 2024:</a>\n" +
            "<div class='video'><iframe src=\"https://www.youtube.com/embed/7Y2cPfXGiAY?si=aA8Ba9VBFaqV6dtS&amp;start=2011\" title=\"YouTube video player\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share\" referrerpolicy=\"strict-origin-when-cross-origin\" allowfullscreen></iframe></div>" +
            "<a href='https://youtu.be/yC39NXBJiE8' target='_blank'><i>SwimFlow</i> demonstration:</a>\n" +
            "<div class='video'><iframe src=\"https://www.youtube.com/embed/yC39NXBJiE8?si=Fje1QXkx7P6JDmpH\" title=\"YouTube video player\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share\" referrerpolicy=\"strict-origin-when-cross-origin\" allowfullscreen></iframe></div>" +
            "We then provided a framework for defining the temporal arrangement of visualizations, specifying when and for how long each piece of data appears based on race events and metadata. We implemented SwimChrono, a technology probe that enables flexible, data-driven visualizations that adapt to race lengths, swimming styles, and audience needs.\n\n" +
            "<a href='https://youtu.be/c-wLax6rPM4' target='_blank'>Presentation video:</a>\n" +
            "<div class='video'><iframe src=\"https://www.youtube.com/embed/c-wLax6rPM4\" title=\"Presentation video\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share\" referrerpolicy=\"strict-origin-when-cross-origin\" allowfullscreen></iframe></div>" +
            "<a href='https://youtu.be/oDWfsPnAFqY' target='_blank'><i>SwimChrono</i> demonstration video:</a>\n" +
            "<div class='video'><iframe src=\"https://www.youtube.com/embed/oDWfsPnAFqY\" title=\"SwimChrono demonstration video\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share\" referrerpolicy=\"strict-origin-when-cross-origin\" allowfullscreen></iframe></div>" +
            "Building on our earlier work on designing embedded visualizations and determining their temporal placement, our latest research shifts from presenting individual data overlays to authoring coherent visual stories across an entire swimming race. We introduce SwimComposer, a technology probe that combines automatically prepared multimodal race data with narrative patterns observed in professional sports broadcasts. It enables creators to coordinate data layers, overview, tracking, and comparison views, animated transitions, and playback pacing over time, transforming a race video into a structured narrative rather than a sequence of isolated visualizations. Our evaluation with experienced content creators and graphic designers demonstrates the potential of this approach for explaining race progression to general audiences, while also revealing opportunities for more flexible and familiar professional authoring workflows.\n\n" +
            "<a href='https://youtu.be/aKzCVDZWVZI' target='_blank'>Presentation video:</a>\n" +
            "<div class='video'><iframe src=\"https://www.youtube.com/embed/aKzCVDZWVZI\" title=\"SwimComposer presentation video\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share\" referrerpolicy=\"strict-origin-when-cross-origin\" allowfullscreen></iframe></div>" +
            "<a href='https://youtu.be/76j0ib1qi5Y' target='_blank'><i><a href='http://43.163.231.237/' target='_blank'>SwimComposer</a></i> demonstration:</a>\n" +
            "<div class='video'><iframe src=\"https://www.youtube.com/embed/76j0ib1qi5Y\" title=\"SwimComposer demonstration video\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share\" referrerpolicy=\"strict-origin-when-cross-origin\" allowfullscreen></iframe></div>" +
            "<a href='https://youtu.be/bwt-9tgoT58' target='_blank'>A running demo based on real Olympic broadcast video with a moving camera authored by SwimComposer:</a>\n" +
            "<div class='video'><iframe src=\"https://www.youtube.com/embed/bwt-9tgoT58\" title=\"SwimComposer running demo\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share\" referrerpolicy=\"strict-origin-when-cross-origin\" allowfullscreen></iframe></div>",
        collaboration: "Most of this project was done at Aviz, Inria, France and Xi'an Jiaotong-Liverpool University, China, in collaboration with University Paris-Saclay, France, Ecole Centrable de Lyon, France, Northwestern University, U.S., and National University of Singapore, Singapore.",
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
                ids: [26, 8]
            },
            {
                description: "A data needs collection:",
                ids: [11]
            }
        ],
        introduction: "Mobile and wearable devices, such as smartwatches, are widely used in daily life to collect, track, and monitor personal health and fitness data, including heart rate, calories burned, and exercise time. Users often need to read such information at a glance, particularly during physical activities. However, unlike conventional displays, smartwatches have limited screen space, and reading visualizations becomes even more challenging when users are in motion. Movement, changing viewing postures, and environmental conditions can all influence how effectively users perceive and interpret information on small wearable displays.\n" +
            "\n" +
            "To identify research challenges and opportunities for visualization on mobile and wearable devices, we first reviewed existing data representations on smartwatches and fitness trackers. We explored how motion characteristics, including speed, trajectory, direction, and acceleration, could influence the design and readability of micro visualizations. Based on this exploration, we proposed a research agenda for designing and studying visualizations in motion, with particular attention to glanceable information during physical activities.\n\n" +
            "<a href='https://www.youtube.com/watch?v=7qy-dgjE4L4' target='_blank'>Fast forward video at MobileHCI 2022 workshop:</a>\n" +
            "<div class='video'><iframe src=\"https://www.youtube.com/embed/7qy-dgjE4L4?si=1dUWUa0GmhgAFCW1\" title=\"YouTube video player\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share\" referrerpolicy=\"strict-origin-when-cross-origin\" allowfullscreen></iframe></div>" +
            "\n" +
            "Building on this research agenda, we conducted two empirical studies to systematically investigate how walking speed and trajectory affect smartwatch viewing postures, wrist orientation, reading performance, and perceived task load. Participants read micro visualizations on a smartwatch under stationary and walking conditions, including different speeds (2, 4, and 6 km/h) and trajectories (straight, circular, and figure-eight). Our findings showed that walking, particularly at higher speeds, changed how users positioned and oriented their smartwatches, reduced reading accuracy, and sometimes increased response times. Participants also tended to slow down while reading. Although walking trajectories influenced smartwatch positioning and wrist orientation, they did not significantly affect reading performance. These findings informed design considerations, including additional visual cues and visualization size adaptations for different viewing postures.\n" +
            "\n" +
            "<a href='https://www.youtube.com/watch?v=2DE5LfUsIWA' target='_blank'>Fast forward video at IEEE VIS 2024:</a>\n" +
            "<div class='video'><iframe src=\"https://www.youtube.com/embed/2DE5LfUsIWA?si=rl9ewLE4IxX3MFHT\" title=\"YouTube video player\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share\" referrerpolicy=\"strict-origin-when-cross-origin\" allowfullscreen></iframe></div>\n" +
            "<a href='https://www.youtube.com/watch?v=5O_zfoG4xOo&t=3931s' target='_blank'>Presentation video at IEEE VIS 2024:</a>\n" +
            "<div class='video'><iframe src=\"https://www.youtube.com/embed/5O_zfoG4xOo?si=QuR65yAfNss7UECr&amp;start=3932\" title=\"YouTube video player\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share\" referrerpolicy=\"strict-origin-when-cross-origin\" allowfullscreen></iframe></div>\n" +
            "Beyond understanding the perceptual effects of motion, we also investigated the information needs of smartwatch users during outdoor physical activities. Not all data is relevant at all times; instead, information needs change depending on users' activities, surrounding environments, and performance. To better understand these needs, we collected a diverse corpus of real-world information needs paired with contextual audio, video, and sensor data. We identified challenges and design considerations for presenting relevant information in dynamic outdoor contexts and developed a prototype tool for browsing, aggregating, and analyzing the collected data. Together, these research efforts aim to support the design of effective, context-aware, and glanceable visualizations for people in motion.\n" +
            "\n" +
            "<a href='https://youtu.be/4hNulDHo7Ak&t=1908s'>Presentation video at IEEE VIS 2024 workshop:</a>\n" +
            "<div class='video'><iframe src=\"https://www.youtube.com/embed/4hNulDHo7Ak?si=-tqOeivmN-rJ1gTl&amp;start=1908\" title=\"YouTube video player\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share\" referrerpolicy=\"strict-origin-when-cross-origin\" allowfullscreen></iframe></div>\n" +
            "\n",
        collaboration: "This project has multiple parts of collaboration, including Aviz, Inria, France, University Paris-Saclay, France, University of Stuttgart, Germany, Microsoft, USA, Ecole Centrale de Lyon, France, University of Calgary, Canada, University of Victoria, Canada, and Xi'an Jiaotong-Liverpool University, China.",
    },
    {
        id: 3,
        title: "Tangible Interaction",
        teaser: "assets/teaser/tip_logo.png",
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
    },
    {
        id: 4,
        title: "AI-assisted Data Communication",
        teaser: "assets/teaser/aip_logo.jpg",
        publications: [
            {
                description: "Two early explorations",
                ids: [18, 19]
            }
        ],
        introduction: 'With the rapid rise of artificial intelligence (AI) and large language models (LLMs), AI holds growing promise for enhancing data communication, ranging from interpreting complex datasets to generating visual and textual narratives. Yet despite progress, current models remain limited in supporting reliable, multimodal, and temporally grounded communication. Most advances focus on static or single-modality outputs (e.g., charts from text), while dynamic data streams, such as those embedded in video or interactive systems, remain underexplored.\n' +
            '\n' +
            'We conduct early exploration on AI-assisted data communication. First, we examine how general-purpose multimodal LLMs (e.g., ChatGPT and Gemini) support visual analytics in video, focusing on data extraction, temporal reasoning, and audio-visual alignment. Second, we experiment with structured agent design: decomposing tasks, enforcing modular reasoning, and generating verifiable outputs to improve visualization reliability.\n' +
            '\n' +
            'We see our current work as a foundation toward more robust pipelines connecting data understanding, visualization, and narrative generation. We welcome collaboration from visualization and AI communities to advance this emerging intersection.\n',
        collaboration: "This project has multiple parts of collaboration, including Xi'an Jiaotong-Liverpool University, China and Laval University, Canada.\n",
    }
]
