import React, {useState, useEffect, useRef} from "react";
import { RoomCat, RoomGirl, RoomSection } from "./styles/thirdSectionStyles";
import catImage from "../images/room-cat.gif"
import { gsap } from "gsap";
import girl from "../images/girl.png"
import desktop from "../images/desktop.png"




function ThirdSection() {
    const cat = useRef(null)
  function catMove(){
      gsap.to(cat.current, {
          y: -20,
          duration: 1,
          ease: "power1.inOut",
          repeat: -1,
          yoyo: true,
      });
    }
    return(
       <RoomSection>
           <img src={desktop} alt="desktop" width={880} height={1000} style={{position:"absolute", left:"-100px", top:"-130px"}}/>
           <RoomGirl src={girl} alt="girl"/>
           <RoomCat src={catImage} ref={cat}  alt="cat" onLoad={catMove} />
       </RoomSection>
    )
}

export default ThirdSection
