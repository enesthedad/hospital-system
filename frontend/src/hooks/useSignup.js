import React, { useState } from "react";
import { useAuthContext } from "./useAuthContext";

export const useSignup = () => {
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const { dispatch } = useAuthContext();
  const signUp = async (email, password) => {
    setLoading(true);
    setSuccess(false);
    setError(null);
    const response = await fetch("http://localhost:8000/user/signup", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ email, password }),
    });
    const json = await response.json();
    if (!response.ok) {
      setError(json.error);
      return json.error;
    }
    if (response.ok) {
      setError(null);
      setSuccess(true);
      //   SAVING TO LOCAL STORAGE
      localStorage.setItem("user", JSON.stringify(json));
      dispatch({ type: "LOGIN", payload: json });
    }
    setLoading(false);
  };
  return { signUp, loading, error, success };
};

export default useSignup;
