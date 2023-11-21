import React, { useContext, useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

function Header() {
  const [loginStatus, setLoginStatus] = useState("Login");

  const onlineStatus = useOnlineStatus();

  const { loggedInUser } = useContext(UserContext);

  const cartItems = useSelector((store) => store.cart.items);

  return (
    <div className="flex justify-between bg-pink-100 lg:bg-green-50 sm:bg-yellow-50 shadow-xl">
      <div className="logo">
        <img className="w-44 h-28 object-cover" src={LOGO_URL} />
      </div>

      <div className="flex items-center">
        <ul className="flex p-4 m-4">
          <li className="px-4">{onlineStatus ? "🟢online" : "🔴offline"}</li>
          <li className="px-4">
            <Link to="/">Home</Link>
          </li>
          <li className="px-4">
            <Link to="/about">About</Link>
          </li>
          <li className="px-4">
            <Link to="/contact">Contact Us</Link>
          </li>
          <li className="px-4">
            <Link to="/grocery">Grocery</Link>
          </li>
          <li className="px-4">
            <Link to="/cart">
              Cart {cartItems.length > 0 && <span>({cartItems.length})</span>}
            </Link>
          </li>
          <li className="px-4">
            <button
              onClick={() => {
                loginStatus === "Login"
                  ? setLoginStatus("Logout")
                  : setLoginStatus("Login");
              }}
            >
              {loginStatus}
            </button>
          </li>
          {loginStatus === "Logout" && <li className="px-4">{loggedInUser}</li>}
        </ul>
      </div>
    </div>
  );
}

export default Header;
