import styled from "styled-components";
import roadImage from "../../images/road.gif";
import way from "../../images/way.png";
import message from "../../images/background.svg";
import cursor from "../../images/mouse.png"

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
  cursor: url(${cursor});
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
  bottom: -50px;
`;

export const House = styled.img`
  width: 1000px;
  height: 900px;
  position: absolute;
  right: -390px;
  bottom: -60px;
`;

export const Avatar = styled.img`
  width: 40px;
  height: 40px;
  position: absolute;
  left: 20px;
  top: 10px;
`;

export const DialogContainer = styled.div`
  position: relative;
  background-image: url(${message});
  width: 400px;
  height: 150px;
  background-repeat: no-repeat;
  top: ${props => props.top || 'auto'};
  right: ${props => props.right || 'auto'};
  bottom: ${props => props.bottom || 'auto'};
  left: ${props => props.left || 'auto'};
`;

export const DialogParagraph = styled.p`
  position: absolute;
  display: inline-block;
  font-family: 'Pixelify Sans', sans-serif;
  font-size: 18px;
  left: 70px;
`
