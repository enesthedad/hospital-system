import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import { useLogin } from "../hooks/useLogin";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const Login = () => {
  const { login, error, loading, success } = useLogin();
  const email = useRef("");
  const password = useRef("");
  const handleSubmit = (e) => {
    const emailValue = email.current.value;
    const passwordValue = password.current.value;
    e.preventDefault();
    login(emailValue, passwordValue);
  };
  useEffect(() => {
    error && notify("error", `${error} 🔴`);
    success && notify("success", `Loged in successfully!!  🟢`);
  }, [error, success]);
  const notify = (type, message) => {
    if (type === "error") {
      toast.error(message);
    }
    if (type === "success") {
      toast.success(message);
    }
  };
  return (
    <div className="h-screen w-full">
      <Navbar />
      <form
        className="h-full bg-stone-800 text-white flex flex-col gap-2 justify-center items-center text-start"
        onSubmit={handleSubmit}
      >
        <div className="flex content-start">
          <h3 className="text-3xl mb-5 font-bold text-teal-500">Login</h3>
        </div>
        <div className="flex flex-col gap-1">
          <label className="text-stone-300">Email address:</label>
          <input
            type="email"
            className="px-2 py-1 rounded-md bg-stone-100 text-stone-800"
            ref={email}
          />
        </div>
        <div className="flex flex-col gap-1">
          <label>Password:</label>
          <input
            type="password"
            className="px-2 py-1 rounded-md bg-stone-100 text-stone-800"
            ref={password}
          />
        </div>

        <button
          className="px-4 py-1 bg-teal-500 rounded-md mt-4"
          disabled={loading}
        >
          Login
        </button>
        <p>
          You don't have an account?{" "}
          <span>
            <Link to={"/login"}>Sign up!</Link>
          </span>
        </p>
        <ToastContainer theme="dark" />
      </form>
    </div>
  );
};

export default Login;
