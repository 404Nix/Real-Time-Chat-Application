import React, { useState } from "react";

const Register = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [image, setImage] = useState("");

  const onSubmitHandler = (e) => {
    e.preventDefault();

    // console.log(fullName);
    // console.log(email);
    // console.log(password);
    // console.log(image);

    setFullName("");
    setEmail("");
    setPassword("");
  };

  return (
    <form
      onSubmit={(e) => {
        onSubmitHandler(e);
      }}
      className="bg-[#1E1E1E] p-6 rounded-xl w-80 shadow-md border border-[#2A2A2A]"
    >
      <h2 className="text-[#E0E0E0] text-xl font-semibold mb-4 text-center">
        Register
      </h2>

      <div className="mb-4">
        <label htmlFor="name" className="block text-sm text-[#A0A0A0] mb-1">
          Full Name
        </label>
        <input
          id="name"
          name="name"
          type="text"
          onChange={(e) => {
            setFullName(e.target.value);
          }}
          value={fullName}
          required
          placeholder="John Doe"
          className="w-full px-3 py-2 rounded bg-[#2C2C2C] text-[#E0E0E0] placeholder-[#808080] outline-none"
        />
      </div>

      <div className="mb-4">
        <label htmlFor="email" className="block text-sm text-[#A0A0A0] mb-1">
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          value={email}
          required
          placeholder="you@example.com"
          className="w-full px-3 py-2 rounded bg-[#2C2C2C] text-[#E0E0E0] placeholder-[#808080] outline-none"
        />
      </div>

      <div className="mb-4">
        <label htmlFor="password" className="block text-sm text-[#A0A0A0] mb-1">
          Password
        </label>
        <input
          id="password"
          name="password"
          type="password"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          value={password}
          required
          placeholder="••••••••"
          className="w-full px-3 py-2 rounded bg-[#2C2C2C] text-[#E0E0E0] placeholder-[#808080] outline-none"
        />
      </div>

      <div className="mb-6">
        <label htmlFor="image" className="block text-sm text-[#A0A0A0] mb-1">
          Upload Image
        </label>
        <input
          id="image"
          name="image"
          type="file"
          onChange={(e) => {
            setImage(e.target.value);
          }}
          value={image}
          accept="image/*"
          className="w-full text-sm text-[#E0E0E0] file:mr-4 file:py-2 file:px-4
                     file:rounded file:border-0 file:text-sm file:font-semibold
                     file:bg-[#3A8DFF] file:text-white hover:file:bg-[#559DFF]"
        />
      </div>

      <button
        type="submit"
        className="w-full bg-[#3A8DFF] hover:bg-[#559DFF] text-white font-medium py-2 rounded-lg transition"
      >
        Register
      </button>
    </form>
  );
};

export default Register;
