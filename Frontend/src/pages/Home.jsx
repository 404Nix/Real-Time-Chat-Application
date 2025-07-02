import React, { useState } from "react";
import Login from "../components/Login";
import Register from "../components/Register";

const Home = () => {
  const [isLogin, setIsLogin] = useState(false);

  return (
    <div>
      <div className="bg-[#1E1E1E] h-10 w-80 flex items-center justify-center border border-[#2A2A2A] rounded-2xl mb-10">
        <h1 className="text-[#E0E0E0] font-semibold">Chat.IO</h1>
      </div>
      {!isLogin ? <Register /> : <Login />}
      <p className="text-center text-sm text-[#A0A0A0] mt-4">
        {isLogin ? "Don't have an account?" : "Already have an account?"}{" "}
        <button
          onClick={() => setIsLogin(!isLogin)}
          className="text-[#3A8DFF] hover:underline focus:outline-none"
        >
          {isLogin ? "Register here" : "Login here"}
        </button>
      </p>
    </div>
  );
};

export default Home;
