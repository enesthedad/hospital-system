import { useEffect, useRef } from "react";
import { useSignup } from "../hooks/useSignup";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
const Signup = () => {
  const emailRef = useRef("");
  const passwordRef = useRef("");

  const { signUp, error, isLoading, success } = useSignup();
  useEffect(() => {
    error && notify("error", `${error} 🔴`);
    success && notify("success", `User created successfully 🟢`);
  }, [error, success]);
  const handleSubmit = async (e) => {
    const emailValue = emailRef.current.value;
    const passwordValue = passwordRef.current.value;
    e.preventDefault();
    const res = await signUp(emailValue, passwordValue);
    console.log(res);
    if (!res) {
      emailRef.current.value = "";
      passwordRef.current.value = "";
    }
  };
  console.log(error);
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
          <h3 className="text-3xl mb-5 font-bold text-teal-500">Sign Up</h3>
        </div>
        <div className="flex flex-col gap-1">
          <label className="text-stone-300">Email address:</label>
          <input
            type="email"
            className="px-2 py-1 rounded-md bg-stone-100 text-stone-800"
            ref={emailRef}
          />
        </div>
        <div className="flex flex-col gap-1">
          <label>Password:</label>
          <input
            type="password"
            className="px-2 py-1 rounded-md bg-stone-100 text-stone-800"
            ref={passwordRef}
          />
        </div>

        <button
          className="px-4 py-1 bg-teal-500 rounded-md mt-4"
          disabled={isLoading}
        >
          Sign up
        </button>
        <p>
          You have an account?{" "}
          <span>
            <Link to={"/login"}>Log in</Link>
          </span>
        </p>
        {error && <div className="error">{error}</div>}
        <ToastContainer theme="dark" />
      </form>
    </div>
  );
};

export default Signup;
