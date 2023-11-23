import React from "react";
import { Avatar, DialogContainer, DialogHeader, DialogParagraph, TextContainer } from "./styles/secondSectionStyles";
import girlAvatarImg from "../images/girlAvatar.png";

function SecondSectionDialogContainer({top, left, paragraphRef, src, alt, text, containerRef}){
    return(
        <DialogContainer top={top} left={left} ref={containerRef?containerRef:null}>
            <Avatar src={src} alt={alt}/>
            <TextContainer>
                <DialogHeader>{text}</DialogHeader>
                <DialogParagraph ref={paragraphRef}/>
            </TextContainer>
        </DialogContainer>
    )
}

export default  SecondSectionDialogContainer