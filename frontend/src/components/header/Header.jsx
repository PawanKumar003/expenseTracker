import React from "react";
import logo from "../../assets/react.svg";
import { Link } from "react-router-dom";

function Header({ logout }) {
  const token = localStorage.getItem("token");
  return (
    <section className="w-full bg-red-500 h-9/10 py-4">
      <div className="container-fluid">
        <div className="flex items-center justify-between ml-2">
          <div className="">
            <img className="w-full h-full" src={logo} alt="logo" />
          </div>
          <ul className="flex">
            <li className="ml-5 text-lg cursor-pointer hover:bg-blue-500 hover:px-[5px] hover:text-white rounded-[5px]">
              Home
            </li>
            <li className="ml-5 text-lg cursor-pointer hover:bg-blue-500 hover:px-[5px] hover:text-white rounded-[5px]">
              Services
            </li>
            <li className="ml-5 text-lg cursor-pointer hover:bg-blue-500 hover:px-[5px] hover:text-white rounded-[5px]">
              Contact
            </li>
            {!token ? (
              <>
                <li className="ml-5 text-lg cursor-pointer hover:bg-blue-500 hover:px-[5px] hover:text-white rounded-[5px]">
                  <Link to="/login">Login</Link>
                </li>
                <li className="ml-5 text-lg cursor-pointer hover:bg-blue-500 hover:px-[5px] hover:text-white rounded-[5px]">
                  <Link to="/signup">Signup</Link>
                </li>
              </>
            ) : (
              <li
                className="ml-5 text-lg cursor-pointer hover:bg-blue-500 hover:px-[5px] hover:text-white rounded-[5px]"
                onClick={logout}
              >
                Logout
              </li>
            )}
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Header;
