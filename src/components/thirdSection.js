import React, { useEffect, useRef, useState } from "react";
import {
    CloseIcon,
    ComputerImg,
    FolderLink,
    FolderParagraph,
    FolderWrapper, GithubLink, LinkEl, Popup, PopupHeader, PopupLibraries, PopupParagraph, PopupWrapper, ProjectImage,
    RoomCat,
    RoomGirl,
    RoomSection,
    Triangle
} from "./styles/thirdSectionStyles";
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
import closeSvg from "../images/close_pixel.svg";
import susidyUaImg from "../images/projects_img/susidy_img.png";
import yankiImg from "../images/projects_img/Yanki_img.png";
import wealthontImg from "../images/projects_img/wealphont_img.png";
import capitweetImg from "../images/projects_img/capitweet_img.png";
import aquaImg from "../images/projects_img/aqua_img.png";
import cardsImg from "../images/projects_img/cards.png";
import englishImg from "../images/projects_img/thinEnglish_img.png";
import cssImg from "../images/elemnts/css-3-svgrepo-com.svg";
import scssImg from "../images/elemnts/sass-1.svg";
import strapiImg from "../images/elemnts/strapi-2.svg";
import javaScript from "../images/elemnts/icons8-javascript.svg";
import htmlImg from "../images/elemnts/html-5-svgrepo-com.svg";
import reactImg from "../images/elemnts/react.svg";
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

gsap.registerPlugin(ScrollTrigger);

function ThirdSection() {
    const [window, setWindow] = useState(false);
    const [openFolder, setOpenFolder] = useState(null)
    const refs = {
        cat: useRef(null),
        computer: useRef(null),
        roomSection: useRef(null),
        cursor: useRef(null),
        folders: useRef([]),
        triangle: useRef(null),
        roomGirl: useRef(null),
        catDialogContainer: useRef(null),
        girlDialogContainer: useRef(null),
        dialogGirl: useRef(null),
        dialogCat: useRef(null),
        folderWrapper: useRef(null)
    };

    const addToRefs = (el) => {
        if (el && !refs.folders.current.includes(el)) {
            refs.folders.current.push(el);
        }
    };

    const projects = [
        {
            img: susidyUaImg,
            project: "Susidy-ua",
            description: "Per Intergal Bud's request, my colleague and I developed a fundraising website using HTML, SCSS, and JavaScript to aid the restoration of a war-damaged historical building in Novgorod-Siverskyi. The site promotes active donations and demonstrates the ability to deliver an excellent user experience based on client specifications.",
            gitHub: "",
            libraries: [scssImg, htmlImg, javaScript]
        },
        {
            img: yankiImg,
            project: "Yanki_Project",
            description: "A small eCommerce Project as a Personal Training Initiative. Developed individually to enhance skills in React, Redux, Styled Components, and Formik/Yup, this dynamic website showcases intuitive product browsing, cart management, and secure checkout, focusing on code structure, state management, and UI design.",
            gitHub: "",
            libraries: [reactImg, redux, styledComponents]
        },
        {
            img: wealthontImg,
            project: "Wealthont",
            description: "A small landing page project as a personal initiative for practice. Developed independently using React, Styled Components, and responsive design principles, this project provided an opportunity to create a dynamic and stylish user interface for the landing page, combining technology and design.",
            gitHub: "",
            libraries: [reactImg, styledComponents]
        },
        {
            img: capitweetImg,
            project: "FP4SocialNetwork (capitweet)",
            description: "A Social Network Graduation Project at dat.it School with a team of 6. Collaborated to create a family-oriented social network inspired by Twitter, leveraging HTTP requests, websockets, React, Redux, and React Router for a dynamic user experience.",
            gitHub: "",
            libraries: [reactImg, javaScript, redux,]
        },
        {
            img: aquaImg,
            project: "Aqua_landing_page",
            description: "A simple yet elegant web project created using HTML and CSS. This project showcases a clean design and a user-friendly interface, suitable for businesses or individuals looking to establish an online presence.",
            gitHub: "",
            libraries: [cssImg, htmlImg, javaScript]
        },
        {
            img: cardsImg,
            project: "Step-project-Cards",
            description: "The 'Card Note' project is the third project in the training program, developed as a team effort. The outcome is a web application that enables employees to create, manage, and delete appointment cards for doctors.",
            gitHub: "",
            libraries: [scssImg, htmlImg, javaScript]
        },
        {
            img: englishImg,
            project: "think in english",
            description: "Independently developed a website for an English language school, handling both design and the creation of a data management system on Strapi. Also managed server setup and application deployment with SSR for performance optimization.",
            gitHub: "",
            libraries: [strapiImg, next, styledComponents, reactSpring]
        }
    ];

    useEffect(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: refs.roomSection.current,
                start: "top top",
                end: "bottom bottom",
            },
            repeat: 0
        });
        if (refs.cat.current && refs.computer.current) {
            tl.to(refs.cat.current, { duration: 0, scaleX: -1 })
                .to(refs.cat.current, { duration: 3, x: 1000 });
            tl.to(refs.cat.current, { duration: 0, scaleX: 1 })
                .to(refs.triangle.current, {
                    duration: 2, opacity: 0.2, height: "200px"
                })
                .to(refs.computer.current, {
                    autoAlpha: 1,
                    scale: 1,
                    duration: 1,
                    ease: "power2.out"
                })
                .to(refs.triangle.current, {
                    duration: 2, opacity: 0, height: "200px"
                })
                .to(refs.cat.current, { duration: 0, scaleX: -1 })
                .fromTo(refs.catDialogContainer.current, {
                    x: 600
                }, { x: 0, duration: 2 })
                .to(refs.dialogCat.current, {
                    duration: 2,
                    text: "Мяу!",
                    ease: "none",
                    delay: 0
                })
                .to(refs.roomGirl.current, { delay: 1, duration: 2, x: -450 })
                .to(refs.folderWrapper.current, {
                    opacity: 1,
                    duration: 0,
                })
                .fromTo(refs.girlDialogContainer.current, {
                    y: 600
                }, { y: 0, duration: 2 })
                .to(refs.dialogGirl.current, {
                    duration: 2,
                    text: "Привет!Зачем ты притащил сюда мой старый компьютер???",
                    ease: "none",
                    delay: 0
                });

            const maxInColumn = 4;
            const xOffset = 230;
            const yOffset = -180;
            refs.folders.current.forEach((folder, index) => {
                const column = Math.floor(index / maxInColumn);
                const positionInColumn = index % maxInColumn;
                tl.to(folder, {
                    x: `${column * xOffset + 200}`,
                    y: `${positionInColumn * yOffset}`,
                    opacity: 1,
                    delay: 0.2,
                    duration: 0.5,
                    ease: "power3.out"
                });
            });
        }

        tl.to(refs.dialogCat.current, {
                duration: 0,
                text: "",
                ease: "none",
                delay: 2
            }
        ).to(refs.dialogCat.current, {
                duration: 1,
                text: "я вынял все твои данные из этого компьютера",
                ease: "none",
                delay: 0
            }
        ).to(refs.dialogCat.current, {
                duration: 0,
                text: "",
                ease: "none",
                delay: 2
            }
        ).to(refs.dialogCat.current, {
                duration: 1,
                text: "инопланетяне уже украли часть данных но мне удалось забрать остальное",
                ease: "none",
                delay: 0
            }
        ).to(refs.dialogCat.current, {
                duration: 0,
                text: "",
                ease: "none",
                delay: 2
            }
        ).to(refs.dialogCat.current, {
                duration: 1,
                text: "ты поступаешь очень неосмотрительно смотря на ситуацию",
                ease: "none",
                delay: 0
            }
        ).to(refs.dialogCat.current, {
                duration: 0,
                text: "",
                ease: "none",
                delay: 3
            }
        ).to(refs.dialogCat.current, {
                duration: 1,
                text: "они уже послали робота за тобой...",
                ease: "none",
                delay: 0
            }
        ).to(refs.dialogGirl.current, {
            duration: 0,
            text: "",
            ease: "none",
            delay: 1
        }).to(refs.dialogGirl.current, {
            duration: 2,
            text: "да он уже гонялся за мной я его сломала",
            ease: "none",
            delay: 0
        }).to(refs.dialogCat.current, {
                duration: 0,
                text: "",
                ease: "none",
                delay: 3
            }
        ).to(refs.dialogCat.current, {
                duration: 1,
                text: "Отлично!Но они все еще могут прилететь сами",
                ease: "none",
                delay: 0
            }
        ).to(refs.dialogGirl.current, {
            duration: 0,
            text: "",
            ease: "none",
            delay: 0
        }).to(refs.dialogGirl.current, {
            duration: 2,
            text: "Но зачем им я??",
            ease: "none",
            delay: 0
        }).to(refs.dialogCat.current, {
                duration: 0,
                text: "",
                ease: "none",
                delay: 2
            }
        ).to(refs.dialogCat.current, {
                duration: 1,
                text: "Им нужно создать сайт который сможет поработить человечество!",
                ease: "none",
                delay: 0
            }
        ).to(refs.dialogCat.current, {
                duration: 0,
                text: "",
                ease: "none",
                delay: 2
            }
        ).to(refs.dialogCat.current, {
                duration: 1,
                text: "И ты одна из тех кто им нужна для этого",
                ease: "none",
                delay: 0
            }
        ).to(refs.dialogCat.current, {
                duration: 0,
                text: "",
                ease: "none",
                delay: 2
            }
        ).to(refs.dialogCat.current, {
                duration: 1,
                text: "Они уже собрали почти всех",
                ease: "none",
                delay: 0
            }
        ).to(refs.dialogGirl.current, {
            duration: 0,
            text: "",
            ease: "none",
            delay: 2
        }).to(refs.dialogGirl.current, {
            duration: 1,
            text: "Меня они не получат!",
            ease: "none",
            delay: 0
        }).to(refs.dialogCat.current, {
                duration: 0,
                text: "",
                ease: "none",
                delay: 2
            }
        ).to(refs.dialogCat.current, {
                duration: 1,
                text: "Осмотри все свои работы и сможем продолжить",
                ease: "none",
                delay: 0
            }
        ).to(refs.dialogGirl.current, {
            duration: 0,
            text: "",
            ease: "none",
            delay: 2
        }).to(refs.dialogGirl.current, {
            duration: 1,
            text: "У меня есть идея!",
            ease: "none",
            delay: 0
        });

    }, []);

    useEffect(() => {
        const moveCursor = (e) => {
            gsap.to(refs.cursor.current, {
                x: e.clientX,
                y: e.clientY,
                duration: 0,
                ease: "power3.out",
            });
        };
        refs.roomSection.current.addEventListener("mousemove", moveCursor);

        return () => {
            refs.roomSection.current.removeEventListener("mousemove", moveCursor);
        };

    }, []);

    function catMove() {
        gsap.to(refs.cat.current, {
            y: -20,
            duration: 1,
            ease: "power1.inOut",
            repeat: -1,
            yoyo: true,
        });
    }

    return (
        <RoomSection ref={refs.roomSection}>
            <SecondSectionCursor ref={refs.cursor}/>
            <FolderWrapper ref={refs.folderWrapper}>
                {projects.map((el, index) => (
                    <FolderLink src={"#"} ref={addToRefs} key={index} onClick={()=>{setOpenFolder(el); setWindow(true)}}>
                        <img
                            src={folder}
                            alt="folder"
                            width={70}
                            height={70}
                        />
                        <FolderParagraph>{el.project}</FolderParagraph>
                    </FolderLink>
                ))}
            </FolderWrapper>
            <SecondSectionDialogContainer top={"60px"} left={"63%"} src={catAvatarImg} text={"Snoofy"}
                                          containerRef={refs.catDialogContainer} paragraphRef={refs.dialogCat}/>
            <SecondSectionDialogContainer top={"50%"} left={"54%"} src={roomGirlAvatarImg} text={"Asy"}
                                          containerRef={refs.girlDialogContainer} paragraphRef={refs.dialogGirl}/>

            <RoomGirl src={girl} alt="girl" ref={refs.roomGirl}/>
            <Triangle ref={refs.triangle}/>
            <ComputerImg src={computer} ref={refs.computer} alt="computer" width={200} height={200}/>
            <RoomCat src={catImage} ref={refs.cat} alt="cat" onLoad={catMove}/>
            {window ? <PopupWrapper>
                <Popup>
                    <CloseIcon src={closeSvg} alt="close image" width={30} height={30} onClick={()=>{setWindow(false)}}/>
                    <div>
                        <ProjectImage src={openFolder?.img} alt="project" width={480} height={290}/>
                        <div style={{
                            display: "flex",
                            marginLeft: "80px",
                            marginTop: "30px",
                            justifyContent: "center",
                            alignItems: "center"
                        }}>
                            <GithubLink href=""/>
                            <LinkEl href=""/>
                        </div>
                    </div>
                    <div>
                        <PopupLibraries>Libraries</PopupLibraries>
                        <ul style={{
                            display: "flex",
                            listStyle: "none",
                            justifyContent: "space-between",
                            maxWidth: "200px"
                        }}>
                            {openFolder?.libraries.map((el, index) => (
                                <li>
                                    <img src={el} alt="" width={60} height={60} key={index}/>
                                </li>
                            ))

                            }
                        </ul>

                        <PopupHeader>{openFolder?.project}</PopupHeader>
                        <PopupParagraph>{openFolder?.description}</PopupParagraph>

                    </div>
                </Popup>
            </PopupWrapper> : null}

        </RoomSection>
    );
}

export default ThirdSection;
