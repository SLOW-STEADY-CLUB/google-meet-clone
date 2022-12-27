import React from "react";
import styled from "styled-components";
import { SlQuestion, SlBubble, SlSettings } from "react-icons/sl";
import {
  getAuth,
  signInWithRedirect,
  getRedirectResult,
  GoogleAuthProvider,
  UserCredential,
  signInWithPopup,
  OAuthCredential,
} from "firebase/auth";
import { provider } from "../../api/firebase";

const HeaderBtn: React.FC = () => {
  const onClickSignUp = () => {
    const auth = getAuth();
    signInWithPopup(auth, provider).then((result: UserCredential) => {
      const credential = GoogleAuthProvider?.credentialFromResult(result);
      if (credential !== null && credential.accessToken !== undefined) {
        const token: string = credential.accessToken;
        window.sessionStorage.setItem("token", token);
      }

      const user = result.user;
      console.log(result);
      console.log(user);
    });
  };

  return (
    <>
      <Button>
        <SlQuestion style={{ width: "24px", height: "24px" }} />
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
