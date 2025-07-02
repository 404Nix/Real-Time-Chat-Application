import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import ChatPage from "./pages/ChatPage";
const App = () => {
  return (
    <div className="App px-10 py-10 flex h-screen w-screen bg-[#121212] text-[#E0E0E0] justify-center">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/chats" element={<ChatPage />} />
      </Routes>
    </div>
  );
};

export default App;
