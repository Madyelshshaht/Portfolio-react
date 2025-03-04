import React, { lazy,Suspense } from "react";
const Education = lazy(() => import("../components/Education/Education"));
const Experiences = lazy(() => import("../components/Experinces/Experiences"));
import Heading from "../components/heading/Heading";
import { motion } from 'framer-motion';


const About = () => {
    return (
        <motion.div
            className="items-start"
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            exit={{ x: window.innerWidth, transition: { duration: 0.1 } }}
        >
            <Heading title="About" />
            <div className="p-2">
                <Suspense fallback={<div>Loading Education...</div>}>
                    <Education />
                </Suspense>
            </div>
            <div className="px-2 py-9">
                <Suspense fallback={<div>Loading Experiences...</div>}>
                    <Experiences />
                </Suspense>
            </div>
        </motion.div>
    );
};

export default About;
