import React, {useEffect, useRef, useState } from "react";
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
    const [firstSectionAnim, setFirstSectionAnim] = useState(false)
    const [secondSectionAnim, setSecondSectionAnim] = useState(false)


    useEffect(() => {
        const sections = [startSectionRef.current, secondSectionRef.current, thirdSectionRef.current];

        gsap.utils.toArray(sections).forEach((section, index) => {
            ScrollTrigger.create({
                trigger: section,
                start: 'top top',
                pin: true,
                pinSpacing: false, // Убирает пробелы между секциями
                markers: true,
                scrub:1,
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
            <StartSection setAnimation={setFirstSectionAnim} />
            </div>
            {firstSectionAnim ?
            <div  ref={secondSectionRef}>
            <SecondSection setAnimation={setSecondSectionAnim}/>
            </div> :null}
            {secondSectionAnim ? <div ref={thirdSectionRef}>
            <ThirdSection />
            </div> : null}
        </div>
    );
}



export default App;
