import React, { useEffect, useRef } from "react";
import { Computer, FourthSectionWrapper } from "./styles/fourthSectionStyles";
import SecondSectionDialogContainer from "./secondSectionDialogContainer";
import catAvatarImg from "../images/catAvatar.png";
import roomGirlAvatarImg from "../images/roomGirlAvatar.png";

function FourthSection() {

    return (
        <FourthSectionWrapper>
            <SecondSectionDialogContainer top={"60px"} left={"14%"} src={catAvatarImg} text={"Snoofy"}/>
            <SecondSectionDialogContainer top={"60px"} left={"63%"} src={roomGirlAvatarImg} text={"Asy"}/>
            <Computer>
                <div style={{
                    position: "absolute",
                    left: "35%",
                    top: "22%", maxWidth: "450px", maxHeight: "290px", overflowY: "scroll"
                }}>
                    <code style={{
                        display: "block",

                        color: "white",

                    }}>&lt;FourthSectionWrapper&gt;
                        &lt;SecondSectionDialogContainer
                        top=&quot;60px&quot; left=&quot;14%&quot;
                        src={catAvatarImg} text=&quot;Snoofy&quot;/&gt;
                        &lt;SecondSectionDialogContainer
                        top=&quot;60px&quot; left=&quot;63%&quot;
                        src={roomGirlAvatarImg} text=&quot;Asy&quot;/&gt;
                        &lt;Computer&gt;
                        &lt;/Computer&gt;
                        &lt;/FourthSectionWrapper&gt;
                        &lt;pre&gt;
                        &lt;pre&gt;
                        <pre>
  {`useEffect(() => {
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

  }, []);`}
                            {`useEffect(() => {
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

  }, []);`}
</pre>
                    </code>
                </div>
                <button style={{backgroundColor:"red", position:"absolute", top:"41%", left:"39%", padding:"3px 80px", fontFamily: "'Pixelify Sans', sans-serif", fontSize:"50px", color:"white"}}>Enter</button>
            </Computer>
        </FourthSectionWrapper>
    );
}

export default FourthSection;

