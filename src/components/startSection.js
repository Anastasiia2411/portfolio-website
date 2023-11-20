import React, { useRef, useEffect, useState } from "react";
import { gsap } from "gsap";
import { TextPlugin } from "gsap/TextPlugin";
import {
    NameParagraph,
    ProfessionHeader,
    HeaderSection,
    ArrowImg,
    WorkStatus, CustomCursor
} from "./styles/startSectionStyles";
import arrowSvg from "../images/arrow.svg";

gsap.registerPlugin(TextPlugin);

function StartSection({ text = "Frontend Developer" }) {
    const cursorRef = useRef(null);

    const [frontend, developer] = text.split(" ");

    const professionFrontend = useRef(null);
    const professionDeveloper = useRef(null);
    const arrowImg = useRef(null);
    const cursor = useRef(null);
    const openToWork = useRef(null);

    useEffect(() => {
        const elFrontend = professionFrontend.current;
        const elDeveloper = professionDeveloper.current;
        const cur = cursor.current;
        const text = openToWork.current

        cur.textContent = "|";

        const tl = gsap.timeline({ repeat: 0 });

        tl.to(elFrontend, {
            duration: frontend.length * 0.1,
            text: frontend,
            ease: "none"
        });

        tl.to(elDeveloper, {
            duration: developer.length * 0.1,
            text: developer,
            ease: "none",
            onComplete: () => {
                let newAnimation = gsap.timeline();
                newAnimation.fromTo(text, {
                    y: -400,
                    opacity:0,
                },{
                    y: 0,
                    duration: 1,
                    opacity:1,
                    ease: "power1.inOut",
                });
            }
        })

        tl.to(cur, {
            opacity: 0,
            ease: "power2.inOut",
            duration: 0.7,
            repeat: -1,
            yoyo: true
        });

        return () => tl.kill();
    }, [frontend, developer]);

    useEffect(() => {
        const moveCursor = (e) => {
            gsap.to(cursorRef.current, {
                x: e.clientX,
                y: e.clientY,
                duration: 0.3,
                ease: 'power3.out',
            });
        };

        window.addEventListener('mousemove', moveCursor);

        return () => {
            window.removeEventListener('mousemove', moveCursor);
        };
    }, []);

    useEffect(() => {
        gsap.to(arrowImg.current, {
            y: 40,
            duration: 1,
            repeat: -1,
            yoyo: true,
            ease: "power1.inOut"
        });
    }, []);

    return (
        <HeaderSection>
            <NameParagraph>Anastasiia Mielnikova</NameParagraph>
            <ProfessionHeader>
                <span ref={professionFrontend}/>
                <span ref={professionDeveloper}/>
                <span ref={cursor}/>
            </ProfessionHeader>
            <ArrowImg src={arrowSvg} alt="" ref={arrowImg}/>
            <WorkStatus ref={openToWork}>open to work</WorkStatus>
            <CustomCursor  ref={cursorRef} />
        </HeaderSection>
    );
}

export default StartSection;