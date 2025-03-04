import React, { useMemo } from "react";
import Heading from "../components/heading/Heading";

// Cars
import Cars from "../../public/assets/Projects-img/Cars/cars.png";
import cc1 from "../../public/assets/Projects-img/Cars/cc1.png";
import cc2 from "../../public/assets/Projects-img/Cars/c22.png";
import cc3 from "../../public/assets/Projects-img/Cars/c33.png";
import cc4 from "../../public/assets/Projects-img/Cars/cc4.png";
import cc5 from "../../public/assets/Projects-img/Cars/cc5.png";
import cc6 from "../../public/assets/Projects-img/Cars/cc6.png";
import cc7 from "../../public/assets/Projects-img/Cars/cc7.png";


// Crypto-Img
import Crypto from "../../public/assets/Projects-img/Crypto-img/Crypto123.png";
import c1 from "../../public/assets/Projects-img/Crypto-img/c1.png";
import c2 from "../../public/assets/Projects-img/Crypto-img/c2.png";
import c3 from "../../public/assets/Projects-img/Crypto-img/c3.png";
import c4 from "../../public/assets/Projects-img/Crypto-img/c4.png";
import c5 from "../../public/assets/Projects-img/Crypto-img/c5.png";


// TRAVEL

import Travel from "../../public/assets/Projects-img/travel-img/travel.png";
import t1 from "../../public/assets/Projects-img/travel-img/t1.png";
import t2 from "../../public/assets/Projects-img/travel-img/t2.png";
import t3 from "../../public/assets/Projects-img/travel-img/t3.png";
import t4 from "../../public/assets/Projects-img/travel-img/t4.png";
import t5 from "../../public/assets/Projects-img/travel-img/t5.png";
import t6 from "../../public/assets/Projects-img/travel-img/t6.png";

// shief
import Shief from "../../public/assets/Projects-img/sheif/shief.png";
import s2 from "../../public/assets/Projects-img/sheif/s2.png";
import s3 from "../../public/assets/Projects-img/sheif/s3.png";
import s4 from "../../public/assets/Projects-img/sheif/s4.png";
import s5 from "../../public/assets/Projects-img/sheif/s5.png";
import s6 from "../../public/assets/Projects-img/sheif/s6.png";

// wordpress Protfolio
import porto1 from "../../public/assets/Projects-img/Portofolio/porot1.png"
import p1 from "../../public/assets/Projects-img/Portofolio/p1.png"
import p2 from "../../public/assets/Projects-img/Portofolio/p2.png"
import p3 from "../../public/assets/Projects-img/Portofolio/3p.png"
import p4 from "../../public/assets/Projects-img/Portofolio/p4.png"
import p5 from "../../public/assets/Projects-img/Portofolio/p5.png"
import p6 from "../../public/assets/Projects-img/Portofolio/p6.png"
import porto2 from "../../public/assets/Projects-img/Portofolio/porot1.png"

// XO

import xo from "../../public/assets/Projects-img/XO/XO.png";
import win from "../../public/assets/Projects-img/XO/win.png";


import Project from "../components/Project/Project";

import {motion} from "framer-motion"

const skillsArray = ["HTML", "CSS", "JavaScript", "Bootstrap", "Tailwind", "Node.js", "React", "Redux", "TypeScript", "Material UI", "Lucide"];

const Projects = () => {

    return (
        <>
            <motion.div className="projects py-5 lg:px-10 "
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                exit={{ x: window.innerWidth, transition: { duration: 0.1 } }}
            >
                <Heading title="Projects" />


                <Project
                    imgs={[xo, win]}
                    title="ْXO game"
                    desc="Play the classic Tic-Tac-Toe (XO) game online! Challenge your friends , interactive experience. Enjoy a sleek design, smooth gameplay, Whether you're a casual player or a strategy master, test your skills and claim victory in this timeless game!"
                    skills={skillsArray}
                    mainIndexes={[0, 1, 2,]}
                    extraIndexes={[]}
                    side="md:flex-row-reverse"
                    link="https://madyelshshaht.github.io/game-xo/xo.html"
                    github="https://github.com/Madyelshshaht/game-xo"
                />

                <Project
                    imgs={[Cars, cc1, cc2, cc3, cc4, cc5, cc6, cc7]}
                    title="Car Rental Website"
                    desc="Website to Buy , Rent and fix cars 🚘 include a lot of brands BMW , Mercedes , Audi , …etc support two Categories Sports Cars 🏎 and Families Cars"
                    skills={skillsArray}
                    mainIndexes={[0, 1, 2, 3,]}
                    extraIndexes={[]}
                    link="https://madyelshshaht.github.io/Car/car.html"
                    github="https://github.com/Madyelshshaht/Car"
                />

                <Project
                    imgs={[Shief, s2, s3, s4, s5, s6]}
                    title="Portofolio"
                    desc="This portfolio highlights the expertise and professional services of an engineer, showcasing technical skills, projects, and innovative solutions. It serves as a digital resume for potential employers, clients, and industry professionals."
                    skills={skillsArray}
                    mainIndexes={[0, 1, 2, 3,]}
                    extraIndexes={[]}
                    side="md:flex-row-reverse"
                    link="https://madyelshshaht.github.io/shif-portofolio/porto.html"
                    github="https://github.com/Madyelshshaht/shif-portofolio"
                />

                <Project
                    imgs={[Travel, t1, t2, t3, t4, t5, t6]}
                    title="Exploring World"
                    desc="Explore the World from Your Screen! This travel website offers an immersive experience for users who dream of exploring global destinations."
                    skills={skillsArray}
                    mainIndexes={[0, 1, 2, 3,]}
                    extraIndexes={[]}
                    link="https://madyelshshaht.github.io/Travel/travel.html"
                    github="https://github.com/Madyelshshaht/Travel"
                />

                <Project
                    imgs={[porto1, p1, p2, p3, p4, p5, p6, porto2]}
                    title="Wordpress developer Portofolio"
                    desc="A clean and professional portfolio website for Mady, a Senior WordPress Developer, featuring an introduction, call-to-action buttons, and a modern design."
                    skills={skillsArray}
                    mainIndexes={[0, 1, 2, 3,]}
                    extraIndexes={[]}
                    side="md:flex-row-reverse"
                    link="https://madyelshshaht.github.io/Portofolio/pro1.html"
                    github="https://github.com/Madyelshshaht/Portofolio"
                />

                <Project
                    imgs={[Crypto, c2, c3, c4, c5]}
                    title="Cryptoverse"
                    desc="Cryptoverse is a web application designed to provide daily updates on cryptocurrency market changes. It features a visually appealing Line Chart to represent market trends, a summary of the latest crypto news, and real-time data integration"
                    skills={skillsArray}
                    mainIndexes={[0, 1, 2, 3,]}
                    extraIndexes={[6, 10]}
                    link="https://cryptovers-app.netlify.app/"
                    github="https://github.com/Madyelshshaht/Cryptoverse"
                />

            </motion.div>
        </>
    );
};

export default Projects;
