import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";

import NavBar from "./components/NavBar";

// pages
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";

function MotionDiv({ children }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
            style={{ height: "100%" }}
        >
            {children}
        </motion.div>
    )
}

export default function App() {
    const location = useLocation();

    return (
        <div>
            <NavBar />

            <AnimatePresence mode="wait">
                <Routes location={location} key={location.pathname}>
                    <Route path="/" element={ <MotionDiv> <Home /> </MotionDiv> } />
                    <Route path="/about" element={ <MotionDiv> <About /> </MotionDiv> } />
                    <Route path="/projects" element={ <MotionDiv> <Projects /> </MotionDiv> } />
                    <Route path="/contact" element={ <MotionDiv> <Contact /> </MotionDiv> } />
                </Routes>
            </AnimatePresence>
        </div>
    )
}