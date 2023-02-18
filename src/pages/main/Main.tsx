import React from "react"
import Header from "../../util/header/Header"
import styled from "styled-components"
import MainLink from "./component/MainLink"
import MainImg from "./component/MainImg"

const Main = () => {
  return (
    <>
      <Header />
      <MainContainer>
        <MainBox>
          <MainLink />
          <MainImg />
        </MainBox>
      </MainContainer>
    </>
  )
}

const MainContainer = styled.div`
  height: calc(100vh - 4rem);
  min-height: 100%;
  width: 100vw;
  overflow-y: auto;
  font-size: 1rem;
`
const MainBox = styled.div`
  align-items: center;
  display: inline-flex;
  justify-content: space-evenly;
  min-height: 100%;
  width: 100vw;
  flex-wrap: wrap;
  gap: 1em;
`
export default Main
