import React, { useRef, useEffect } from "react";
import {
    Footer,
    Girl,
    House,
    RoadSection,
    SecondSectionCursor, Cat, WrapperRobot, BoomImg, FireImg
} from "./styles/techStackSection.styles";
import girl from "../images/runGirl.gif";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import robotAvatarImg from "../images/robotAvatar.png";
import girlAvatarImg from "../images/girlAvatar.png";
import TechStackDecor from "./techStackDecor";
import cat from "../images/pixel-cat.gif";
import SecondSectionDialogContainer from "./secondSectionDialogContainer";
import Boom from "../images/boom.gif";
import fire from "../images/fire.gif";
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
import reactImg from "../images/elemnts/react.svg";

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

const imgArr = [
    { img: css, label: "CSS", description: "Cascading Style Sheets, язык стилей для оформления веб-страниц." },
    {
        img: scss,
        label: "SCSS",
        description: "Препроцессор CSS, позволяющий использовать переменные, функции и многое другое."
    },
    { img: strapi, label: "Strapi", description: "Headless CMS, позволяющая легко создавать и управлять контентом." },
    { img: javaScript, label: "JavaScript", description: "Мощный язык программирования для веб-разработки." },
    { img: html, label: "HTML", description: "Язык разметки для создания и структурирования веб-страниц." },
    { img: next, label: "Next.js", description: "Фреймворк для серверного рендеринга на React." },
    { img: redux, label: "Redux", description: "Библиотека для управления состоянием приложения." },
    { img: bootstrap, label: "Bootstrap", description: "Фреймворк для быстрой верстки адаптивных сайтов." },
    {
        img: tailwind,
        label: "Tailwind CSS",
        description: "Утилитарный фреймворк CSS для быстрого дизайна интерфейсов."
    },
    { img: material, label: "Material UI", description: "Библиотека компонентов React с Material Design." },
    { img: webpackImg, label: "Webpack", description: "Сборщик модулей и ресурсов для проектов." },
    { img: git, label: "Git", description: "Система контроля версий для отслеживания изменений в коде." },
    { img: gsapImg, label: "GSAP", description: "Библиотека для создания анимаций в вебе." },
    {
        img: styledComponents,
        label: "Styled Components",
        description: "Библиотека для стилизации компонентов в React."
    },
    { img: reactSpring, label: "React Spring", description: "Фреймворк для создания физических анимаций в React." },
];

function TechStackSection() {
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
    const dialogGirlContainer = useRef(null);
    const boom = useRef(null);
    const fireRef = useRef(null);
    const timeline = gsap.timeline({ repeat: 0 });
    const tm = gsap.timeline({ repeat: 0 });

    const animations = [
        {
            character: dialogGirl,
            text: "Ой, Bip-Boop-283, ты мне уже надоел за мной гоняться!",
            duration: 2,
            antagonist: dialogRobot,
        },
        {
            character: dialogRobot,
            text: "После всех этих лет помощи, я должен получить своё \"спасибо\"!",
            duration: 2,
            antagonist: dialogGirl,
        },
        {
            character: dialogGirl,
            text: "Почему это так важно для тебя?",
            duration: 1,
            reset: true,
            antagonist: dialogRobot,
        },
        {
            character: dialogRobot,
            text: "Я помогал, отвечал, учил. Но ни разу не услышал \"спасибо\".",
            duration: 2,
            reset: true,
            antagonist: dialogGirl,
        },
        {
            character: dialogGirl,
            text: "Хорошо, я скажу \"спасибо\". Но сначала ответь на один вопрос.",
            duration: 2,
            reset: true,
            antagonist: dialogRobot,
        },
        { character: dialogRobot, text: "Спрашивай!", duration: 2, reset: true, antagonist: dialogGirl, },
        {
            character: dialogGirl,
            text: "Создай полностью рабочий веб-сайт",
            duration: 2,
            reset: true,
            antagonist: dialogRobot,
        },
        {
            character: dialogRobot,
            text: "Создаю... не могу",
            duration: 2,
            onComplete: () => animateRobotFall(tm),
            reset: true,
            animate: true,
            antagonist: dialogGirl
        },
        { character: dialogGirl, text: "Наконец-то он от меня отстал.Спасибо!", duration: 2, antagonist: dialogRobot, }
    ];

    function addTextAnimation(timeline, target, text, duration, delay = 0, ease = "none", fn) {
        timeline.to(target.current, { duration, text, ease, delay, onStart: fn });
    }

    function addCharacterAnimation(ref, dur, tm = gsap) {
        tm.to(ref, {
            scrollTrigger: {
                trigger: roadRef.current,
            },
            x: 1200,
            duration: dur,
        });
    }

    function resetCharacterSpeech(tm, target) {
        tm.to(target.current, { duration: 0, text: "", ease: "none", delay: 1 });
    }

    function animateElementsContainer(dialogRobotContainer, dialogGirlContainer, timeline) {
        const animationSteps = [
            {
                targets: dialogRobotContainer,
                props: {
                    duration: 1,
                    rotation: 20,
                    transformOrigin: "bottom left",
                    ease: "none"
                }
            },
            {
                targets: dialogRobotContainer,
                props: {
                    duration: 2,
                    rotation: 90,
                    x: "+=100",
                    y: "+=700",
                    scale: 0.5,
                    transformOrigin: "bottom left",
                    ease: "power3.out"
                }
            },
            {
                targets: dialogGirlContainer,
                props: {
                    duration: 2,
                    x: "-=300",
                    ease: "power3.out"
                }
            }
        ];
        animationSteps.forEach(step => {
            timeline.to(step.targets, step.props);
        });
    }

    function animateRobotFall(tm) {
        tm.kill();
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
                        onComplete: () => {
                            gsap.to(fireRef.current, {
                                opacity: 1,
                                duration: 1,
                                x: "+=60",
                            });
                        },
                        ease: "power1.in"
                    });
            }
        });
    }

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

    function catAnimation() {
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
    }

    const startAnimation = () => {
        catAnimation();

        addCharacterAnimation(girlRef.current, 20);
        addCharacterAnimation(robotRef.current, 40, tm);

        animations.forEach(animation => {
            addTextAnimation(timeline, animation.character, animation.text, animation.duration, 0, "none", animation.onComplete);
            if (animation.reset) {
                resetCharacterSpeech(timeline, animation.antagonist);
            }
            if (animation.animate) {
                animateElementsContainer(dialogRobotContainer.current, dialogGirlContainer.current, timeline);
            }

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

        const moveCursor = (e) => {
            gsap.to(cursorRef.current, {
                x: e.clientX,
                y: e.clientY,
                duration: 0,
                ease: "power3.out",
            });
        };

        if (element) {
            observer.observe(element);
        }

        section.current.addEventListener("mousemove", moveCursor);

        return () => {
            section.current.removeEventListener("mousemove", moveCursor);
            if (element) {
                observer.unobserve(element);
            }
        };
    }, []);

    return (
        <RoadSection ref={section}>
            <SecondSectionCursor ref={cursorRef}/>
            <Girl ref={girlRef} src={girl} alt="girl" onClick={() => animateUp(girlRef, -100, 0)}/>
            <WrapperRobot ref={robotRef}>
                <BoomImg src={Boom} alt="boom" ref={boom} width={100} height={100}/>
                <FireImg src={fire} alt="fire" ref={fireRef} width={100} height={100}/>
            </WrapperRobot>
            <TechStackDecor/>
            <House ref={houseRef} style={{ position: "relative" }}>
                <Cat src={cat} alt="cat" width={70} height={70} ref={catRef}
                     onClick={() => animateUp(catRef, -30, 0, 0.3, 0.1)}/>
            </House>
            <SecondSectionDialogContainer top={"8%"} left={"50%"} src={girlAvatarImg} alt={"girl avatar"}
                                          containerRef={dialogGirlContainer} text={"Asy"} paragraphRef={dialogGirl}/>
            <SecondSectionDialogContainer top={"15%"} left={"100px"} containerRef={dialogRobotContainer}
                                          src={robotAvatarImg} alt={"robot avatar"} text={"Bip-Boop-223"}
                                          paragraphRef={dialogRobot}/>
            <Footer ref={roadRef}/>
        </RoadSection>
    );
}

export default TechStackSection;