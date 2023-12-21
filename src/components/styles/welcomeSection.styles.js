import styled from "styled-components";

export const HeaderSection = styled.section`
  display: flex;
  flex-direction: column;
  position: relative;
  height: 100vh;
  width: 100vw;
  overflow: hidden;
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
    top: 12%;
    right: -80px;
  }
  @media (min-width: 321px) and (max-width: 479px) {
    font-size: 28px;
    top: 11%;
    right: -70px;
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
  height: auto;
  width: 150px;
  position: absolute;
  bottom: -20px;
  left: -90px;
  @media (min-width: 321px) and (max-width: 479px) {
    width: 100px;
    bottom: -10px;
  }
`;

export const Girl = styled.img`
  width: 300px;
  height: auto;
  position: absolute;
  bottom: -90px;
  z-index: 5;
  @media (min-width: 321px) and (max-width: 479px) {
    width: 190px;
    height: auto;
    bottom: -50px;
  }
`;
