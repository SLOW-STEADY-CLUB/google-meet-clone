import React from "react";
import { LoginButton } from "./component/LoginButton";
import {
  GoogleAuthProvider,
  getAuth,
  UserCredential,
  signInWithPopup,
} from "firebase/auth";
import { provider } from "../../api/firebase";

const auth = getAuth();
signInWithPopup(auth, provider);

export default function Login() {
  const onClickLogin = () => {
    const auth = getAuth();
    signInWithPopup(auth, provider).then(result => {
      const credential = GoogleAuthProvider?.credentialFromResult(result);
      const token = credential?.accessToken;
      console.log(token);
    });
  };
  return (
    <div>
      <button onClick={onClickLogin}>sdf</button>
      {/* <LoginButton /> */}
    </div>
  );
}
