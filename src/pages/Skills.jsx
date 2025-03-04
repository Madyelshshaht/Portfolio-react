import React from 'react'
import html from "../../public/assets/Skills-Img/html.png"
import css from "../../public/assets/Skills-Img/css.png"
import js from "../../public/assets/Skills-Img/javascript.png"
import bootstrap from "../../public/assets/Skills-Img/boot.png"
import tailwind from "../../public/assets/Skills-Img/tailwind.png"
import photoshop from "../../public/assets/Skills-Img/Photoshop.png"
import vue from "../../public/assets/Skills-Img/vue.png"
import figma from "../../public/assets/Skills-Img/figma.png"
import git from "../../public/assets/Skills-Img/git.png"
import github from "../../public/assets/Skills-Img/github.png"
import reactIcon from "../../public/assets/Skills-Img/react.png"
import redux from "../../public/assets/Skills-Img/redux.png"
import TanStack from "../../public/assets/Skills-Img/tanStack.png"
import Typescript from "../../public/assets/Skills-Img/typescript.png"
import Nodejs from "../../public/assets/Skills-Img/nodejs.png"
import materialUI from "../../public/assets/Skills-Img/material ui.png"
import mongo from "../../public/assets/Skills-Img/mogdo.png"


import Skills_Card from '../components/Skills_Card/Skills-Card'


import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import "swiper/css/autoplay";
import { Autoplay } from "swiper/modules";
import Heading from '../components/heading/Heading'

import { motion } from 'framer-motion';


const Skills = () => {
    return (
        <motion.div className='skills '
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            exit={{ x: window.innerWidth, transition: { duration: 0.1 } }}
        >
            <Heading title="Skills" />
            <div className="text-center my-6">
                <h3 className='text-2xl font-bold'>Essential tools I Use</h3>
                <p className='mt-2'>Discover the powerful tools and technologies i use to create exceptional, <br />  high-performance websites & applications.</p>
            </div>
            <div className="my-skills  md:p-3 p-0">

                <Swiper
                    modules={[Autoplay]}
                    spaceBetween={30}
                    autoplay={{ delay: 2000, disableOnInteraction: false }}
                    speed={1500}
                    loop={true}
                    breakpoints={{
                        0: { slidesPerView: 3 }, // على الشاشات الصغيرة (هواتف)
                        1024: { slidesPerView: 4 }, // على الشاشات الكبيرة (لابتوب/ديسكتوب)
                    }}
                    className='mb-20'
                >
                    <SwiperSlide >
                        <Skills_Card img={html}/>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Skills_Card img={css} />
                    </SwiperSlide>
                    <SwiperSlide>
                        <Skills_Card img={js} />
                    </SwiperSlide>
                    <SwiperSlide>
                        <Skills_Card img={Typescript} />
                    </SwiperSlide>
                    <SwiperSlide>
                        <Skills_Card img={bootstrap} />
                    </SwiperSlide>
                    <SwiperSlide>
                        <Skills_Card img={reactIcon} />
                    </SwiperSlide>
                    <SwiperSlide>
                        <Skills_Card img={redux} />
                    </SwiperSlide>
                    <SwiperSlide>
                        <Skills_Card img={TanStack} />
                    </SwiperSlide>
                    <SwiperSlide>
                        <Skills_Card img={vue} />
                    </SwiperSlide>
                    <SwiperSlide>
                        <Skills_Card img={tailwind} />
                    </SwiperSlide>
                    <SwiperSlide>
                        <Skills_Card img={Nodejs} />
                    </SwiperSlide>
                </Swiper>

                <Swiper
                    modules={[Autoplay]}
                    spaceBetween={30}
                    autoplay={{ delay: 3000, disableOnInteraction: false }}
                    speed={1500}
                    loop={true}
                    breakpoints={{
                        0: { slidesPerView: 3 }, // على الشاشات الصغيرة (هواتف)
                        1024: { slidesPerView: 4 }, // على الشاشات الكبيرة (لابتوب/ديسكتوب)
                    }}

                >
                    <SwiperSlide>
                        <Skills_Card img={git} />
                    </SwiperSlide>
                    <SwiperSlide>
                        <Skills_Card img={github} />
                    </SwiperSlide>
                    <SwiperSlide>
                        <Skills_Card img={photoshop} />
                    </SwiperSlide>
                    <SwiperSlide>
                        <Skills_Card img={figma} />
                    </SwiperSlide>
                    <SwiperSlide>
                        <Skills_Card img={mongo} />
                    </SwiperSlide>
                    <SwiperSlide>
                        <Skills_Card img={materialUI} />
                    </SwiperSlide>
                </Swiper>
            </div>
        </motion.div>
    )
}

export default Skills


