import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <div className="logo px-4 py-10 bg-blue-300">
        <h1 className="font-bold text-3xl text-white">
          <Link to={"/"}>LOGO</Link>
        </h1>
      </div>
    </nav>
  );
};

export default Navbar;
