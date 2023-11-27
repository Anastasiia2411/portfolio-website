import React, { useState, useEffect, useRef, useLayoutEffect } from "react";
import { RoomCat, RoomGirl, RoomSection } from "./styles/thirdSectionStyles";
import catImage from "../images/room-cat.gif";
import { gsap } from "gsap";
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import girl from "../images/girl.png";
import folder from "../images/folder.png";
import SecondSectionDialogContainer from "./secondSectionDialogContainer";
import roomGirlAvatarImg from "../images/roomGirlAvatar.png";
import catAvatarImg from "../images/catAvatar.png";
import computer from "../images/computer.png";
import { SecondSectionCursor } from "./styles/secondSectionStyles";
gsap.registerPlugin(ScrollTrigger);




function ThirdSection() {
    const cat = useRef(null);
    const computerRef = useRef(null);
    const roomSection =useRef(null);
    const cursorRef=useRef(null);


    useEffect(() => {
        const moveCursor = (e) => {
            gsap.to(cursorRef.current, {
                x: e.clientX,
                y: e.clientY,
                duration: 0,
                ease: "power3.out",
            });
        };
        roomSection.current.addEventListener("mousemove", moveCursor);

        return () => {
            roomSection.current.removeEventListener("mousemove", moveCursor);
        };

    }, []);

    function catMove() {
        gsap.to(cat.current, {
            y: -20,
            duration: 1,
            ease: "power1.inOut",
            repeat: -1,
            yoyo: true,
        });
    }


        // useLayoutEffect(() => {
        //     let tl = gsap.timeline({
        //         defaults: {
        //             immediateRender: false,
        //         },
        //         scrollTrigger: {
        //             trigger: roomSection.current,
        //             start: "top center",
        //             end: "center 30%",
        //             // markers: true,
        //         },
        //     });
        //
        //     tl.to(computerRef.current, {
        //         x: 400,
        //         duration: 2,
        //         // ease: "power1.inOut",
        //     });
        //     return () => {
        //         tl.kill();
        //     };
        //
        // }, []);

    return (
        <RoomSection ref={roomSection}>
            <SecondSectionCursor ref={cursorRef}/>
            {/*<img src={folder} alt="" width={70} height={70}/>*/}
            {/*<img src={folder} alt="" width={70} height={70}/>*/}
            {/*<img src={folder} alt="" width={70} height={70}/>*/}
            {/*<img src={folder} alt="" width={70} height={70}/>*/}
            {/*<img src={folder} alt="" width={70} height={70}/>*/}
            {/*<img src={folder} alt="" width={70} height={70}/>*/}
            {/*<img src={folder} alt="" width={70} height={70}/>*/}
            <SecondSectionDialogContainer top={"60px"} left={"63%"} src={catAvatarImg} text={"Snoofy"} />
            <SecondSectionDialogContainer top={"50%"} left={"54%"} src={roomGirlAvatarImg} text={"Asy"} />
            <a href="#" style={{fontSize:"20px", position:"absolute", color:"white", transform: "rotate(-90deg)", top:"230px", left:"180px"}}>React</a>
            <RoomGirl src={girl} alt="girl"/>
            <img src={computer} ref={computerRef} className={"computer"} alt="computer" width={200} height={200}
                 style={{ marginBottom: "30px" }}/>
            <RoomCat src={catImage} ref={cat} alt="cat" onLoad={catMove}/>

        </RoomSection>
    );
}

export default ThirdSection;
