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
} from "firebase/auth";
import { provider } from "../../api/firebase";

const HeaderBtn: React.FC = () => {
  let user;

  const onClickSignUp = () => {
    const auth = getAuth();
    signInWithPopup(auth, provider).then(result => {
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential?.accessToken;

      const user = result.user;
      console.log(result);
      console.log(user);
    });
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
