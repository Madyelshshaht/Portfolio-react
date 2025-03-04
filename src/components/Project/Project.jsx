import React, { useCallback, useMemo } from 'react'
import "./Project.css"
import { Link } from "react-router-dom";
import { ExternalLink } from "lucide-react";
import { GitHub } from "@mui/icons-material";

import { Swiper, SwiperSlide } from 'swiper/react';


import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { Autoplay, Pagination } from 'swiper/modules';

const Project = ({ imgs = [], title, desc, skills, mainIndexes, extraIndexes = [], link, github, side = "" }) => {


    const selectedSkills = useMemo(() => [...mainIndexes.map(i => skills[i]), ...extraIndexes.map(i => skills[i])].filter(Boolean), [skills, mainIndexes, extraIndexes]);

    const renderSkill = useCallback((skill, index) => (
        <div
            key={index}
            className={`rounded-2xl cursor-pointer ${index === 0 ? 'bg-gray-300' : 'bg-gray-200'}`}
        >
            <span className="text-sm p-2">{skill}</span>
        </div>
    ), []);

    return (
        <div className={`project flex md:flex-row ${side} items-center flex-col gap-2 shadow-md shadow-gray-500 mb-10`}>

            <div className="img md:w-1/2 w-full  p-2">
                <Swiper
                    slidesPerView={1}
                    // autoHeight={true}
                    spaceBetween={30}
                    loop={true}
                    autoplay={{
                        delay: 3000,
                        disableOnInteraction: false,
                    }}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[Autoplay, Pagination]}
                    className="mySwiper"
                >
                    {imgs?.map((img, index) => (
                        <SwiperSlide key={index}>
                            <img src={img} alt={`${title} ${index + 1}`} className="rounded-lg" />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
            <div className="info p-2 lg:p-4 md:w-1/2 w-full flex flex-col gap-2">
                <h3 className="title mb-2">{title}</h3>
                <div className="desc mb-2 text-xs md:text-md lg:text-lg ">{desc}</div>
                <div className="skills-used flex items-center gap-x-5 gap-y-3 flex-wrap text-black">
                    {selectedSkills.map(renderSkill)}
                </div>
                <div className="links p-2 flex items-center gap-5 ">
                    <Link to={link} target="_blank"><ExternalLink size={20} /></Link>
                    <Link to={github} target="_blank"><GitHub style={{ fontSize: "22px" }} /></Link>
                </div>
            </div>
        </div>
    );
};



export default Project;