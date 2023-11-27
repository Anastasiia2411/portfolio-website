import styled from "styled-components";
import background from "../../images/room.jpeg";

export const RoomSection = styled.section`
  background-image: url(${background});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  height: 100vh;
  width: 100vw;
  position: relative;
  background-attachment: fixed;
  overflow-x: hidden;
  display: flex;
  justify-content: start;
  align-items: end;
`;


export const RoomCat = styled.img`
  width: 250px;
  height: 250px;
  //transform: scaleX(-1);
  position: absolute;
  left: 700px;
  top: 10px;
`;

export const RoomGirl = styled.img`
  width: 320px;
  height: 320px;
  position: absolute;
  right: 0;
  bottom:45px;
  transform: scaleX(-1);
`;