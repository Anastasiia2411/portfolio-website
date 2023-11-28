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
  overflow: hidden;
  //display: flex;
  //justify-content: start;
  //align-items: end;
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
  bottom:45px;
  transform: scaleX(-1);
`;

export const Triangle = styled.div`
  transform: rotate(38deg);
  
  opacity: 0;
  position: sticky;
 top:-70px;
  left: 50px;
  width: 0;
  height: 0;
  border-left: 450px solid transparent;
  border-right: 450px solid transparent;
  border-bottom: 1050px solid yellow;

`