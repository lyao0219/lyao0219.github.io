import {projectLinkIcon, publicationTypeList} from "./variables.js";

export const publications = [
    {
        event: "CG&A",
        type: publicationTypeList.FullPaper,
        title: "Situated Visualization in Motion",
        author: "<strong>Lijie Yao*</strong>",
        subtitle: "IEEE Computer Graphics and Applications, in press, doi: 10.1109/MCG.2024.3462129.",
        description: "We define visualization in motion and make several contributions to how to visualize and design situated visualizations in motion. In situated data visualization, the data is directly visualized near their data referent, i.e., the physical space, object, or person it refers to. Situated visualizations are often useful in contexts where the data referent or the viewer does not remain stationary but is in relative motion.  For example, a runner looks at visualizations from their fitness band while running. Reading visualizations in such scenarios might be impacted by motion factors. As such, understanding how to best design visualizations with motion factors is important. We define visualizations in motion as visual data representations used in contexts that exhibit relative motion between a viewer and an entire visualization. We propose a research agenda to understand what research opportunities and challenges are under visualization in motion. Next, we investigate (a) how motion factors can affect the reading accuracy of visualizations, (b) how to design and embed visualizations in motion in a real application scenario, and (c) the user experience and design trade-offs of visualization in motion through a case study.",
        teaser: "assets/teaser/visinmotion_logo.png",
        icons: [
            {
                "url": "https://doi.org/10.1109/MCG.2024.3462129",
                "icon": projectLinkIcon.doi
            },
            {
                "url": "https://hal.science/hal-04700820",
                "icon": projectLinkIcon.onlineLink
            },
            {
                "url": "assets/pdf/Situated_Visualization_in_Motion.pdf",
                "icon": projectLinkIcon.pdf
            }
        ],
        study: [],
        selected: true
    },
    {
        event: "TVCG",
        type: publicationTypeList.FullPaper,
        title: "User Experience of Visualizations in Motion: A Case Study and Design Considerations",
        author: "<strong>Lijie Yao*</strong>, Federica Bucchieri, Victoria McArthurm Anastasia Bezerianos, Petra Isenberg",
        subtitle: "IEEE Transactions on Visualization and Computer Graphics, in press, doi: 1109/TVCG.2024.3456319.",
        description: "We present a systematic review, an empirical study, and a first set of considerations for designing visualizations in motion, derived from a concrete scenario in which these visualizations were used to support a primary task. In practice, when viewers are confronted with embedded visualizations, they often have to focus on a primary task and can only quickly glance at a visualization showing rich, often dynamically updated, information. As such, the visualizations must be designed so as not to distract from the primary task, while at the same time being readable and useful for aiding the primary task. For example, in games, players who are engaged in a battle have to look at their enemies but also read the remaining health of their own game character from the health bar over their character's head. Many trade-offs are possible in the design of embedded visualizations in such dynamic scenarios, which we explore in-depth in this paper with a focus on user experience. We use video games as an example of an application context with a rich existing set of visualizations in motion. We begin our work with a systematic review of in-game visualizations in motion. Next, we conduct an empirical user study to investigate how different embedded visualizations in motion designs impact user experience. We conclude with a set of considerations and trade-offs for designing visualizations in motion more broadly as derived from what we learned about video games. All supplemental materials of this paper are available at <a href=\"https://osf.io/3v8wm/\" target=\"_blank\">osf.io/3v8wm/</a>.",
        teaser: "assets/teaser/videogame.jpg",
        icons: [
            {
                "url": "https://doi.org/10.1109/TVCG.2024.3456319",
                "icon": projectLinkIcon.doi
            },
            {
                "url": "https://hal.science/hal-04700819",
                "icon": projectLinkIcon.onlineLink
            },
            {
                "url": "assets/pdf/User_Experience_of_Visualizations_in_Motion_A_Case_Study_and_Design_Considerations.pdf",
                "icon": projectLinkIcon.pdf
            },
            {
                "url": "https://osf.io/3v8wm/",
                "icon": projectLinkIcon.osf
            }
        ],
        study: [],
        selected: true
    },
    {
        event: "TVCG",
        type: publicationTypeList.FullPaper,
        title: "Designing for Visualization in Motion: Embedding Visualizations in Swimming Videos",
        author: "<strong>Lijie Yao*</strong>, Romain Vuillmot, Anastasia Bezerianos, Petra Isenberg",
        subtitle: "IEEE Transactions on Visualization and Computer Graphics, 2024, 30(3), pp.1821-1836, doi: 10.1109/tvcg.2023.3341990.",
        description: "We report on challenges and considerations for supporting design processes for visualizations in motion embedded in sports videos. We derive our insights from analyzing swimming race visualizations and motion-related data, building a technology probe, as well as a study with designers. Understanding how to design situated visualizations in motion is important for a variety of contexts. Competitive sports coverage, in particular, increasingly includes information on athlete or team statistics and records. Although moving visual representations attached to athletes or other targets are starting to appear, systematic investigations on how to best support their design process in the context of sports videos are still missing. Our work makes several contributions in identifying opportunities for visualizations to be added to swimming competition coverage but, most importantly, in identifying requirements and challenges for designing situated visualizations in motion. Our investigations include the analysis of a survey with swimming enthusiasts on their motion-related information needs, an ideation workshop to collect designs and elicit design challenges, the design of a technology probe that allows to create embedded visualizations in motion based on real data, and an evaluation with visualization designers that aimed to understand the benefits of designing directly on videos.",
        teaser: "assets/teaser/swimming.jpg",
        icons: [
            {
                "url": "https://doi.org/10.1109/tvcg.2023.3341990",
                "icon": projectLinkIcon.doi
            },
            {
                "url": "https://hal.science/hal-04364838",
                "icon": projectLinkIcon.onlineLink
            },
            {
                "url": "assets/pdf/Designing_for_Visualization_in_Motion_Embedding_Visualizations_in_Swimming_Videos.pdf",
                "icon": projectLinkIcon.pdf
            },
            {
                "url": "https://www.replicabilitystamp.org/index.html#https-github-com-lyao0219-swimflow-git",
                "icon": projectLinkIcon.stamp
            },
            {
                "url": "https://motion.isenberg.cc/Swimming/index",
                "icon": projectLinkIcon.swimFlow
            },
            {
                "url": "https://osf.io/nxyr4/",
                "icon": projectLinkIcon.osf
            }
        ],
        study: [],
        selected: true
    },
    {
        event: "TVCG",
        type: publicationTypeList.FullPaper,
        title: "Visualization in Motion: A Research Agenda and Two Evaluations",
        author: "<strong>Lijie Yao*</strong>, Anastasia Bezerianos, Romain Vuillmot, Petra Isenberg",
        subtitle: "IEEE Transactions on Visualization and Computer Graphics, 2022, 28(10), pp.3546-3562, doi: 10.1109/TVCG.2022.3184993.",
        description: "We contribute a research agenda for visualization in motion and two experiments to understand how well viewers can read data from moving visualizations. We define visualizations in motion as visual data representations that are used in contexts that exhibit relative motion between a viewer and an entire visualization. Sports analytics, video games, wearable devices, or data physicalizations are example contexts that involve different types of relative motion between a viewer and a visualization. To analyze the opportunities and challenges for designing visualization in motion, we show example scenarios and outline a first research agenda. Motivated primarily by the prevalence of and opportunities for visualizations in sports and video games we started to investigate a small aspect of our research agenda: the impact of two important characteristics of motion---speed and trajectory on a stationary viewer's ability to read data from moving donut and bar charts. We found that increasing speed and trajectory complexity did negatively affect the accuracy of reading values from the charts and that bar charts were more negatively impacted. In practice, however, this impact was small: both charts were still read fairly accurately.",
        teaser: "assets/teaser/visinmotion.png",
        icons: [
            {
                "url": "https://doi.org/10.1109/TVCG.2022.3184993",
                "icon": projectLinkIcon.doi
            },
            {
                "url": "https://hal.science/hal-03698837",
                "icon": projectLinkIcon.onlineLink
            },
            {
                "url": "assets/pdf/Vis_in_motion_A_Research_Agenda_and_Two_Evaluations.pdf",
                "icon": projectLinkIcon.pdf
            },
            {
                "url": "https://youtu.be/sIzRfNIsRV4",
                "icon": projectLinkIcon.video
            },
            {
                "url": "https://www.replicabilitystamp.org/index.html#https-gitlab-inria-fr-lyao-visinmotion",
                "icon": projectLinkIcon.stamp
            }
        ],
        study: [
            {
                "title": "STUDY 1",
                "logo1": {
                    "href": "https://osf.io/km3s2/",
                    "icon": "assets/img/osf.png"
                },
                "logo2": {
                    "href": "https://motion.isenberg.cc/study1_speed_donut/index.php?PROLIFIC=False",
                    "icon": "assets/img/study.png"
                }
            },
            {
                "title": "STUDY 2",
                "logo1": {
                    "href": "https://osf.io/t748d/",
                    "icon": "assets/img/osf.png"
                },
                "logo2": {
                    "href": "https://motion.isenberg.cc/study1_speed_bar/index.php?PROLIFIC=False",
                    "icon": "assets/img/study.png"
                }
            },
            {
                "title": "STUDY 3",
                "logo1": {
                    "href": "https://osf.io/9c4bz/",
                    "icon": "assets/img/osf.png"
                },
                "logo2": {
                    "href": "https://motion.isenberg.cc/study2_trajectory_donut/index.php?PROLIFIC=False",
                    "icon": "assets/img/study.png"
                }
            },
            {
                "title": "STUDY 4",
                "logo1": {
                    "href": "https://osf.io/9c4bz/",
                    "icon": "assets/img/osf.png"
                },
                "logo2": {
                    "href": "https://motion.isenberg.cc/study2_trajectory_bar/index.php?PROLIFIC=False",
                    "icon": "assets/img/study.png"
                }
            }
        ],
        selected: true
    },
    {
        event: "IEEE VIS",
        type: publicationTypeList.ShortPaper,
        title: "Micro Visualizations on a Smartwatch: Assessing Reading Performance While Walking",
        author: "Fairouz Grioui*, Tanja Blascheck, <strong>Lijie Yao</strong>, Petra Isenberg",
        subtitle: "In Proceeding of the Short Papers of the IEEE Conference on Visualization, October 2024, Florida, United States.",
        description: "With two studies, we assess how different walking trajectories (straight line, circular, and infinity) and speeds (2km/h, 4km/h, and 6km/h) influence the accuracy and response time of participants reading micro visualizations on a smartwatch. We showed our participants common watch face micro visualizations including date, time, weather information, and four complications showing progress charts of fitness data. Our findings suggest that while walking trajectories did not significantly affect reading performance, overall walking activity, especially at high speeds, hurt reading accuracy and, to some extent, response time. Supplemental material is available at <a href=\"https://osf.io/u78s6/\" target=\"_blank\">osf.io/u78s6/</a>.\n                                    ",
        teaser: "assets/teaser/smartwatch.JPG",
        icons: [
            {
                "url": "https://doi.org/10.48550/arXiv.2407.17893",
                "icon": projectLinkIcon.doi
            },
            {
                "url": "https://hal.science/hal-04700821",
                "icon": projectLinkIcon.onlineLink
            },
            {
                "url": "assets/pdf/Micro_Visualizations_on_a_Smartwatch_Assessing_Reading_Performance_While_Walking.pdf",
                "icon": projectLinkIcon.pdf
            }
        ],
        study: [],
        selected: false
    },
    {
        event: "IEEE VIS",
        type: publicationTypeList.Workshop,
        title: "Collecting Information Needs for Egocentric Visualizations while Running",
        author: "Ahmed Elshabasi*, <strong>Lijie Yao</strong>, Petra Isenberg, Charles Perin, Wesley Willett",
        subtitle: "In Proceeding of IEEE VIS Workshop on First-Person Visualizations for Outdoor Physical Activities, October 2024, Florida, United States.",
        description: "We investigate research challenges and opportunities for visualization in motion during outdoor physical activities via an initial corpus of real-world recordings that pair egocentric video, biometrics, and think-aloud observations. With the increasing use of tracking and recording devices, such as smartwatches and head-mounted displays, more and more data are available in real-time about a person's activity and the context of the activity. However, not all data will be relevant all the time. Instead, athletes have information needs that change throughout their activity depending on the context and their performance. To address this challenge, we describe the collection of a diverse corpus of information needs paired with contextualizing audio, video, and sensor data. Next, we propose a first set of research challenges and design considerations that explore the difficulties of visualizing those real data needs in-context and demonstrate a prototype tool for browsing, aggregating, and analyzing this information. Our ultimate goal is to understand and support embedding visualizations into outdoor contexts with changing environments and varying data needs.\n                                    ",
        teaser: "assets/teaser/sports.jpg",
        icons: [
            {
                "url": "https://doi.org/10.48550/arXiv.2409.06426",
                "icon": projectLinkIcon.doi
            },
            {
                "url": "https://hal.science/hal-04700822",
                "icon": projectLinkIcon.onlineLink
            },
            {
                "url": "assets/pdf/Collecting_Information_Needs_for_Egocentric_Visualizations_while_Running.pdf",
                "icon": projectLinkIcon.pdf
            }
        ],
        study: [],
        selected: false
    },
    {
        event: "IEEE VIS",
        type: publicationTypeList.Workshop,
        title: "Envisioning Situated Visualizations of Environmental Footprints in an Urban Environment",
        author: "Yvonne Jansen, Federica Bucchieri, Pierre Dragicevic, Martin Hachet, Morgane Koval, Léana Petiot, Arnaud Prouzeau, Dieter Schmalstieg, <strong>Lijie Yao</strong>, Petra Isenberg*",
        subtitle: "In Proceeding of IEEE VIS Workshop on Visualization for Social Good (VIS4Good), October 2022, Oklahoma, United States.",
        description: "We present the results of a brainstorming exercise focused on how situated visualizations could be used to better understand the state of the environment and our personal behavioral impact on it. Specifically, we conducted a day long workshop in the French city of Bordeaux where we envisioned situated visualizations of urban environmental footprints. We explored the city and took photos and notes about possible situated visualizations of environmental footprints that could be embedded near places, people, or objects of interest. We found that our designs targeted four purposes and used four different methods that could be further explored to test situated visualizations for the protection of the environment.\n                                    ",
        teaser: "assets/teaser/vis4good.jpg",
        icons: [
            {
                "url": "https://doi.org/10.5281/zenodo.7053934",
                "icon": projectLinkIcon.doi
            },
            {
                "url": "https://hal.science/hal-03770857",
                "icon": projectLinkIcon.onlineLink
            },
            {
                "url": "assets/pdf/Environment_Footprint_by_Situated_Visualization.pdf",
                "icon": projectLinkIcon.pdf
            }
        ],
        study: [],
        selected: false
    },
    {
        event: "MobileHCI",
        type: publicationTypeList.Workshop,
        title: "Reflections on Visualization in Motion for Fitness Trackers",
        author: "Alaul Islam°, <u>Lijie Yao*°</u>, Anastasia Bezerianos, Tanja Blascheck, Tingying He, Bongshin Lee, Romain Vuillmot, Petra Isenberg",
        subtitle: "In Proceeding of MobileHCI Workshop on New Trends in HCI and Sports (NTSPORT), September 2022, Vancouver, Canada.",
        description: "In this paper, we reflect on our past work towards understanding how to design visualizations for fitness trackers that are used in motion. We have coined the term \"visualization in motion\" for visualizations that are used in the presence of relative motion between a viewer and the visualization. Here, we describe how visualization in motion is relevant to sports scenarios. We also provide new data on current smartwatch visualizations for sports and discuss future challenges for visualizations in motion for fitness trackers.\n                                    ",
        teaser: "assets/teaser/mwv.png",
        icons: [
            {
                "url": "https://doi.org/10.48550/arXiv.2409.06401",
                "icon": projectLinkIcon.doi
            },
            {
                "url": "https://dblp.org/rec/conf/mhci/YaoIBBHLVI22",
                "icon": projectLinkIcon.onlineLink
            },
            {
                "url": "assets/pdf/Relfections_on_Visualization_in_Motion_for_Fitness_Trackers.pdf",
                "icon": projectLinkIcon.pdf
            },
            {
                "url": "https://www.youtube.com/watch?v=7qy-dgjE4L4",
                "icon": projectLinkIcon.video
            }
        ],
        study: [],
        selected: false
    },
    {
        event: "EuroVis",
        type: publicationTypeList.Poster,
        title: "Situated Visualization in Motion for Video Games",
        author: "Federica Bucchieri*, <strong>Lijie Yao</strong>, Petra Isenberg",
        subtitle: " Posters of the European Conference on Visualization (EuroVis), June 2022, Rome, Italy, doi: 10.2312/evp.20221119.",
        description: "We contribute a systematic review of situated visualizations in motion in the context of video games. Video games produce rich dynamic datasets during gameplay that are often visualized to help players succeed in a game. Often these visualizations are moving either because they are attached to moving game elements or due to camera changes. We want to understand to what extent this motion and contextual game factors impact how players can read these visualizations. In order to ground our work, we surveyed 160 visualizations in motion and their embeddings in the game world. Here, we report on our analysis and categorization of these visualizations.\n                                    ",
        teaser: "assets/teaser/vim_videogame.jpg",
        icons: [
            {
                "url": "https://doi.org/10.2312/evp.20221119",
                "icon": projectLinkIcon.doi
            },
            {
                "url": "https://hal.science/hal-03694019",
                "icon": projectLinkIcon.onlineLink
            },
            {
                "url": "assets/pdf/Situated_Visualization_in_Motion_for_Video_Games.pdf",
                "icon": projectLinkIcon.pdf
            },
            {
                "url": "assets/poster/Poster_Situated_Visualization_in_Motion_for_Video_games.pdf",
                "icon": "assets/img/poster.png"
            },
            {
                "url": "https://youtu.be/ANikqv1EHK8",
                "icon": projectLinkIcon.video
            }
        ],
        study: [],
        selected: false
    },
    {
        event: "JournéeVisu",
        type: publicationTypeList.Poster,
        title: "Situated Visualization in Motion for Swimming",
        author: "<strong>Lijie Yao*</strong>, Anastasia Bezerianos, Romain Vuillmot, Petra Isenberg",
        subtitle: " Posters of the France National Conference on Visualization (Journée Visu), June 2022, Bordeaux, France.",
        description: "Competitive sports coverage increasingly includes information on athlete or team statistics and records. Sports video coverage has traditionally embedded representations of this data in fixed locations on the screen, but more recently also attached representations to athletes or other targets in motion. These publicly used representations so far have been rather simple and systematic investigations of the research space of embedded visualizations in motion are still missing. Here we report on our preliminary research in the domain of professional and amateur swimming. We analyzed how visualizations are currently added to the coverage of Olympics swimming competitions and then plan to derive a design space for embedded data representations for swimming competitions. We are currently conducting a crowdsourced survey to explore which kind of swimming-related data general audiences are interested in, in order to identify opportunities for additional visualizations to be added to swimming competition coverage.",
        teaser: "assets/teaser/vim_swimming.jpg",
        icons: [
            {
                "url": "https://doi.org/10.48550/arXiv.2409.07695",
                "icon": projectLinkIcon.doi
            },
            {
                "url": "https://hal.science/hal-03700406",
                "icon": projectLinkIcon.onlineLink
            },
            {
                "url": "assets/pdf/Situated_Visualization_in_Motion_for_Swimming.pdf",
                "icon": projectLinkIcon.pdf
            },
            {
                "url": "assets/poster/Poster_Situated_Visualization_in_Motion_Swimming.pdf",
                "icon": "assets/img/poster.png"
            }
        ],
        study: [],
        selected: false
    },
    {
        event: "JournéeVisu",
        type: publicationTypeList.Poster,
        title: "Visualization in Motion in Video Games for Different Types of Data",
        author: "Federica Bucchieri*, <strong>Lijie Yao</strong>, Petra Isenberg",
        subtitle: " Posters of the France National Conference on Visualization (Journée Visu), June 2022, Bordeaux, France.",
        description: "We contribute an analysis of situated visualizations in motion in video games for different types of data, with a focus on quantitative and categorical data representations. Video games convey a lot of data to players, to help them succeed in the game. These visualizations frequently move across the screen due to camera changes or because the game elements themselves move. Our ultimate goal is to understand how motion factors affect visualization readability in video games and subsequently the players' performance in the game. We started our work by surveying the characteristics of how motion currently influences which kind of data representations in video games. We conducted a systematic review of 160 visualizations in motion in video games and extracted patterns and considerations regarding was what, and how visualizations currently exhibit motion factors in video games.\n                                    ",
        teaser: "assets/teaser/vim_gamedata.jpg",
        icons: [
            {
                "url": "https://doi.org/10.48550/arXiv.2409.07696",
                "icon": projectLinkIcon.doi
            },
            {
                "url": "https://hal.science/hal-03700418",
                "icon": projectLinkIcon.onlineLink
            },
            {
                "url": "assets/pdf/Visualization_in_Motion_for_Video_Games_Data_Type.pdf",
                "icon": projectLinkIcon.pdf
            },
            {
                "url": "assets/poster/Poster_Situated_Visualization_in_Motion_Game_Data.pdf",
                "icon": "assets/img/poster.png"
            }
        ],
        study: [],
        selected: false
    },
    {
        event: "IEEE VIS",
        type: publicationTypeList.Poster,
        title: "Situated Visualization in Motion",
        author: "<strong>Lijie Yao*</strong>, Anastasia Bezerianos, Petra Isenberg",
        subtitle: "Posters of the IEEE Conference on Visualization, October 2020, Salt Lake City, United States.",
        description: "We contribute a first design space on visualizations in motion and the design of a pilot study we plan to run in the fall. Visualizations can be useful in contexts where either the observation is in motion or the whole visualization is moving at various speeds. Imagine, for example, displays attached to an athlete or animal that show data about the wearer – for example, captured from a fitness tracking band; or a visualization attached to a moving object such as a vehicle or a soccer ball. The ultimate goal of our research is to inform the design of visualizations under motion.\n                                    ",
        teaser: "assets/teaser/vim.PNG",
        icons: [
            {
                "url": "https://doi.org/10.48550/arXiv.2409.07005",
                "icon": projectLinkIcon.doi
            },
            {
                "url": "https://hal.science/hal-02946587",
                "icon": projectLinkIcon.onlineLink
            },
            {
                "url": "assets/pdf/Situated_Visualization_in_Motion_Poster.pdf",
                "icon": projectLinkIcon.pdf
            },
            {
                "url": "https://www.youtube.com/watch?v=gV4KobSoiy0",
                "icon": projectLinkIcon.video
            }
        ],
        study: [],
        selected: false
    }]
