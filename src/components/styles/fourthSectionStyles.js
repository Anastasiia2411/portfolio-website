import styled from "styled-components";
import computer from "../../images/pixel_computer.png";
import background from "../../images/fourthBackgroundSection.gif"

export const FourthSectionWrapper = styled.section`
  width: 100vw;
  height: 100vh;
  background-color: rgb(40, 30, 60);
  background-image: url(${background});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  display: flex;
  justify-content: end;
  //overflow: hidden;
  align-items: start;
  position: relative;
`;

export const Computer = styled.div`
  background-image: url(${computer});
  width: 1800px;
  height: 1700px;
  background-repeat: no-repeat;
  background-size: contain;
position: relative;
`;