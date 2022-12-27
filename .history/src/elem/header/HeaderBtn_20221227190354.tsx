import React from "react";
import styled from "styled-components";
import { SlQuestion, SlBubble, SlSettings } from "react-icons/sl";
import {
  getAuth,
  signInWithRedirect,
  getRedirectResult,
  GoogleAuthProvider,
  UserCredential,
} from "firebase/auth";
import { provider } from "../../api/firebase";

const HeaderBtn: React.FC = () => {
  let user;

  const onClickSignUp = () => {
    const auth = getAuth();
    signInWithRedirect(auth, provider);
    getRedirectResult(auth)
      .then(result => {
        console.log(result);
        // This gives you a Google Access Token. You can use it to access Google APIs.
        //const credential = GoogleAuthProvider.credentialFromResult(result);
        //const token = credential.accessToken;

        // The signed-in user info.
        user = result?.user;
      })
      .catch(error => {
        console.log(error);
        // Handle Errors here.
        // const errorCode = error.code;
        // const errorMessage = error.message;
        // // The email of the user's account used.
        // const email = error.customData.email;
        // // The AuthCredential type that was used.
        // const credential = GoogleAuthProvider.credentialFromError(error);
        // // ...
      });
  };

  console.log(user);
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
