import React, { useRef } from "react";
import styled from "styled-components";
import { CiPaperplane } from "react-icons/ci";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../../../api/firebase";

const ChatFooter = () => {
  const inputRef = useRef<HTMLInputElement>(null);

  const onSubmit = async (event: any) => {
    event.preventDefault();
    const timeList = new Date().toLocaleTimeString().split(":");
    const time = `${timeList[0]}:${timeList[1]}`;

    const data = {
      userNick: "susu",
      chatTime: time,
      content: inputRef.current?.value,
    };
    await addDoc(collection(db, "chat"), data);
  };

  return (
    <STChatFooterBox>
      <STChatFooterInner onSubmit={e => onSubmit(e)}>
        <STInputBox>
          <STInput ref={inputRef} />
          <CiPaperplane
            onClick={e => onSubmit(e)}
            style={{ width: "24px", height: "24px", margin: "10px" }}
          />
        </STInputBox>
      </STChatFooterInner>
    </STChatFooterBox>
  );
};

const STChatFooterBox = styled.div`
  background: #f1f3f4;
  border-radius: 25px;
  display: flex;
  min-height: 2.25rem;
  margin: 0.9375rem;
  overflow: hidden;
  position: relative;
`;

const STChatFooterInner = styled.form`
  align-items: center;
  display: flex;
  flex-direction: row;
  width: 100%;
`;

const STInputBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  position: relative;
  flex-grow: 1;
  font-family: "Roboto", arial, sans-serif;
  font-size: 0.75rem;
  font-weight: 400;
`;

const STInput = styled.input`
  padding-right: 16px;
  padding-left: 16px;
  background: transparent;
  outline: none;
  border: hidden;
`;
export default ChatFooter;
