import React from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import Home from '../pages/Home';
import About from '../pages/About';
import Skills from '../pages/Skills';
import Services from '../pages/Services';
import Contact from '../pages/Contact';
import Error from '../Error/Error';
import Projects from '../pages/Projects';
import { AnimatePresence } from 'framer-motion';


const AppRouter = () => {
    const location = useLocation();
    return (
        <AnimatePresence>
            <Routes location={location} key={location.pathname}>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/skills" element={<Skills />} />
                <Route path="/services" element={<Services />} />
                <Route path="/project" element={<Projects />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="*" element={<Error />} />
            </Routes>
        </AnimatePresence>
    )
}
export default AppRouter;