import React, { useRef } from 'react'
import styled from "styled-components";
import Webcam from "react-webcam"
import { Stream } from 'stream';



// const Cam: React.FC = () => {
const Cam = () => {
    const [userId, setUserId] = React.useState();
    const [device, setDevice] = React.useState();

    const [webcamId, setWebcamId] = React.useState();

    const startWebcam = () => {
        if(navigator.mediaDevices.getUserMedia) {
            navigator.mediaDevices //카메라 권한 정보를 받아옴
            .getUserMedia({video:true})
            .then((stream) => {
                console.log(stream)
                console.log(webcamId)
                webcamId.srcObject = stream; //받아온 stream 을 비디오 srcObject로 설정
            }) //요청 수락 시
            .catch(err => {
                console.log("카메라를 가져오지 못했습니다", err)
            });
        }
    }

    const stopWebcam = () => {
        
        const stream = webcamId.srcObject;
        
        webcamId.srcObject = null;
    }
 
    
    const camRef = useRef<HTMLVideoElement>(null);

    //video property
    const video = camRef.current.video;
			const videoWidth = camRef.current.video.videoWidth;
			const videoHeight = camRef.current.video.videoHeight;

    //Set Video properties
    camRef.current.video.width = videoWidth;
    camRef.current.video.height = videoHeight;

    return (
        <Container>
            <Webcam 
                // ref={camRef}
                mirrored
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
                    textAlign: "center",
            }}
            />
            <div>
                <button onClick={startWebcam()}>캠열기</button>
                <button onClick={stopWebcam()}>캠닫기</button>
            </div>
            <video id='webcamId' width="640" height="480" autoPlay="true" ref={camRef}></video>
            
        </Container>
    )
}
export default Cam;

const Container = styled.div`
    
`