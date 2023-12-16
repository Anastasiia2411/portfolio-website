import styled from "styled-components";
import background from "../../images/room.jpeg";
import dialogIcon from "../../images/background.svg";
import githubImg from "../../images/github.png";
import LinkImg from "../../images/link.png";

export const RoomSection = styled.section`
  background-image: url(${background});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  height: 100vh;
  width: 100vw;
  position: relative;
  overflow: hidden;
`;

export const RoomCat = styled.img`
  width: 250px;
  height: 250px;
  transform: scaleX(1);
  position: absolute;
  left: -300px;
  top: 10px;
`;

export const RoomGirl = styled.img`
  width: 320px;
  height: 320px;
  position: absolute;
  right: -450px;
  bottom: 45px;
  transform: scaleX(-1);
`;

export const Triangle = styled.div`
  transform: rotate(40deg);
  opacity: 0;
  position: sticky;
  top: -70px;
  left: 50px;
  pointer-events: none;
  width: 0;
  height: 0;
  border-left: 450px solid transparent;
  border-right: 450px solid transparent;
  border-bottom: 1050px solid yellow;
`;

export const FolderLink = styled.a`
  position: absolute;
  left: 80px;
  bottom: 0;
  width: 10%;
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-bottom: 50px;
  cursor: pointer;
`;

export const FolderParagraph = styled.p`
  color: white;
  text-align: center;
  align-self: center;
  margin-top: 10px;
  margin-bottom: 10px;
`;

export const FolderWrapper = styled.div`
  display: grid;
  grid-template-columns:1fr 1fr;
  opacity: 0;
`;

export const ComputerImg = styled.img`
  margin-bottom: 30px;
  position: absolute;
  bottom: 0;
  left: 50px;
  z-index: 2;
  scale: 0
`;
export const PopupWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  z-index: 90;
  position: fixed; // Используйте fixed, чтобы охватить весь экран
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.5); // Полупрозрачный чёрный цвет для затемнения
  backdrop-filter: blur(5px); // Блюр для фона
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const Popup = styled.div`
  background-image: url(${dialogIcon});
  background-repeat: no-repeat;
  background-size: cover;
  width: 1280px;
  height: 470px;
  position: absolute;
  display: flex;
  z-index: 100;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const CloseIcon = styled.img`
  position: absolute;
  right: 50px;
  top: 50px;
  cursor: pointer;
`;

export const ProjectImage = styled.img`
  margin-top: 40px;
  margin-left: 50px;
`;
export const PopupHeader = styled.h2`
  color: black;
  margin-left: 40px;
  margin-top: 40px;
  font-size: 30px;
  margin-bottom: 0;
`;

export const PopupParagraph = styled.p`
  color: black;
  padding: 10px 80px 10px 10px;
  margin-left: 30px;
  font-size: 22px;
`;

export const PopupLibraries = styled.h2`
  color: black;
  margin-left: 40px;
  margin-top: 50px;
  font-size: 30px;
  margin-bottom: 0;
`;

export const GithubLink = styled.a`
  display: inline-block;
  background-image: url(${githubImg});
  width: 60px;
  height: 60px;
  background-repeat: no-repeat;
  background-size: cover;
  margin-right: 40px;

`;

export const LinkEl = styled.a`
  display: inline-block;
  background-image: url(${LinkImg});
  width: 70px;
  height: 70px;
  transform: rotate(-45deg);
  background-repeat: no-repeat;
  background-size: cover;
`;