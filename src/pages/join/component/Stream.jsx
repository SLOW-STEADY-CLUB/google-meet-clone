import React, { useRef, useState, useEffect } from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import {
  IoMicOffOutline,
  IoMicOutline,
  IoVideocamOffOutline,
  IoVideocamOutline,
} from "react-icons/io5";

const Stream = ({ audio, setAudio, video, setVideo }) => {
  const myFaceRef = useRef();

  const getUserMedia = async () => {
    if (video === true) {
      const containts = { audio, video: { width: 600, height: 400 } };
      try {
        let stream = await navigator.mediaDevices.getUserMedia(containts);
        myFaceRef.current.srcObject = stream;
        myFaceRef.current.onloadedmetadata = () => {
          myFaceRef.current.play();
        };
      } catch (err) {
        console.log(err);
      }
    }
    if (video === false) {
      const containts = { audio, video: { width: 600, height: 400 } };
      try {
        let stream = await navigator.mediaDevices.getUserMedia(containts);
        myFaceRef.current.srcObject = stream;
        myFaceRef.current.onloadedmetadata = () => {};
      } catch (err) {
        console.log(err);
      }
    }
  };

  const onClickAudioBtn = () => {
    setAudio(!audio);
  };

  const onClickVideoBtn = () => {
    setVideo(!video);
  };

  useEffect(() => {
    getUserMedia();
  }, [audio, video]);

  return (
    <Container>
      <Video
        width="600"
        height="400"
        ref={myFaceRef}
        style={{
          textAlign: "center",
        }}
      ></Video>
      <Icon>
        <Mic>
          {audio ? (
            <IoMicOffOutline onClick={onClickAudioBtn} color="red" size="32" />
          ) : (
            <IoMicOutline onClick={onClickAudioBtn} color="red" size="32" />
          )}
        </Mic>
        <Cam>
          {video ? (
            <IoVideocamOffOutline
              onClick={onClickVideoBtn}
              color="red"
              size="32"
            />
          ) : (
            <IoVideocamOutline
              onClick={onClickVideoBtn}
              color="red"
              size="32"
            />
          )}
        </Cam>
      </Icon>
    </Container>
  );
};
export default Stream;

const Container = styled.div``;

const Video = styled.video`
  border-radius: 9px;
`;
const Icon = styled.div`
  position: absolute;
  top: 530px;
  left: 230px;
  z-index: 999;
  display: flex;
  justify-content: center;
  text-align: center;
  align-items: center;
`;

const Mic = styled.button``;

const Cam = styled.button``;
