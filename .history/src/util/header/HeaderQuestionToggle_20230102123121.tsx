import styled from "styled-components";

const HeaderQuestionToggle = () => {
  return (
    <STBox>
      <STBoxQuestion></STBoxQuestion>
    </STBox>
  );
};

const STBox = styled.div`
  color: rgb(95, 99, 104);
  text-align: initial;
  line-height: 0;
  -webkit-user-select: none;
  white-space: nowrap;
  font: 13px/27px Roboto, Arial, sans-serif;
  min-width: 320px;
  position: relative;
  transition: box-shadow 250ms;
  display: flex;
  align-items: center;
  height: 48px;
  vertical-align: middle;
  white-space: nowrap;
  -webkit-box-align: center;
`;
const STBoxQuestion = styled.div`
  transform-origin: right top;
  right: 0px;
  top: 48px;
  max-height: 745px;
  min-width: 17.5rem;
  box-shadow: 0 3px 5px -1px rgb(0 0 0 / 20%), 0 6px 10px 0 rgb(0 0 0 / 14%),
    0 1px 18px 0 rgb(0 0 0 / 12%);
  display: inline-block;
  transform: scale(1);
  opacity: 1;
  max-width: var(--mdc-menu-max-width, calc(100vw - 32px));
`;
export default HeaderQuestionToggle;
