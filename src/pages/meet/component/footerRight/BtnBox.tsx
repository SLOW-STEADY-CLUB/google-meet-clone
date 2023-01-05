import styled from "styled-components";
import {
  BiInfoCircle,
  BiCategoryAlt,
  BiCommentDetail,
  BiGroup,
  BiLock,
} from "react-icons/bi";

const BtnBox = () => {
  return (
    <>
      <Button>
        <BiInfoCircle />
      </Button>
      <Button>
        <BiGroup />
      </Button>
      <Button>
        <BiCommentDetail />
      </Button>
      <Button>
        <BiCategoryAlt />
      </Button>
      <Button>
        <BiLock />
      </Button>
    </>
  );
};

const Button = styled.button`
  width: 48px;
  height: 48px;
  border-radius: 50%;
  color: #fff;
  :hover {
    background-color: #eee;
  }
`;
export default BtnBox;
