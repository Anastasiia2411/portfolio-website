import React, { useRef, useEffect } from "react";
import {
    Avatar,
    DialogContainer,
    DialogParagraph,
    Footer,
    Girl,
    House,
    RoadSection,
    DialogHeader
} from "./styles/secondSectionStyles";
import girl from "../images/runGirl.gif";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import house from "../images/house.png";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import robot from "../images/robot.gif";
import robotAvatarImg from "../images/robotAvatar.png";
import girlAvatarImg from "../images/girlAvatar.png";
import firstTree from "../images/tree-pixel-first.svg";
import flowers from "../images/pixel-flower.svg";
import bush from "../images/pixel-bush.svg";
import shop from "../images/shop.png";
import cat from "../images/pixel-cat.png";

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

function SecondSection() {
    const tl = gsap.timeline();
    const girlRef = useRef(null);
    const roadRef = useRef(null);
    const section = useRef(null);
    const container = useRef(null);
    const houseRef = useRef(null);
    const robotRef = useRef(null);
    const catRef = useRef(null);

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
        gsap.timeline({ repeat: -1 })
            .to(catRef.current, { scaleX: 1 })
            .to(catRef.current, { x: -130, duration: 1, ease: "power1.inOut" })
            .to(catRef.current, { scaleX: -1, duration: 0 })
            .to(catRef.current, { x: 0, duration: 1, ease: "power1.inOut" })

    }, []);

    return (
        <RoadSection ref={section}>
            <Girl ref={girlRef} src={girl} alt="girl"/>
            <House src={house} alt="house" ref={houseRef}/>
            <img src={robot} alt="robot"
                 style={{
                     height: "150px",
                     width: "150px",
                     position: "absolute",
                     bottom: "20px",
                     left: "-90px",
                     zIndex: 5,
                 }}
                 ref={robotRef}/>
            <img src={cat} alt="" width={70} height={70} ref={catRef}
                 style={{ position: "absolute", right: "20px", top: "65px", }}/>
            <DialogContainer top={"10%"} left={"50%"}>
                <Avatar src={girlAvatarImg} alt=""/>
                <DialogHeader>Asy</DialogHeader>
                <DialogParagraph>i need to escape</DialogParagraph>
            </DialogContainer>
            <DialogContainer top={"0%"} left={"100px"}>
                <Avatar src={robotAvatarImg} alt=""/>
                <DialogHeader>Bip-Boop-223</DialogHeader>
                <DialogParagraph>i need to catch</DialogParagraph>
            </DialogContainer>
            <div style={{ position: "relative", bottom: "10px", zIndex: 0, width: "100vw", height: "70vh" }}>
                <img src={firstTree} alt="" width={300} height={400}
                     style={{ position: "absolute", bottom: "50px", left: "-40px" }}/>
                <img src={firstTree} alt="" width={300} height={400}
                     style={{ position: "absolute", bottom: "65px", right: "170px" }}/>
                <img src={shop} alt="" width={600} height={600}
                     style={{ position: "absolute", bottom: "-5px", right: "480px" }}/>
                <img src={bush} alt="" width={90} height={90}
                     style={{ position: "absolute", bottom: "60px", right: "980px" }}/>
                <img src={flowers} alt="" width={80} height={80}
                     style={{ position: "absolute", bottom: "85px", left: "90px" }}/>
                <img src={bush} alt="" width={90} height={90}
                     style={{ position: "absolute", bottom: "80px", right: "320px" }}/>
            </div>
            <Footer ref={roadRef}/>
        </RoadSection>
    );
}

export default SecondSection;