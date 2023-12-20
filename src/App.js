import React, { useEffect, useRef } from "react";
import GlobalStyle from "./globalStyle";
import WelcomeSection from "./components/welcomeSection";
import SecondSection from "./components/secondSection";
import ThirdSection from "./components/thirdSection";
import FourthSection from "./components/fourthSection";
import { gsap } from "gsap";

import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { ScrollTrigger } from "gsap/ScrollTrigger";


gsap.registerPlugin(ScrollToPlugin);
gsap.registerPlugin(ScrollTrigger);

function App() {
    const startSectionRef = useRef(null);
    const secondSectionRef = useRef(null);
    const thirdSectionRef = useRef(null);
    const fourthSectionRef = useRef(null);

    const handleLeave = () => {
        document.body.style.overflow = "hidden";
        setTimeout(() => {
            document.body.style.overflow = "";
        }, 500);
    };

    useEffect(() => {
        const sections = [startSectionRef.current, secondSectionRef.current, thirdSectionRef.current, fourthSectionRef.current];
        gsap.utils.toArray(sections).forEach((section, index) => {
            ScrollTrigger.create({
                trigger: section,
                start: "top top",
                pin: true,
                pinSpacing: false,
                scrub: 1,
                onLeave: handleLeave,
            });
        });
        return () => {
            ScrollTrigger.getAll().forEach(trigger => trigger.kill());
        };
    }, []);

    const scrollToSection = (ref) => {
        ref.current.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <div>
            <GlobalStyle/>
            <div ref={startSectionRef} style={{ overflow: "hidden" }}>
                <WelcomeSection  onButtonClick={() => scrollToSection(secondSectionRef)} />
            </div>
            <div ref={secondSectionRef}>
                <SecondSection/>
            </div>
            {/*<div ref={thirdSectionRef}>*/}
            {/*    <ThirdSection/>*/}
            {/*</div>*/}
            {/*<div ref={fourthSectionRef}>*/}
            {/*    <FourthSection/>*/}
            {/*</div>*/}
        </div>
    );
}

export default App;
