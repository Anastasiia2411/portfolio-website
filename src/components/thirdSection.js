import React, { useState, useEffect, useRef, useLayoutEffect } from "react";
import { RoomCat, RoomGirl, RoomSection, Triangle } from "./styles/thirdSectionStyles";
import catImage from "../images/room-cat.gif";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
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
    const roomSection = useRef(null);
    const cursorRef = useRef(null);
    const folders = useRef([]);
    folders.current = [];
    const triangle = useRef(null);
    const roomGirlRef = useRef(null);
    const catDialogContainer = useRef(null);
    const girlDialogContainer = useRef(null);
    const dialogGirl = useRef(null)
    const dialogCat = useRef(null)

        // const addToRefs = (el) => {
    //     if (el && !folders.current.includes(el)) {
    //         folders.current.push(el);
    //     }
    // };

    useEffect(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: roomSection.current,
                start: "top top",
                end: "bottom bottom",
            },
            repeat: 0
        });
        if (cat.current && computerRef.current) {
            tl.to(cat.current, { duration: 0, scaleX: -1 })
                .to(cat.current, { duration: 3, x: 1000 });
            tl.to(cat.current, { duration: 0, scaleX: 1 })
                .to(triangle.current, {
                    duration: 2, opacity: 0.2, height: "200px"
                })
                .to(computerRef.current, {
                    autoAlpha: 1,
                    scale: 1,
                    duration: 1,
                    ease: "power2.out"
                })
                .to(triangle.current, {
                    duration: 2, opacity: 0, height: "200px"
                })
                .to(cat.current, { duration: 0, scaleX: -1 })
                .fromTo(catDialogContainer.current, {
                    x: 600
                }, { x: 0, duration: 2 })
                .to(dialogCat.current, {
                    duration: 2,
                    text: "Мяу!",
                    ease: "none",
                    delay: 0
                })
                .to(roomGirlRef.current, { delay: 1, duration: 2, x: -450 })
                .fromTo(girlDialogContainer.current, {
                    y: 600
                }, { y: 0, duration: 2 })
                .to(dialogGirl.current, {
                    duration: 2,
                    text: "Привет!Зачем ты притащил сюда мой старый компьютер???",
                    ease: "none",
                    delay: 0
                })

        }

    }, []);

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

    // useEffect(() => {
    //     if (computerRef.current) {
    //         const computerRect = computerRef.current.getBoundingClientRect();
    //         console.log("Computer Rect:", computerRect);
    //
    //         const tl = gsap.timeline();
    //
    //         folders.current.forEach((folder, index) => {
    //             // Первая анимация: вылет папок
    //             tl.to(folder, {
    //                 x: '400',
    //                 y: '-640',
    //                 opacity: 1,
    //                 delay: 0.2 * index,
    //                 duration: 2,
    //                 ease: "power3.out"
    //             }, 0);
    //         });
    //
    //         folders.current.forEach((folder, index) => {
    //             tl.to(folder, {
    //                 y: index * -100,
    //                 duration: 1,
    //                 ease: "power3.out"
    //             }, "+=0.1");
    //         });
    //
    //         // tl.to(computerRef.current, {
    //         //     x: '-400',
    //         //     duration: 2,
    //         // })
    //     }
    // }, [folders.current, computerRef.current]);

    function catMove() {
        gsap.to(cat.current, {
            y: -20,
            duration: 1,
            ease: "power1.inOut",
            repeat: -1,
            yoyo: true,
        });
    }

    return (
        <RoomSection ref={roomSection}>
            <SecondSectionCursor ref={cursorRef}/>
            {/*<div style={{ display:"flex", flexDirection:"column" }}>*/}
            {/*{[...Array(7)].map((_, index) => (*/}
            {/*    <div ref={addToRefs}     key={index}  style={{position:"absolute", left:"100px",bottom:0, marginBottom:"45px"}}>*/}
            {/*    <img*/}
            {/*        src={folder}*/}
            {/*        alt="folder"*/}
            {/*        width={70}*/}
            {/*        height={70}*/}
            {/*    />*/}
            {/*        <p style={{margin:0, color:"white", textAlign:"center"}}>aloha</p>*/}
            {/*    </div>*/}
            {/*))}*/}
            {/*</div>*/}
            <SecondSectionDialogContainer top={"60px"} left={"63%"} src={catAvatarImg} text={"Snoofy"}
                                          containerRef={catDialogContainer} button={true} paragraphRef={dialogCat}/>
            <SecondSectionDialogContainer top={"50%"} left={"54%"} src={roomGirlAvatarImg} text={"Asy"}
                                          containerRef={girlDialogContainer} button={true} paragraphRef={dialogGirl}/>
            <a href="#" style={{
                fontSize: "20px",
                position: "absolute",
                color: "white",
                transform: "rotate(-90deg)",
                top: "230px",
                left: "180px"
            }}>React</a>
            <RoomGirl src={girl} alt="girl" ref={roomGirlRef}/>
            <Triangle ref={triangle}/>
            <img src={computer} ref={computerRef} className={"computer"} alt="computer" width={200} height={200}
                 style={{ marginBottom: "30px", position: "absolute", bottom: 0, left: "260px", zIndex: 2, scale: 0 }}/>
            <RoomCat src={catImage} ref={cat} alt="cat" onLoad={catMove}/>

        </RoomSection>
    );
}

export default ThirdSection;
