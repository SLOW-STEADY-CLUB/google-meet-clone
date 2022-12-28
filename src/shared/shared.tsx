import React from "react";
import { Route, Routes } from "react-router-dom";
import Main from "../pages/main/Main";
import Join from "../pages/join/Join";
import Chat from "../pages/meet/component/Chat";

const Shared: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/meet/:roomId" element={<Chat />} />
      <Route path="/join/:roomId" element={<Join />} />
      <Route path="*" element={<Main />} />
    </Routes>
  );
};

export default Shared;
