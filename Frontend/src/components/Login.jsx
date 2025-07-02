import React, { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const getDummyData = () => {
    setEmail("user@gmail.com");
    setPassword("12345");
  };

  const submitHandler = (e) => {
    e.preventDefault();
  };

  return (
    <form
      className="bg-[#1E1E1E] p-6 rounded-xl w-80 shadow-md border border-[#2A2A2A]"
      onSubmit={(e) => {
        submitHandler(e);
      }}
    >
      <h2 className="text-[#E0E0E0] text-xl font-semibold mb-4 text-center">
        Login
      </h2>

      <div className="mb-4">
        <label htmlFor="email" className="block text-sm text-[#A0A0A0] mb-1">
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          value={email}
          className="w-full px-3 py-2 rounded bg-[#2C2C2C] text-[#E0E0E0] placeholder-[#808080] outline-none"
          placeholder="you@example.com"
        />
      </div>

      <div className="mb-6">
        <label htmlFor="password" className="block text-sm text-[#A0A0A0] mb-1">
          Password
        </label>
        <input
          id="password"
          name="password"
          type="password"
          value={password}
          className="w-full px-3 py-2 rounded bg-[#2C2C2C] text-[#E0E0E0] placeholder-[#808080] outline-none"
          placeholder="••••••••"
        />
      </div>

      <button
        type="submit"
        className="w-full bg-[#3A8DFF] hover:bg-[#559DFF] text-white font-medium py-2 rounded-lg transition mb-5"
      >
        Login
      </button>
      <button
        type="submit"
        onClick={getDummyData}
        className="w-full bg-[#40ff3a] hover:bg-[#55ff7a] text-white font-medium py-2 rounded-lg transition"
      >
        Get Dummy Login Credentials
      </button>
    </form>
  );
};

export default Login;
