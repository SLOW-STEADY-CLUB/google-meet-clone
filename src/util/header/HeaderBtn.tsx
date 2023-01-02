<<<<<<< HEAD
import React, { Dispatch, SetStateAction } from "react";
import styled from "styled-components";
import { SlQuestion, SlBubble, SlSettings } from "react-icons/sl";

interface AboutProps {
  setQuestion: Dispatch<SetStateAction<boolean>>;
  question: boolean;
}

const HeaderBtn: React.FC<AboutProps> = ({ setQuestion, question }) => {
=======
import React, { useState } from "react";
import styled from "styled-components";
import { SlQuestion, SlBubble, SlSettings } from "react-icons/sl";
import HeaderQuestionToggle from "./HeaderQuestionToggle";

const HeaderBtn: React.FC = () => {
  const [question, setQuestion] = useState(false);

  // const onClickSignUp = () => {
  //   if (window.sessionStorage.getItem("token") === null) {
  //     const auth = getAuth();
  //     signInWithPopup(auth, provider).then((result: UserCredential) => {
  //       const credential = GoogleAuthProvider?.credentialFromResult(result);
  //       if (credential !== null && credential.accessToken !== undefined) {
  //         const token: string = credential.accessToken;
  //         window.sessionStorage.setItem("token", token);
  //       }
  //       const user = result.user;
  //       setUser(user);
  //     });
  //   } else {
  //     window.alert("이미 로그인 하셨습니다");
  //   }
  // };

>>>>>>> b1bf7d5 ([EDIT] getCookie)
  return (
    <>
      <Button>
        <SlQuestion
<<<<<<< HEAD
<<<<<<< HEAD
          onClick={() => setQuestion(!question)}
=======
          onClick={onClickSignUp}
>>>>>>> b1bf7d5 ([EDIT] getCookie)
=======
          onClick={() => setQuestion(!question)}
>>>>>>> c534daf (edit header question btn)
          style={{ width: "24px", height: "24px" }}
        />
      </Button>
      <Button>
        <SlBubble style={{ width: "24px", height: "24px" }} />
      </Button>
      <Button>
        <SlSettings style={{ width: "24px", height: "24px" }} />
      </Button>
      {question && <HeaderQuestionToggle />}
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
