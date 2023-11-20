import React, { useRef, useEffect } from "react";
import {
    Avatar,
    DialogContainer,
    DialogParagraph,
    Footer,
    Girl,
    House,
    RoadSection
} from "./styles/secondSectionStyles";
import girl from "../images/runGirl.gif";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import house from "../images/house.png";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import robot from "../images/robot.gif";
import background from "../images/background.svg";
import robotAvatarImg from "../images/robotAvatar.png";
import girlAvatarImg from "../images/girlAvatar.png";

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

function SecondSection() {
    const tl = gsap.timeline();
    const girlRef = useRef(null);
    const roadRef = useRef(null);
    const section = useRef(null);
    const container = useRef(null);
    const houseRef = useRef(null);
    const robotRef = useRef(null);

    useEffect(() => {
        gsap.to(girlRef.current, {
            scrollTrigger: roadRef.current,
            start: "top top",
            endTrigger: houseRef.current,
            x: 1200,
            scrub: true,
            pin: true,
            anticipatePin: 1,
            invalidateOnRefresh: true,
            duration: 20,
        });
        gsap.to(robotRef.current, {
            scrollTrigger: roadRef.current,
            start: "top top",
            endTrigger: houseRef.current,
            x: 1200,
            scrub: true,
            pin: true,
            anticipatePin: 1,
            invalidateOnRefresh: true,
            duration: 35,
        });
    }, []);

    return (
        <RoadSection ref={section}>
            <Girl ref={girlRef} src={girl} alt="girl"/>
            <House src={house} alt="house" ref={houseRef}/>
            <img src={robot} alt="robot"
                 style={{ height: "120px", width: "120px", position: "absolute", bottom: "25px", left: "-90px" }}
                 ref={robotRef}/>
            <DialogContainer top={"10%"} left={"40%"}>
                <Avatar src={girlAvatarImg} alt=""/>
                <DialogParagraph>i need to escape</DialogParagraph>
            </DialogContainer>
            <DialogContainer top={"100px"} left={"100px"}>
                <Avatar src={robotAvatarImg} alt=""/>
                <DialogParagraph>i need to catch</DialogParagraph>
            </DialogContainer>
            <Footer ref={roadRef}/>
        </RoadSection>
    );
}

export default SecondSection;