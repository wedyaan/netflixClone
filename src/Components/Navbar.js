import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div>
      <div className="flex justify-between items-center p-4 z-[100] w-full absolute">
        <div>
          <Link to="/">
            <h1 className="text-[#E50914] text-3xl">NETFLIX</h1>
          </Link>
        </div>

        <div>
          <Link to="login" className="text-white pr-4 hover:text-red-600">
            SignIn
          </Link>

          <Link to="signUp">
            <button className="bg-red-600 px-6 py-2 rounded text-white cursor-pointer">
              SignUp
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
