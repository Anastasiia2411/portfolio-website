import React, { useEffect, useRef } from "react";
import { Computer, FourthSectionWrapper } from "./styles/fourthSectionStyles";
import SecondSectionDialogContainer from "./secondSectionDialogContainer";
import catAvatarImg from "../images/catAvatar.png";
import roomGirlAvatarImg from "../images/roomGirlAvatar.png";
import { gsap } from "gsap";
import { SecondSectionCursor } from "./styles/techStackSection.styles";

function FourthSection() {
    const roomSection = useRef(null);
    const cursorRef = useRef(null);
    const dialogCatContainer = useRef(null);
    const dialogCat = useRef(null);
    const dialogGirlContainer = useRef(null);
    const dialogGirl = useRef(null);
    const codeRef = useRef(null);

    useEffect(() => {
        gsap.to(codeRef.current, {
            scrollTrigger: {
                trigger: roomSection.current,
                start: "top top",
                end: "bottom bottom",
            },
            duration: 6,
            text: "  {`useEffect(() => {" +
                "    const moveCursor = (e) => {\n" +
                "      gsap.to(cursorRef.current, {\n" +
                "        x: e.clientX,\n" +
                "        y: e.clientY,\n" +
                "        duration: 0,\n" +
                "        ease: \"power3.out\",\n" +
                "      });\n" +
                "    };\n" +
                "    section.current.addEventListener(\"mousemove\", moveCursor);\n" +
                "\n" +
                "    return () => {\n" +
                "      section.current.removeEventListener(\"mousemove\", moveCursor);\n" +
                "    };\n" +
                "\n" +
                "  }, []);`}\n" +
                "                        {`useEffect(() => {\n" +
                "    const moveCursor = (e) => {\n" +
                "      gsap.to(cursorRef.current, {\n" +
                "        x: e.clientX,\n" +
                "        y: e.clientY,\n" +
                "        duration: 0,\n" +
                "        ease: \"power3.out\",\n" +
                "      });\n" +
                "    };\n" +
                "    section.current.addEventListener(\"mousemove\", moveCursor);\n" +
                "\n" +
                "    return () => {\n" +
                "      section.current.removeEventListener(\"mousemove\", moveCursor);\n" +
                "    };\n" +
                "\n" +
                "  }, []);`}      {`useEffect(() => {\n" +
                    "    const moveCursor = (e) => {\n" +
                "      gsap.to(cursorRef.current, {\n" +
                "        x: e.clientX,\n" +
                "        y: e.clientY,\n" +
                "        duration: 0,\n" +
                "        ease: \"power3.out\",\n" +
                "      });\n" +
                "    };\n" +
                "    section.current.addEventListener(\"mousemove\", moveCursor);\n" +
                "\n" +
                "    return () => {\n" +
                "      section.current.removeEventListener(\"mousemove\", moveCursor);\n" +
                "    };\n" +
                "\n" +
                "  }, []);`}",
            ease: "none",
            delay: 0
            }
        );
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: roomSection.current,
                start: "top top",
                end: "bottom bottom",
            },
            repeat: 0
        });
        tl.to(dialogCatContainer.current, {
            x: 900,
            duration: 1,
        }).to(dialogGirlContainer.current, {
                x: -600,
                duration: 1,
            }
        ).to(dialogCat.current, {
                duration: 1,
                text: "Мяу!Что ты задумала????",
                ease: "none",
                delay: 0
            }
        ).to(dialogGirl.current, {
            duration: 2,
            text: "Если мы их не можем победить тут значит нам из нужно перенести в другое место",
            ease: "none",
            delay: 0
        }).to(dialogCat.current, {
                duration: 0,
                text: "",
                ease: "none",
                delay: 0
            }
        ).to(dialogCat.current, {
                duration: 2,
                text: "ничего не понимаю",
                ease: "none",
                delay: 0
            }
        ).to(dialogGirl.current, {
                duration: 0,
                text: "",
                ease: "none",
                delay: 0
            }
        ).to(dialogGirl.current, {
                duration: 2,
                text: "Сейчас увидишь, запускай!",
                ease: "none",
                delay: 0
            }
        );

    }, []);

    useEffect(() => {
        const moveCursor = (e) => {
            const cursor = cursorRef.current;
            if (cursor) {
                cursor.style.left = e.clientX + "px";
                cursor.style.top = e.clientY + "px";
            }
        };
        roomSection.current.addEventListener("mousemove", moveCursor);

        return () => {
            roomSection.current.removeEventListener("mousemove", moveCursor);
        };

    }, []);

    return (
        <FourthSectionWrapper ref={roomSection}>
            <SecondSectionCursor ref={cursorRef}/>
            <SecondSectionDialogContainer top={"60px"} left={"-50%"} src={catAvatarImg} text={"Snoofy"}
                                          containerRef={dialogCatContainer} paragraphRef={dialogCat}/>
            <SecondSectionDialogContainer top={"60px"} left={"100%"} src={roomGirlAvatarImg} text={"Asy"}
                                          containerRef={dialogGirlContainer} paragraphRef={dialogGirl}/>
            <Computer>
                <div style={{
                    position: "absolute",
                    left: "34%",
                    overflowX: "hidden",
                    top: "21%", width: "470px", height: "320px", overflowY: "scroll",
                    backgroundColor: "black",
                }}>
                    <pre ref={codeRef} style={{
                        display: "inline-block",
                        fontFamily: "'Pixelify Sans', sans-serif",
                        color: "#00ff00",
                        whiteSpace: "pre-wrap",
                        wordWrap: "break-word",
                    }}>

                    </pre>
                </div>
                <button style={{
                    backgroundColor: "red",
                    position: "absolute",
                    top: "41%",
                    left: "39%",
                    padding: "3px 80px",
                    fontFamily: "'Pixelify Sans', sans-serif",
                    fontSize: "50px",
                    color: "white"
                }}>Enter
                </button>
            </Computer>

        </FourthSectionWrapper>
    );
}

export default FourthSection;

