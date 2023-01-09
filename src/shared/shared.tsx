import React from "react";
import { Route, Routes } from "react-router-dom";
import Main from "../pages/main/Main";
// import Join from "../pages/join/Join";
import Chat from "../pages/meet/component/chat/Chat";
import Meet from "../pages/meet/Meet"
import ErrorPage from "./Error";

const Shared: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Main />} errorElement={<ErrorPage />} />
      <Route path="/meet/:roomId" element={<Meet />} errorElement={<ErrorPage />} />
      {/* <Route path="/join/:roomId" element={<Join />} /> */}
      {/* <Route path="*" element={<Main />} errorElement={<ErrorPage />} /> */}
    </Routes>
  );
};

export default Shared;
