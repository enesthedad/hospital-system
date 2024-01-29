import { useState } from "react";
import { useAuthContext } from "./useAuthContext";
export const useLogin = () => {
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const { dispatch } = useAuthContext();
  const login = async (email, password) => {
    setError(null);
    setLoading(true);
    setSuccess(false);
    const response = await fetch("http://localhost:8000/user/login", {
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
  return { login, loading, error, success };
};
