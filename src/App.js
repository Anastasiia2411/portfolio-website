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

    useEffect(() => {
        const triggers = [
            { ref: startSectionRef, offset: 0 },
            { ref: secondSectionRef, offset: 1 },
            { ref: thirdSectionRef, offset: 2 },
        ];
console.log(startSectionRef, secondSectionRef,thirdSectionRef)
        triggers.forEach((trigger, index) => {
            if (trigger.ref.current) {
                ScrollTrigger.create({
                    trigger: trigger.ref.current,
                    start: "bottom bottom",
                    onEnter: () => goToSection(index)
                });
            }
        });


    }, [startSectionRef, secondSectionRef,thirdSectionRef ]);

    function goToSection(i) {
        gsap.to(window, {
            scrollTo: { y: i * window.innerHeight, autoKill: false, ease: "Power3.easeInOut" },
            duration: 0.85
        });
    }

    return (
        <div>
            <GlobalStyle/>
            <StartSection ref={startSectionRef}/>
            <SecondSection ref={secondSectionRef}/>
            <ThirdSection ref={thirdSectionRef}/>

        </div>
    );
}

//тут проблема в ref измени  на React.forwardRef

// function App() {
//
//     return (
//         <div>
//             <GlobalStyle/>
//             <ReactFullpage
//                 // Здесь можно добавить опции для fullPage.js, например:
//                 scrollingSpeed={1000} /* Время в миллисекундах для скролла между секциями */
//                 render={({ state, fullpageApi }) => {
//                     return (
//                         <ReactFullpage.Wrapper>
//                             <div className="section"><StartSection/></div>
//                             {/*<div className="section"><SecondSection/></div>*/}
//                             <div className="section"><ThirdSection/></div>
//                         </ReactFullpage.Wrapper>
//                     );
//                 }}
//             />
//         </div>
//     );
// }

export default App;
