import React from "react";
import {
    Avatar,
    DialogButton,
    DialogContainer,
    DialogHeader,
    DialogParagraph,
    TextContainer
} from "./styles/techStackSection.styles";
import girlAvatarImg from "../images/girlAvatar.png";

function SecondSectionDialogContainer({ top, left, paragraphRef, src, alt, text, containerRef, button }) {
    return (
        <DialogContainer top={top} left={left} ref={containerRef ? containerRef : null}>
            <Avatar src={src} alt={alt}/>
            <TextContainer>
                <DialogHeader>{text}</DialogHeader>
                <DialogParagraph ref={paragraphRef}/>
            </TextContainer>
            {button ? <DialogButton>next</DialogButton> : null}
        </DialogContainer>
    );
}

export default SecondSectionDialogContainer;