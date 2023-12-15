import React, {useEffect, useRef } from "react";
import GlobalStyle from "./globalStyle";
import StartSection from "./components/startSection";
import SecondSection from "./components/secondSection";
import ThirdSection from "./components/thirdSection";
import { gsap } from "gsap";

import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollToPlugin);
gsap.registerPlugin(ScrollTrigger);

function App() {
    const startSectionRef = useRef(null);
    const secondSectionRef = useRef(null);
    const thirdSectionRef = useRef(null);

    const handleLeave = () => {
        document.body.style.overflow = 'hidden';
        setTimeout(() => {
            document.body.style.overflow = '';
        }, 500);
    };


    useEffect(() => {
        const sections = [startSectionRef.current, secondSectionRef.current, thirdSectionRef.current];

        gsap.utils.toArray(sections).forEach((section, index) => {
            ScrollTrigger.create({
                trigger: section,
                start: 'top top',
                pin: true,
                pinSpacing: false,
                scrub:1,
                onLeave: handleLeave,
            });
        });

        return () => {
            ScrollTrigger.getAll().forEach(trigger => trigger.kill());
        };
    }, []);


    return (
        <div>
            <GlobalStyle/>
            <div ref={startSectionRef} style={{overflow:"hidden"}}>
            <StartSection  />
            </div>
            <div  ref={secondSectionRef}>
            <SecondSection />
            </div>
            <div ref={thirdSectionRef}>
            <ThirdSection />
            </div>
        </div>
    );
}



export default App;
