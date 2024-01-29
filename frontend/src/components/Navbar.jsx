import React from "react";
import { Link } from "react-router-dom";
import { useLogout } from "../hooks/useLogout";
import { useAuthContext } from "../hooks/useAuthContext";
const Navbar = () => {
  const { user } = useAuthContext();
  const logout = useLogout();
  return (
    <nav>
      <div className="logo px-10 py-10 w-full flex justify-between bg-stone-900">
        <h1 className="font-bold text-3xl text-white">
          <Link to={"/"}>LOGO</Link>
        </h1>
        <div className="text-stone-400  font-semibold flex items-center gap-10">
          {user ? (
            <div className="flex gap-4 items-center">
              <p className="text-white">{user.email}</p>
              <button
                className="border-2 px-2 py-1 rounded-md border-teal-500"
                onClick={() => logout()}
              >
                Logout
              </button>
            </div>
          ) : (
            <>
              <Link
                className="hover:text-white hover:transition-all hover:duration-500 ease-in-out"
                to={"/login"}
              >
                Login
              </Link>
              <Link
                className="hover:text-white hover:transition-all hover:duration-500 ease-in-out"
                to={"/signup"}
              >
                Signup
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
