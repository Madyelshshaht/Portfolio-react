
import React from 'react'

import { Code2, Figma, PanelTopIcon, TabletSmartphoneIcon, } from 'lucide-react'
import { motion } from 'framer-motion';

const Services = () => {
    return (
        <motion.div
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            exit={{ x: window.innerWidth, transition: { duration: 0.1 } }}
        >
            <div className='pb-7'>
                <h1 className='text-4xl font-bold mb-2'>Services</h1>
                <div className="w-10 h-1 outline-0 border-none bg-green-400 rounded-3xl"></div>
            </div>

            <h1 className='text-2xl font-bold text-center '>What Im Doing</h1>

            <div className="services grid md:grid-cols-2 grid-cols-1 gap-5 py-10">
                <div className="service flex md:flex-row flex-col items-center md:gap-10 md:p-10 p-8 rounded-2xl text-balance shadow-lg hover:scale-102 hover:italic shadow-gray-500">
                    <div className="icon mb-10">

                        <PanelTopIcon color="#00e650" size={30} />
                    </div>
                    <div className="info">
                        <h3 className='text-xl font-semibold '> Web Design </h3>
                        <p> Web design involves creating visually appealing and user-friendly websites, focusing on layout, colors, typography, and responsive design. </p>
                    </div>
                </div>
                <div className="service flex md:flex-row flex-col items-center md:gap-10 md:p-10 p-8 rounded-2xl text-balance shadow-lg hover:scale-102 hover:italic shadow-gray-500">
                    <div className="icon mb-10">
                        <Code2 color="#00e650" size={30} />
                    </div>
                    <div className="info">
                        <h3 className='text-xl font-semibold '> Web Development </h3>
                        <p> Web development involves building and maintaining websites, ensuring functionality, performance, and seamless user experience through coding and programming. </p>
                    </div>
                </div>
                <div className="service flex md:flex-row flex-col items-center md:gap-10 md:p-10 p-8 rounded-2xl text-balance shadow-lg hover:scale-102 hover:italic shadow-gray-500">
                    <div className="icon mb-10">
                        <TabletSmartphoneIcon color="#00e650" size={30} />
                    </div>
                    <div className="info">
                        <h3 className='text-xl font-semibold '> Mobile apps </h3>
                        <p>Mobile app development focuses on creating intuitive and high-performing applications for iOS and Android, enhancing user experience and functionality.</p>
                    </div>
                </div>
                <div className="service flex md:flex-row flex-col items-center md:gap-10 md:p-10 p-8 rounded-2xl text-balance shadow-lg hover:scale-102 hover:italic shadow-gray-500">
                    <div className="icon mb-10">
                        <Figma color="#00e650" size={30} />
                    </div>
                    <div className="info">
                        <h3 className='text-xl font-semibold '> Figma </h3>
                        <p>I specialize in converting Figma designs into fully functional web applications with clean, responsive, and optimized code.</p>
                    </div>
                </div>
            </div>

        </motion.div>
    )
}

export default Services