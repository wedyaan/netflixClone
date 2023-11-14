import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserAuth } from "../context/Authanti";

export default function Navbar() {
  const { user, logOut } = UserAuth();
  const nav = useNavigate();

  const handleLogOut = async () => {
    try {
      await logOut();
      nav("login");
    } catch (err) {
      console.log("error", err);
    }
  };

  return (
    <div>
      <div className="flex justify-between items-center p-4 z-[100] w-full absolute">
        <div>
          <Link to="/">
            <h1 className="text-[#E50914] text-3xl">NETFLIX</h1>
          </Link>
        </div>

        {user?.email ? (
          <div>
            <Link to="" className="text-white pr-4 hover:text-red-600">
              Account
            </Link>

            <button
              onClick={handleLogOut}
              className="bg-red-600 px-6 py-2 rounded text-white cursor-pointer"
            >
              LogOut
            </button>
          </div>
        ) : (
          <div>
            <Link to="login" className="text-white pr-4 hover:text-red-600">
              SignIn
            </Link>

            <Link to="https://github.com/wedyaan" target="_blank">
              <button className="bg-red-600 px-6 py-2 rounded text-white cursor-pointer">
                Github
              </button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
