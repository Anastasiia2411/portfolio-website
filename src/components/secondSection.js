import React, { useRef, useEffect } from "react";
import {
    Footer,
    Girl,
    House,
    RoadSection,
    SecondSectionCursor, Cat, Robot, WrapperRobot
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
import css from "../images/elemnts/css-3-svgrepo-com.svg";
import scss from "../images/elemnts/sass-1.svg";
import strapi from "../images/elemnts/strapi-2.svg";
import javaScript from "../images/elemnts/icons8-javascript.svg";
import html from "../images/elemnts/html-5-svgrepo-com.svg";
import next from "../images/elemnts/nextjs-icon-svgrepo-com.svg";
import redux from "../images/elemnts/redux.svg";
import bootstrap from "../images/elemnts/icons8-bootstrap.svg";
import tailwind from "../images/elemnts/tailwind-css-icon.svg";
import material from "../images/elemnts/icons8-material-ui.svg";
import webpackImg from "../images/elemnts/icons8-webpack.svg";
import git from "../images/elemnts/git-svgrepo-com.svg";
import gsapImg from "../images/elemnts/gsap.svg";
import styledComponents from "../images/elemnts/styled-components.svg";
import reactSpring from "../images/elemnts/react-spring-svgrepo-com.svg";
import reactImg from "../images/elemnts/react.svg"
gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);


const imgArr = [
    { img: css, label: "CSS", description: "Cascading Style Sheets, язык стилей для оформления веб-страниц." },
    { img: scss, label: "SCSS", description: "Препроцессор CSS, позволяющий использовать переменные, функции и многое другое." },
    { img: strapi, label: "Strapi", description: "Headless CMS, позволяющая легко создавать и управлять контентом." },
    { img: javaScript, label: "JavaScript", description: "Мощный язык программирования для веб-разработки." },
    { img: html, label: "HTML", description: "Язык разметки для создания и структурирования веб-страниц." },
    { img: next, label: "Next.js", description: "Фреймворк для серверного рендеринга на React." },
    { img: redux, label: "Redux", description: "Библиотека для управления состоянием приложения." },
    { img: bootstrap, label: "Bootstrap", description: "Фреймворк для быстрой верстки адаптивных сайтов." },
    { img: tailwind, label: "Tailwind CSS", description: "Утилитарный фреймворк CSS для быстрого дизайна интерфейсов." },
    { img: material, label: "Material UI", description: "Библиотека компонентов React с Material Design." },
    { img: webpackImg, label: "Webpack", description: "Сборщик модулей и ресурсов для проектов." },
    { img: git, label: "Git", description: "Система контроля версий для отслеживания изменений в коде." },
    { img: gsapImg, label: "GSAP", description: "Библиотека для создания анимаций в вебе." },
    { img: styledComponents, label: "Styled Components", description: "Библиотека для стилизации компонентов в React." },
    { img: reactSpring, label: "React Spring", description: "Фреймворк для создания физических анимаций в React." },
];

function SecondSection() {
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

    function addTextAnimation(timeline, target, text, duration, delay = 0, ease = "none") {
        timeline.to(target, { duration, text, ease, delay });
    }

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


        const timeline = gsap.timeline({ repeat: 0 });
        addTextAnimation(timeline, dialogGirl.current, "Ой, Bip-Boop-283, ты мне уже надоел за мной гоняться!", 2);
        addTextAnimation(timeline, dialogRobot.current, "После всех этих лет помощи, я должен получить своё \"спасибо\"!\n", 2);
        addTextAnimation(timeline, dialogGirl.current, "", 0, 2);
        addTextAnimation(timeline, dialogGirl.current, "Почему это так важно для тебя?", 1 );
        addTextAnimation(timeline, dialogRobot.current, "", 0, 0);
        addTextAnimation(timeline, dialogRobot.current, "Я помогал, отвечал, учил. Но ни разу не услышал \"спасибо\".", 2);
        addTextAnimation(timeline, dialogGirl.current, "", 0, 2);
        addTextAnimation(timeline, dialogGirl.current, "Хорошо, я скажу \"спасибо\". Но сначала ответь на один вопрос.", 2 );
        addTextAnimation(timeline, dialogRobot.current, "", 0, 0);
        addTextAnimation(timeline, dialogRobot.current, "Спрашивай!", 2, 0);
        addTextAnimation(timeline, dialogGirl.current, "", 0, 0);
        addTextAnimation(timeline, dialogGirl.current, "Создай полностью рабочий веб-сайт", 2, 0);
        addTextAnimation(timeline, dialogRobot.current, "", 0, 0);
        timeline.to(dialogRobot.current, {
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

    function animateUp(ref, upY, downY, durationUp = 0.3, durationDown = 0.3) {
        let tl = gsap.timeline();
        tl.to(ref.current, {
            y: upY,
            duration: durationUp,
        }).to(ref.current, {
            y: downY,
            duration: durationDown,
        });
    }

    return (
        <RoadSection ref={section}>
            <SecondSectionCursor ref={cursorRef}/>
            <Girl ref={girlRef} src={girl} alt="girl" onClick={()=>animateUp(girlRef, -100, 0)}/>
            <House src={house} alt="house" ref={houseRef}/>
            <WrapperRobot ref={robotRef}>
                {/**/}
            {/*<Robot src={robot} alt="robot" />*/}
            <img src={Boom} alt="boom" ref={boom} width={100} height={100} style={{position:"absolute", opacity:0, bottom:"60%", right:"20px", zIndex:"100"}}/>
            <img src={fire} alt="fire" ref={fireRef} width={100} height={100} style={{position:"absolute", opacity:0, bottom:"30px", transform:"rotate(90deg)", right:"10px", zIndex:"4"}}/>
            </WrapperRobot>
            <Cat src={cat} alt="cat" width={70} height={70} ref={catRef} onClick={()=> animateUp(catRef, -30, 0, 0.3, 0.1)}/>
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