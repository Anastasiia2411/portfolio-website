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
import mobile from "../images/mobile.png";

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
    const dialogGirl = useRef(null);
    const dialogCat = useRef(null);
    const folderWrapper = useRef(null);
    const addToRefs = (el) => {
        if (el && !folders.current.includes(el)) {
            folders.current.push(el);
        }
    };

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
                .to(folderWrapper.current, {
                    opacity: 1,
                    duration: 0,
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
                });
            folders.current.forEach((folder, index) => {
                // Первая анимация: вылет папок
                tl.to(folder, {
                    x: "230",
                    y: "-640",
                    opacity: 1,
                    delay: 0.2,
                    duration: 0.5,
                    ease: "power3.out"
                }).to(folder, {
                    y: index * -100,
                    duration: 0.5,
                    ease: "power3.out"
                }, "+=0.1");
            });
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
            <div style={{
                position: "absolute",
                zIndex: 100,
                top: 0,
                left: "130px",
                backgroundImage: `url(${mobile})`,
                width: "300px",
                height: "550px",
                backgroundSize: "cover",
                transform: "rotate(90deg)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center"
            }}>
                <div style={{ backgroundColor: "white", width: "78%", height: "78%", }}>
                    <div style={{ transform: "rotate(-90deg)", width:"100%", height:"50%" }}>
                        <p>alohs kdemdklk wldekfdmvmr, qlwkedmfn lqwkemdfnr wkedmef</p>
                    </div>
                </div>
            </div>
            <div style={{ display: "flex", flexDirection: "column", opacity: 0 }} ref={folderWrapper}>
                {[...Array(7)].map((_, index) => (
                    <a src={"#"} ref={addToRefs} key={index}
                       style={{
                           position: "absolute",
                           left: "350px",
                           bottom: 0,
                           marginBottom: "45px",
                           cursor: "pointer"
                       }}>
                        <img
                            src={folder}
                            alt="folder"
                            width={70}
                            height={70}
                        />
                        <p style={{ margin: 0, color: "white", textAlign: "center" }}>aloha</p>
                    </a>
                ))}
            </div>
            <SecondSectionDialogContainer top={"60px"} left={"63%"} src={catAvatarImg} text={"Snoofy"}
                                          containerRef={catDialogContainer} button={true} paragraphRef={dialogCat}/>
            <SecondSectionDialogContainer top={"50%"} left={"54%"} src={roomGirlAvatarImg} text={"Asy"}
                                          containerRef={girlDialogContainer} button={true} paragraphRef={dialogGirl}/>
            <a href="#" style={{
                fontSize: "18px",
                position: "absolute",
                color: "white",
                transform: "rotate(-90deg)",
                top: "110px",
                left: "30px"
            }}>HTML</a>
            <a href="#" style={{
                fontSize: "18px",
                position: "absolute",
                color: "white",
                transform: "rotate(-90deg)",
                top: "110px",
                left: "65px"
            }}>CSS</a>
            <a href="#" style={{
                fontSize: "18px",
                position: "absolute",
                color: "white",
                transform: "rotate(-90deg)",
                top: "110px",
                left: "85px"
            }}>SCSS</a>
            <a href="#" style={{
                fontSize: "13px",
                position: "absolute",
                color: "white",
                transform: "rotate(-90deg)",
                top: "103px",
                left: "105px"
            }}>JavaScript</a>
            <a href="#" style={{
                fontSize: "13px",
                position: "absolute",
                color: "white",
                transform: "rotate(-90deg)",
                top: "103px",
                left: "130px"
            }}>Typescript</a>

            <a href="#" style={{
                fontSize: "18px",
                position: "absolute",
                color: "white",
                transform: "rotate(-90deg)",
                top: "240px",
                left: "150px"
            }}>Redux</a>
            <a href="#" style={{
                fontSize: "20px",
                position: "absolute",
                color: "white",
                transform: "rotate(-90deg)",
                top: "230px",
                left: "180px"
            }}>React</a>
            <a href="#" style={{
                fontSize: "18px",
                position: "absolute",
                color: "white",
                transform: "rotate(-90deg)",
                top: "240px",
                left: "100px"
            }}>Babel</a>
            <a href="#" style={{
                fontSize: "18px",
                position: "absolute",
                color: "white",
                transform: "rotate(-90deg)",
                top: "240px",
                left: "140px"
            }}>Git</a>
            <a href="#" style={{
                fontSize: "15px",
                position: "absolute",
                color: "white",
                transform: "rotate(-90deg)",
                top: "235px",
                left: "68px"
            }}>Webpack</a>

            <a href="#" style={{
                fontSize: "15px",
                position: "absolute",
                color: "white",
                transform: "rotate(-90deg)",
                top: "340px",
                left: "113px"
            }}>Playwright</a>
            <a href="#" style={{
                fontSize: "15px",
                position: "absolute",
                color: "white",
                transform: "rotate(-90deg)",
                top: "350px",
                left: "50px"
            }}>Next.js</a>
            <a href="#" style={{
                fontSize: "15px",
                position: "absolute",
                color: "white",
                transform: "rotate(-90deg)",
                top: "355px",
                left: "93px"
            }}>Strapi</a>
            <a href="#" style={{
                fontSize: "13px",
                position: "absolute",
                color: "white",
                transform: "rotate(-90deg)",
                top: "350px",
                left: "285px"
            }}>Bootstrap</a>
            <a href="#" style={{
                fontSize: "13px",
                position: "absolute",
                color: "white",
                transform: "rotate(-90deg)",
                top: "347px",
                left: "255px"
            }}>Material-UI</a>
            <a href="#" style={{
                fontSize: "13px",
                position: "absolute",
                color: "white",
                transform: "rotate(-90deg)",
                top: "355px",
                left: "240px"
            }}>Tailwind</a>
            <RoomGirl src={girl} alt="girl" ref={roomGirlRef}/>
            <Triangle ref={triangle}/>
            <img src={computer} ref={computerRef} className={"computer"} alt="computer" width={200} height={200}
                 style={{ marginBottom: "30px", position: "absolute", bottom: 0, left: "260px", zIndex: 2, scale: 0 }}/>
            <RoomCat src={catImage} ref={cat} alt="cat" onLoad={catMove}/>


        </RoomSection>
    );
}

export default ThirdSection;
