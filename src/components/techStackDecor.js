import React from "react";
import firstTree from "../images/tree-pixel-first.svg";
import shop from "../images/shop.png";
import bush from "../images/pixel-bush.svg";
import flowers from "../images/pixel-flower.svg";
import { DecorContainer, FirstTreeLeft, FirstTreeRight, Shop, BushRight, Flowers, BushLeft } from "./styles/techStackDecor.styles";


function TechStackDecor(){
    return(
        <DecorContainer>
            <FirstTreeLeft src={firstTree} alt="" />
            <FirstTreeRight src={firstTree} alt="" />
            <Shop src={shop} alt="" />
            <BushRight src={bush} alt="" />
            <Flowers src={flowers} alt="" />
            <BushLeft src={bush} alt="" />
        </DecorContainer>
    )
}

export  default TechStackDecor