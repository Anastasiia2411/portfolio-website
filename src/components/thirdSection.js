import React, { useEffect, useRef } from "react";
import {
    ComputerImg,
    FolderLink,
    FolderParagraph,
    FolderWrapper,
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

gsap.registerPlugin(ScrollTrigger);

function ThirdSection() {
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
            project: "susidy-ua",
            description: "Per Intergal Bud's request, my colleague and I developed a fundraising website using HTML, SCSS, and JavaScript to aid the restoration of a war-damaged historical building in Novgorod-Siverskyi. The site promotes active donations and demonstrates the ability to deliver an excellent user experience based on client specifications.",
            gitHub: ""
        },
        {
            project: "Yanki_Project",
            description: "A small eCommerce Project as a Personal Training Initiative. Developed individually to enhance skills in React, Redux, Styled Components, and Formik/Yup, this dynamic website showcases intuitive product browsing, cart management, and secure checkout, focusing on code structure, state management, and UI design.",
            gitHub: ""
        },
        {
            project: "Wealthont",
            description: "A small landing page project as a personal initiative for practice. Developed independently using React, Styled Components, and responsive design principles, this project provided an opportunity to create a dynamic and stylish user interface for the landing page, combining technology and design.",
            gitHub: ""
        },
        {
            project: "FP4SocialNetwork (capitweet)",
            description: "A Social Network Graduation Project at dat.it School with a team of 6. Collaborated to create a family-oriented social network inspired by Twitter, leveraging HTTP requests, websockets, React, Redux, and React Router for a dynamic user experience.",
            gitHub: ""
        },
        {
            project: "Aqua_landing_page",
            description: "A simple yet elegant web project created using HTML and CSS. This project showcases a clean design and a user-friendly interface, suitable for businesses or individuals looking to establish an online presence.",
            gitHub: ""
        },
        {
            project: "Step-project-Cards",
            description: "The 'Card Note' project is the third project in the training program, developed as a team effort. The outcome is a web application that enables employees to create, manage, and delete appointment cards for doctors.",
            gitHub: ""
        },
        {
            project: "think in english",
            description: "Independently developed a website for an English language school, handling both design and the creation of a data management system on Strapi. Also managed server setup and application deployment with SSR for performance optimization.",
            gitHub: ""
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
                duration: 1,
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
                text: "Осмотри все свои работы и сможем продолжить, нажми кнопку когда будешь готова",
                ease: "none",
                delay: 0
            }
        );

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
                    <FolderLink src={"#"} ref={addToRefs} key={index}>
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
        </RoomSection>
    );
}

export default ThirdSection;
