import React, { useRef, useState, useEffect } from 'react'
import styled from "styled-components";
// import Webcam from "react-webcam"
import { IoMicOffOutline, IoMicOutline, IoVideocamOffOutline, IoVideocamOutline } from "react-icons/io5";


const Stream: React.FC = () => {
// const Cam = () => {
    // const [userEmail, setUserEmail] = React.useState();
    // const [streamState, setStreamState] = React.useState({
    //     mic : false,
    //     video: false,
    // });

    // const micClick = () => {
    //     setStreamState((currentState) => {

    //         return {
    //             ...currentState,
    //             mic: !currentState.mic
    //         }
    //     })
    // }
    //const myFace = document.getElementById('myFace') as HTMLVideoElement | null;
    const muteBtn = useRef<HTMLButtonElement>(null);
    const cameraBtn = useRef<HTMLButtonElement>(null);
    const myFaceRef = useRef<HTMLVideoElement>(null);

    let myStream;
    let muted = false;
    let cameraOff = false;
    
    //console.log(myFaceRef)
    async function getMedia() {
        // navigator.mediaDevices.getUserMedia({
        //     video:true
            try {
                myStream = await navigator.mediaDevices.getUserMedia({
                    audio: true,
                    video: true,
                })
                .then((stream) => {
                    //비디오 tag에 stream 추가
                    let video = myFaceRef.current
                if (video !== null) {
                    video.srcObject = stream
                    video.play()
                }
                })
                console.log(myFaceRef) 
            } catch (err) {
                console.log(err)
            }
    }
    async function getAudio () {

    }
    
    useEffect(() => {
        getMedia()
      },[myFaceRef])

    function handleMuteClick () {
        if (!muted) {
            //버튼 변경
            muteBtn.innerText = "음소거 X"
            muted = true;
        } else {
            //버튼 변경
            muteBtn.innerText = "음소거 o"
            muted = false;
        }
    } 
    function handleCameraClick () {
        if (cameraOff) {
            //버튼 변경
            muteBtn.innerText = "카메라 on"
            cameraOff = false;
        } else {
            //버튼 변경
            muteBtn.innerText = "카메라 off"
            cameraOff = true;
        }
    }
    muteBtn.current?.addEventListener("click", handleMuteClick)
    cameraBtn.current?.addEventListener("click", handleCameraClick)
    // async function getMedia() {
    //     // if (myFace !== null) {
    //     //     try {
    //     //         myStream = await navigator.mediaDevices.getUserMedia({
    //     //             audio: true,
    //     //             video: true,
    //     //     })
    //     //     console.log(myFace);
    //     //     myStream = myFace.srcObject;
    //     //     } catch (err) {
    //     //         console.log(err)
    //     //     }
    //     // }
    // }
    // getMedia();
 
    // const [webcamId, setWebcamId] = React.useState();

    // const startWebcam = () => {
    //     if(navigator.mediaDevices.getUserMedia) {
    //         navigator.mediaDevices //카메라 권한 정보를 받아옴
    //         .getUserMedia({video:true})
    //         .then((stream) => {
    //             console.log(stream)
    //             console.log(webcamId)
    //             webcamId.srcObject = stream; //받아온 stream 을 비디오 srcObject로 설정
    //         }) //요청 수락 시
    //         .catch(err => {
    //             console.log("카메라를 가져오지 못했습니다", err)
    //         });
    //     }
    // }

    // const stopWebcam = () => {
        
    //     const stream = webcamId.srcObject;
        
    //     webcamId.srcObject = null;
    // }
 
    
    // const camRef = useRef<HTMLVideoElement>(null);

    // //video property
    // const video = camRef.current.video;
	// 		const videoWidth = camRef.current.video.videoWidth;
	// 		const videoHeight = camRef.current.video.videoHeight;

    // //Set Video properties
    // camRef.current.video.width = videoWidth;
    // camRef.current.video.height = videoHeight;

    return (
        <Container>
            <video id='myFace' width="640" height="480" autoPlay={true} ref={myFaceRef}
                style={{ 
                    padding: 10,
                    position: "absolute",
                    marginLeft: "auto",
                    marginRight: "auto",
                    right: 0,
                    // left: 0,
                    zIndex: 11,
                    width: 640,
                    // width: 640,
                    height: 480,
                    // height: 480,
                    textAlign: "center",}}
            ></video>
            <button ref={cameraBtn}>"카메라"</button>
            <button ref={muteBtn}>"mute"</button>
            <Icon>
                
                <Mic>
                    <IoMicOutline color='red' size='22'/>
                    <IoMicOffOutline color='red' size='22'/>
                </Mic>
                <Cam>
                    <IoVideocamOutline color='red' size='22'/>
                    <IoVideocamOffOutline color='red' size='22'/>
                </Cam>
            </Icon>
            
            {/* <div>
                <button onClick={startWebcam()}>캠열기</button>
                <button onClick={stopWebcam()}>캠닫기</button>
            </div> */}
            {/* <div>
                <button onClick={micClick}>마이크 켜기</button>
                <button>마이크 끄기</button>
            </div> */}
            {/* <video id='webcamId' width="640" height="480" autoPlay="true" ref={camRef}></video> */}
            
        </Container>
    )
}
export default Stream;

const Container = styled.div`
    
`
const Icon = styled.div`
    display: flex;
    justify-content: center;
    text-align: center;
    align-items: center;
`

const Mic = styled.button`
   
`

const Cam = styled.button`
    
`
