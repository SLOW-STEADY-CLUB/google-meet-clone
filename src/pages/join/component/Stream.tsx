import React, { useRef, useState, useEffect } from "react";
import styled from "styled-components";
// import Webcam from "react-webcam"
import { useParams } from "react-router-dom";
import {
  IoMicOffOutline,
  IoMicOutline,
  IoVideocamOffOutline,
  IoVideocamOutline,
} from "react-icons/io5";

const Stream: React.FC = () => {
  let { params } = useParams();

  const muteBtn = useRef<HTMLButtonElement>(null);
  const cameraBtn = useRef<HTMLButtonElement>(null);
  const myFaceRef = useRef<HTMLVideoElement>(null);

  let muted = false; //마이크가 켜진 상태로 시작
  let cameraOff = false; //카메라가 켜진 상태로 시작

  return (
    <Container>
      <video
        width="640"
        height="480"
        autoPlay={true}
        ref={myFaceRef}
        style={{
          padding: 10,
          position: "absolute",
          marginLeft: "auto",
          marginRight: "auto",
          right: 0,
          zIndex: 11,
          width: 640,
          height: 480,
          textAlign: "center",
        }}
      ></video>
      <button ref={cameraBtn}>카메라</button>
      <button ref={muteBtn}>mute</button>
      <Icon>
        <Mic>
          <IoMicOutline color="red" size="22" />
          <IoMicOffOutline color="red" size="22" />
        </Mic>
        <Cam>
          <IoVideocamOutline color="red" size="22" />
          <IoVideocamOffOutline color="red" size="22" />
        </Cam>
      </Icon>
    </Container>
  );
};
export default Stream;

const Container = styled.div``;
const Icon = styled.div`
  display: flex;
  justify-content: center;
  text-align: center;
  align-items: center;
`;

const Mic = styled.button``;

const Cam = styled.button``;
