import React, { useRef, useEffect } from "react";
import {
    Footer,
    Girl,
    House,
    RoadSection,
    SecondSectionCursor, Cat, Robot
} from "./styles/secondSectionStyles";
import girl from "../images/runGirl.gif";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import house from "../images/house.png";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import robot from "../images/robot.gif";
import robotAvatarImg from "../images/robotAvatar.png";
import girlAvatarImg from "../images/girlAvatar.png";
import SecondSectionDecor from "./secondSectionDecor"
import cat from "../images/pixel-cat.gif";
import SecondSectionDialogContainer from "./secondSectionDialogContainer"
import Boom from "../images/boom.gif"
import fire from "../images/fire.gif"
gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

function SecondSection({setAnimation}) {
    const girlRef = useRef(null);
    const roadRef = useRef(null);
    const dialogGirl = useRef(null);
    const dialogRobot = useRef(null);
    const section = useRef(null);
    const houseRef = useRef(null);
    const robotRef = useRef(null);
    const catRef = useRef(null);
    const cursorRef = useRef(null);
    const dialogRobotContainer = useRef(null);
    const dialogGirlContainer = useRef(null)
    const boom = useRef(null)
    const fireRef = useRef(null)
    const tm = gsap.timeline({repeat:0});

    useEffect(() => {
        const moveCursor = (e) => {
            gsap.to(cursorRef.current, {
                x: e.clientX,
                y: e.clientY,
                duration: 0,
                ease: "power3.out",
            });
        };
        section.current.addEventListener("mousemove", moveCursor);

        return () => {
            section.current.removeEventListener("mousemove", moveCursor);
        };

    }, []);

    const startAnimation = () => {
        gsap.timeline({ repeat: -1, })
            .to(catRef.current, {
                scrollTrigger: {
                    trigger: roadRef.current,
                },
                scaleX: 1, duration: 0
            })
            .to(catRef.current, { x: -130, duration: 1, ease: "power3.inOut" })
            .to(catRef.current, { scaleX: -1, duration: 0 })
            .to(catRef.current, { x: 0, duration: 1, ease: "power1.inOut" });


        gsap.to(girlRef.current, {
            scrollTrigger: {
                trigger: roadRef.current,
            },
            x: 1200,
            duration: 20,
        });

        tm.to(robotRef.current, {
            scrollTrigger: {
                trigger: roadRef.current,
            },
            x: 1200,
            duration: 35,
        });



        gsap.timeline({ repeat: 0 })
            .to(dialogGirl.current, {
                duration: 2,
                text: "Ой, Bip-Boop-283, ты мне уже надоел за мной гоняться!",
                ease: "none",
                delay: 0
            })
            .to(dialogRobot.current, {
                duration: 2,
                text: "После всех этих лет помощи, я должен получить своё \"спасибо\"!\n",
                ease: "none",
                delay: 0
            })
            .to(dialogGirl.current, {
                duration: 0,
                text: "",
                ease: "none",
                delay: 2
            })
            .to(dialogGirl.current, {
                duration: 1,
                text: "Почему это так важно для тебя?",
                ease: "none",
                delay: 0
            })
            .to(dialogRobot.current, {
                duration: 0,
                text: "",
                ease: "none",
                delay: 0
            })
            .to(dialogRobot.current, {
                duration: 2,
                text: "Я помогал, отвечал, учил. Но ни разу не услышал \"спасибо\".",
                ease: "none",
                delay: 0
            })
            .to(dialogGirl.current, {
                duration: 0,
                text: "",
                ease: "none",
                delay: 0
            })
            .to(dialogGirl.current, {
                duration: 2,
                text: "Хорошо, я скажу \"спасибо\". Но сначала ответь на один вопрос.",
                ease: "none",
                delay: 0
            }).to(dialogRobot.current, {
            duration: 0,
            text: "",
            ease: "none",
            delay: 0
        }).to(dialogRobot.current, {
                duration: 2,
                text: "Спрашивай!",
                ease: "none",
                delay: 0
            }).to(dialogGirl.current, {
            duration: 0,
            text: "",
            ease: "none",
            delay: 0
        }).to(dialogGirl.current, {
            duration: 2,
            text: "Создай полностью рабочий веб-сайт",
            ease: "none",
            delay: 0
        }).to(dialogRobot.current, {
            duration: 0,
            text: "",
            ease: "none",
            delay: 0
        }).to(dialogRobot.current, {
            duration: 2,
            text: "Создаю... веб-сайт... не... могу... ",
            onStart: () => {
                tm.kill()
                gsap.to(boom.current, {
                    opacity: 1,
                    scale: 1.5,
                    duration: 5,
                    ease: "power3.out",
                    onComplete: () => {
                        const tl = gsap.timeline();
                        tl.to(boom.current, {
                            opacity: 0,
                            duration: 0.5
                        })
                            .to(robotRef.current, {
                            y: 40,
                            rotation: -90,
                            duration: 1,
                                onComplete:()=>{
                                gsap.to(fireRef.current,{
                                    opacity: 1,
                                    duration: 1,
                                    y:"-=40",
                                })
                                },
                            ease: "power1.in"
                        });
                    }
                });
            },
            ease: "none",
            delay: 0
        }).to(dialogGirl.current, {
            duration: 0,
            text: "",
            ease: "none",
            delay: 1
        }).to(dialogRobotContainer.current, {
            duration: 1,
            rotation: 20,
            transformOrigin: "bottom left",
            ease: "none"
        }).to(dialogRobotContainer.current, {
            duration: 2,
            rotation: 90,
            x: "+=100",
            y: "+=700",
            scale: 0.5,
            transformOrigin: "bottom left",
            ease: "power3.out"
        }).to(dialogGirlContainer.current, {
            duration: 2,
            x: "-=300",
            ease: "power3.out"
        }).to(dialogGirl.current, {
            duration: 2,
            text: "Наконец-то он от меня отстал.Спасибо!",
            onComplete:()=>setAnimation(true),
            ease: "none",
            delay: 0
        });
    };

    useEffect(() => {
        const element = roadRef.current;
        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    startAnimation();
                    observer.unobserve(element);
                }
            });
        }, { threshold: 0.5 });

        if (element) {
            observer.observe(element);
        }

        return () => {
            if (element) {
                observer.unobserve(element);
            }
        };
    }, []);


    function catUp() {
        let tl = gsap.timeline();
        tl.to(catRef.current, {
            y: -30,
            duration: 0.3,
        }).to(catRef.current, {
            y: 0,
            duration: 0.1,
        });
    }

    function girlUp() {
        let tl = gsap.timeline();
        tl.to(girlRef.current, {
            y: -100,
            duration: 0.3,
        }).to(girlRef.current, {
            y: 0,
            duration: 0.3,
        });
    }

    return (
        <RoadSection ref={section}>
            <SecondSectionCursor ref={cursorRef}/>
            <Girl ref={girlRef} src={girl} alt="girl" onClick={girlUp}/>
            <House src={house} alt="house" ref={houseRef}/>
            <Robot src={robot} alt="robot" ref={robotRef}/>
            <img src={Boom} alt="boom" ref={boom} width={100} height={100} style={{position:"absolute", opacity:0, bottom:"120px", right:"590px", zIndex:"100"}}/>
            <img src={fire} alt="fire" ref={fireRef} width={100} height={100} style={{position:"absolute", opacity:0, bottom:"30px", right:"575px", zIndex:"4"}}/>
            <Cat src={cat} alt="cat" width={70} height={70} ref={catRef} onClick={catUp}/>
            <SecondSectionDialogContainer top={"8%"} left={"50%"} src={girlAvatarImg} alt={"girl avatar"}
                                          containerRef={dialogGirlContainer}  text={"Asy"} paragraphRef={dialogGirl}/>
            <SecondSectionDialogContainer top={"15%"} left={"100px"} containerRef={dialogRobotContainer}
                                          src={robotAvatarImg} alt={"robot avatar"} text={"Bip-Boop-223"}
                                          paragraphRef={dialogRobot}/>
            <SecondSectionDecor/>
            <Footer ref={roadRef}/>
        </RoadSection>
    );
}

export default SecondSection;