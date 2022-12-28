import React, { useState } from "react";
import styled from "styled-components";
import { SlQuestion, SlBubble, SlSettings } from "react-icons/sl";
import {
  getAuth,
  GoogleAuthProvider,
  UserCredential,
  signInWithPopup,
  OAuthCredential,
} from "firebase/auth";
import { provider } from "../../api/firebase";

const HeaderBtn: React.FC = () => {
  const [user, setUser] = useState({});

  const onClickSignUp = () => {
    if (window.sessionStorage.getItem("token") === null) {
      const auth = getAuth();
      signInWithPopup(auth, provider).then((result: UserCredential) => {
        const credential = GoogleAuthProvider?.credentialFromResult(result);
        const login = (credential: OAuthCredential | null) => {
          if (credential !== null) {
          }
        };
        if (credential !== null && credential.accessToken !== undefined) {
          const token: string = credential.accessToken;
          window.sessionStorage.setItem("token", token);
        }
        const user = result.user;
        setUser(user);
      });
    } else {
      window.alert("이미 로그인 하셨습니다");
    }
  };

  return (
    <>
      <Button>
        <SlQuestion
          onClick={onClickSignUp}
          style={{ width: "24px", height: "24px" }}
        />
      </Button>
      <Button>
        <SlBubble style={{ width: "24px", height: "24px" }} />
      </Button>
      <Button>
        <SlSettings style={{ width: "24px", height: "24px" }} />
      </Button>
    </>
  );
};

const Button = styled.button`
  width: 48px;
  height: 48px;
  border-radius: 50%;
  :hover {
    background-color: #eee;
  }
`;

export default HeaderBtn;
