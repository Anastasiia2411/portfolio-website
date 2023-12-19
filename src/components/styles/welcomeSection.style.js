import styled, { keyframes } from "styled-components";



const glitchAnim = keyframes`
    0% {
        clip: rect(30px, 9999px, 42px, 0);
    transform: skew(0.85deg);
}
    5% {
        clip: rect(59px, 9999px, 21px, 0);
    transform: skew(0.34deg);
}
    10% {
        clip: rect(99px, 9999px, 15px, 0);
    transform: skew(0.01deg);
}
    15% {
        clip: rect(25px, 9999px, 61px, 0);
    transform: skew(0.97deg);
}
    20% {
        clip: rect(35px, 9999px, 42px, 0);
    transform: skew(0.94deg);
}
    25% {
        clip: rect(39px, 9999px, 62px, 0);
    transform: skew(0.31deg);
}
    30% {
        clip: rect(62px, 9999px, 55px, 0);
    transform: skew(0.9deg);
}
    35% {
        clip: rect(36px, 9999px, 31px, 0);
    transform: skew(0.13deg);
}
    40% {
        clip: rect(27px, 9999px, 26px, 0);
    transform: skew(0.01deg);
}
    45% {
        clip: rect(55px, 9999px, 9px, 0);
    transform: skew(0.5deg);
}
    50% {
        clip: rect(69px, 9999px, 73px, 0);
    transform: skew(0.85deg);
}
    55% {
        clip: rect(53px, 9999px, 89px, 0);
    transform: skew(0.15deg);
}
    60% {
        clip: rect(20px, 9999px, 28px, 0);
    transform: skew(0.62deg);
}
    65% {
        clip: rect(81px, 9999px, 28px, 0);
    transform: skew(0.1deg);
}
    70% {
        clip: rect(54px, 9999px, 93px, 0);
    transform: skew(0.3deg);
}
    75% {
        clip: rect(22px, 9999px, 6px, 0);
    transform: skew(0.84deg);
}
    80% {
        clip: rect(23px, 9999px, 5px, 0);
    transform: skew(0.55deg);
}
    85% {
        clip: rect(24px, 9999px, 76px, 0);
    transform: skew(0.68deg);
}
    90% {
        clip: rect(3px, 9999px, 29px, 0);
    transform: skew(0.48deg);
}
    95% {
        clip: rect(43px, 9999px, 95px, 0);
    transform: skew(0.37deg);
}
    100% {
        clip: rect(58px, 9999px, 66px, 0);
    transform: skew(0.05deg);
}
`
const glitchAnim2 =keyframes `
    0% {
        clip: rect(66px, 9999px, 28px, 0);
    transform: skew(0.12deg);
}
    5% {
        clip: rect(85px, 9999px, 40px, 0);
    transform: skew(0.7deg);
}
    10% {
        clip: rect(14px, 9999px, 33px, 0);
    transform: skew(0.81deg);
}
    15% {
        clip: rect(48px, 9999px, 76px, 0);
    transform: skew(0.57deg);
}
    20% {
        clip: rect(77px, 9999px, 16px, 0);
    transform: skew(0.4deg);
}
    25% {
        clip: rect(15px, 9999px, 43px, 0);
    transform: skew(0.27deg);
}
    30% {
        clip: rect(33px, 9999px, 11px, 0);
    transform: skew(0.84deg);
}
    35% {
        clip: rect(50px, 9999px, 51px, 0);
    transform: skew(0.16deg);
}
    40% {
        clip: rect(52px, 9999px, 11px, 0);
    transform: skew(0.21deg);
}
    45% {
        clip: rect(39px, 9999px, 58px, 0);
    transform: skew(0.98deg);
}
    50% {
        clip: rect(88px, 9999px, 42px, 0);
    transform: skew(0.42deg);
}
    55% {
        clip: rect(98px, 9999px, 11px, 0);
    transform: skew(0.51deg);
}
    60% {
        clip: rect(73px, 9999px, 73px, 0);
    transform: skew(0.81deg);
}
    65% {
        clip: rect(82px, 9999px, 59px, 0);
    transform: skew(1deg);
}
    70% {
        clip: rect(64px, 9999px, 84px, 0);
    transform: skew(0.94deg);
}
    75% {
        clip: rect(41px, 9999px, 44px, 0);
    transform: skew(0.38deg);
}
    80% {
        clip: rect(23px, 9999px, 35px, 0);
    transform: skew(0.54deg);
}
    85% {
        clip: rect(20px, 9999px, 100px, 0);
    transform: skew(0.76deg);
}
    90% {
        clip: rect(9px, 9999px, 96px, 0);
    transform: skew(0.64deg);
}
    95% {
        clip: rect(29px, 9999px, 82px, 0);
    transform: skew(0.47deg);
}
    100% {
        clip: rect(15px, 9999px, 94px, 0);
    transform: skew(0.76deg);
}
`
const  glitchSkew = keyframes`
    0% {
        transform: skew(2deg);
}
    10% {
        transform: skew(4deg);
}
    20% {
        transform: skew(4deg);
}
    30% {
        transform: skew(-2deg);
}
    40% {
        transform: skew(4deg);
}
    50% {
        transform: skew(2deg);
}
    60% {
        transform: skew(-3deg);
}
    70% {
        transform: skew(-1deg);
}
    80% {
        transform: skew(-3deg);
}
    90% {
        transform: skew(-2deg);
}
    100% {
        transform: skew(-2deg);
}
`


export const HeaderSection = styled.section`
  display: flex;
  flex-direction: column;
  position: relative;
  height: 100vh;
  width: 100vw;
  overflow: hidden;
  @media (max-width: 600px) {
    height: 90vh;
  }
`;

export const NameParagraph = styled.p`
  color: white;
  display: inline-block;
  font-size: 30px;
  margin-left: 40px;
  @media (min-width: 480px) and (max-width: 600px) {
    font-size: 25px;
  }
  @media (min-width: 321px) and (max-width: 479px) {
    font-size: 20px;
    margin-left: 20px;
  }
`;

export const ProfessionHeader = styled.h1`
  color: white;
  display: inline-block;
  font-size: 84px;
  margin-left: 60px;
  margin-top: 130px;
  line-height: 150px;
  max-width: 840px;
  text-transform: uppercase;

  @media (min-width: 769px) and (max-width: 1024px) {
    font-size: 70px;
    max-width: 800px;
    margin-left: 40px;
  }
  @media (min-width: 601px) and (max-width: 768px) {
    margin-top: 160px;
    font-size: 55px;
    max-width: 600px;
    margin-left: 30px;
  }
  @media (min-width: 480px) and (max-width: 600px) {
    margin-top: 230px;
    font-size: 45px;
    max-width: 100px;
    line-height: 100px;
    margin-left: 30px;
  }
  @media (min-width: 321px) and (max-width: 479px) {
    margin-top: 230px;
    font-size: 30px;
    max-width: 100px;
    line-height: 100px;
    margin-left: 20px;
  }
`;

export const ArrowImg = styled.img`
  width: 130px;
  height: 130px;
  position: absolute;
  bottom: 6%;
  right: 2%;
  @media (min-width: 321px) and (max-width: 479px) {
    width: 100px;
    height: 100px;
    right: 0;
  }
`;


export const WorkStatus = styled.p`
  display: inline-block;
  color: black;
  margin: 0;
  font-size: 40px;
  max-width: 300px;
  font-weight: 600;
  background-color: white;
  padding: 10px;
  position: absolute;
  transform: rotate(-90deg);
  right: -100px;
  top: 14%;
  opacity: 0;
  @media (min-width: 480px) and (max-width: 600px) {
    font-size: 30px;
    top: 11%;
    right: -80px;
  }
  @media (min-width: 321px) and (max-width: 479px) {
    font-size: 28px;
    top: 10%;
    right: -70px;
  }
  letter-spacing: -1px;

  &::before,
  &::after {
    content: attr(data-text);
    position: absolute;
    top: 0;
    left: 0;
    background-color: #fefe33;
    color: #000;
    overflow: hidden;
    white-space: nowrap;
    padding: 10px;
    animation: ${glitchSkew}0.5s infinite linear alternate-reverse;
  }

  &::before {
    left: 3px;
    text-shadow: -3px 2px #87cefa;
    animation: ${glitchAnim}  3s ease-in reverse infinite;
  }

  &::after {
    left: -3px;
    text-shadow: -5px 2px #fff;
    animation: ${glitchAnim2}  3s ease-in-out reverse infinite;
  }

`;

export const CustomCursor = styled.a`
  width: 100px;
  height: 100px;
  background-color: white;
  border-radius: 50%;
  position: absolute;
  pointer-events: none;
  z-index: 1000;
  mix-blend-mode: difference;
  @media (max-width: 600px) {
   display: none;
  }
`;
export const Robot = styled.img`
  height: 150px;
  width: 150px;
  position: absolute;
  bottom: -20px;
  left: -90px;
  @media (min-width: 321px) and (max-width: 479px) {
    height: 100px;
    width: 100px;
  }
`;

export const Girl = styled.img`
  width: 300px;
  height: 300px;
  position: absolute;
  bottom: -90px;
  z-index: 5;
  @media (min-width: 321px) and (max-width: 479px) {
    height: 190px;
    width: 190px;
    bottom: -60px;
  }
`;
