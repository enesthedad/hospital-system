import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="h-screen w-full flex justify-center items-center">
      <form
        action="submit"
        className="flex flex-col justify-center items-start gap-4"
      >
        <div className="flex flex-col gap-2 w-full">
          <label className="px-2" htmlFor="email">
            Email
          </label>
          <input
            className="p-2 rounded-md"
            type="email"
            placeholder="email"
            id="email"
          />
        </div>
        <div className="flex flex-col gap-2 w-full">
          <label className="px-2" htmlFor="password">
            Password
          </label>
          <input
            className="p-2 rounded-md"
            type="password"
            placeholder="password"
            id="password"
          />
        </div>
        <button type="submit" className="w-full bg-emerald-500 p-2">
          Login
        </button>
        <p>
          You don't have an account?
          <span className="text-white px-2">
            <Link to={"/"}>Signup</Link>
          </span>
        </p>
      </form>
    </div>
  );
};

export default Login;
