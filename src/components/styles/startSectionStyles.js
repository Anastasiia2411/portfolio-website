import styled from "styled-components";

export const HeaderSection = styled.section`
  display: flex;
  flex-direction: column;
  position: relative;
  height: 100vh;
  width: 100vw;
`;

export const NameParagraph = styled.p`
  color: white;
  display: inline-block;
  font-size: 30px;
  margin-left: 40px;
`;

export const ProfessionHeader = styled.h1`
  color: white;
  display: inline-block;
  font-size: 84px;
  margin-left: 60px;
  margin-top: 130px;
  max-width: 790px;
  line-height: 150px;
  text-transform: uppercase;
  margin-bottom: 0;

  & > span {
    display: inline-block;

    &:nth-child(2) {
      margin-left: 40px;
    }

    &:nth-child(3) {
      margin-left: 70px;
    }
  }
`;

export const ArrowImg = styled.img`
  width: 130px;
  height: 130px;
  position: absolute;
  bottom: 6%;
  right: 2%;
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
`;

export const CustomCursor = styled.div`
  width: 100px;
  height: 100px;
  background-color: white;
  border-radius: 50%;
  position: fixed; 
  pointer-events: none;
  z-index: 1000;
  mix-blend-mode: difference; 
`

