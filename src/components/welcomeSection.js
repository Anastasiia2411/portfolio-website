import React, { useRef, useEffect, useCallback } from "react";
import { gsap } from "gsap";
import { TextPlugin } from "gsap/TextPlugin";
import {
    NameParagraph,
    ProfessionHeader,
    HeaderSection,
    ArrowImg,
    WorkStatus,
    CustomCursor,
    Robot,
    Girl
} from "./styles/welcomeSection.style";
import arrowSvg from "../images/arrow.svg";
import girl from "../images/runGirl.gif";
import robot from "../images/robot.gif";

gsap.registerPlugin(TextPlugin);

function WelcomeSection({onButtonClick}) {
    const refs = useRef({
        cursorRef: null,
        professionFrontend: null,
        professionDeveloper: null,
        arrowImg: null,
        cursor: null,
        openToWork: null,
        robotRef: null,
        girlRef: null,
        section: null
    }).current;

    const animateCursor = useCallback((e) => {
        gsap.to(refs.cursorRef, {
            x: e.clientX,
            y: e.clientY,
            duration: 0.3,
            ease: "power3.out",
        });
    }, []);

    const animateText = useCallback(() => {
        const tl = gsap.timeline({ repeat: 0 });
        const elements = [
            { ref: refs.professionFrontend, text: "frontend\n", duration: "frontend\n".length * 0.1 },
            { ref: refs.professionDeveloper, text: "developer", duration: "developer".length * 0.1 },
        ];
        elements.forEach(element => {
            tl.to(element.ref, {
                duration: element.duration,
                text: element.text,
                ease: "none"
            });
        });
        tl.to(refs.cursor, {
            opacity: 0,
            ease: "power2.inOut",
            duration: 0.7,
            repeat: -1,
            yoyo: true
        }).fromTo(refs.openToWork, {
            y: -400,
            opacity: 0,
        }, {
            y: 0,
            duration: 1,
            opacity: 1,
            ease: "power1.inOut",
        });
    }, []);

    const animateCharacters = useCallback(() => {
        gsap.to([refs.girlRef, refs.robotRef], {
            scrollTrigger: {
                trigger: refs.section,
            },
            x: window.innerWidth + 1500,
            duration: 11,
        });
        gsap.to(refs.arrowImg, {
            y: 40,
            duration: 1,
            repeat: -1,
            yoyo: true,
            ease: "power1.inOut"
        });
    }, []);

    useEffect(() => {
        animateText();
        animateCharacters();
        refs.section.addEventListener("mousemove", animateCursor);

        return () => {
            refs.section.removeEventListener("mousemove", animateCursor);
        };
    }, [animateCursor, animateText, animateCharacters]);


    const setRef = key => el => {
        refs[key] = el;
    };

    return (
        <HeaderSection ref={setRef("section")}>
            <NameParagraph>Anastasiia Mielnikova</NameParagraph>
            <ProfessionHeader>
                <span ref={setRef("professionFrontend")}/>
                <span ref={setRef("professionDeveloper")}/>
                <span ref={setRef("cursor")}>|</span>
            </ProfessionHeader>
            <ArrowImg src={arrowSvg} alt="arrow" ref={setRef("arrowImg")} onClick={onButtonClick}/>
            <WorkStatus ref={setRef("openToWork")} data-text="open to work">open to work</WorkStatus>
            <CustomCursor ref={setRef("cursorRef")}/>
            <div>
            <Girl ref={setRef("girlRef")}  src={girl} alt="girl"/>
            <Robot src={robot} alt="robot" ref={setRef("robotRef")}/>
            </div>
        </HeaderSection>
    );
}

export default WelcomeSection;