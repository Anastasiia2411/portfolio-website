import styled from "styled-components";
import roadImage from "../../images/road.gif";
import way from "../../images/way.png";
import message from "../../images/background.svg";
import cursor from "../../images/mouse.png";

export const RoadSection = styled.section`
  background-image: url(${roadImage});
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  height: 100vh;
  width: 100vw;
  position: relative;
  overflow: hidden;
`;

export const Footer = styled.footer`
  background-image: url(${way});
  display: flex;
  width: 100vw;
  overflow-x: hidden;
  bottom: 0;
  height: 40px;
  position: absolute;
  background-position: center;
  background-repeat: repeat-x;
  background-size: 100% 100%;
  background-color: #797D7E;
`;

export const Girl = styled.img`
  width: 300px;
  height: 300px;
  position: absolute;
  bottom: ${props => props.bottom || "-50px"};
  z-index: 5;
`;

export const House = styled.img`
  width: 1000px;
  height: 900px;
  position: absolute;
  right: -390px;
  bottom: -60px;
  z-index: 10;
  pointer-events: none;
`;

export const DialogContainer = styled.div`
  display: flex;
  position: absolute;
  background-image: url(${message});
  width: 400px;
  height: 150px;
  background-repeat: no-repeat;
  top: ${props => props.top || "auto"};
  right: ${props => props.right || "auto"};
  bottom: ${props => props.bottom || "auto"};
  left: ${props => props.left || "auto"};
  overflow: hidden;
`;
export const TextContainer = styled.div`
  margin-left: 20px;
  display: flex;
  flex-direction: column;
`;

export const DialogParagraph = styled.p`
  display: inline-block;
  font-family: 'Pixelify Sans', sans-serif;
  font-size: 18px;
  margin: 10px 0 0 0;
  max-width: 280px;
`;

export const Avatar = styled.img`
  width: 40px;
  height: 40px;
  margin-left: 25px;
  margin-top: 20px;
`;

export const DialogHeader = styled.h3`
  display: inline-block;
  font-family: 'Pixelify Sans', sans-serif;
  font-size: 25px;
  color: black;
  margin: 20px 0 0 0;
`;

export const SecondSectionCursor = styled.div`
  width: 60px;
  height: 60px;
  background-image: url(${cursor});
  background-size: 100% 100%; /* Заполнить элемент изображением */
  position: absolute;
  z-index: 1000;
  pointer-events: none;
`;

export const Cat = styled.img`
  position: absolute;
  right: 20px;
  top: 65px;
  z-index: 100;
`


export const Robot = styled.img`
  height: 150px;
  width: 150px;
  position: absolute;
  bottom: 20px;
  left: -90px;
  z-index: 5;
`;