import React from "react";
import { useState } from "react";
import logo from "../assets/img/logo.png";
import { Link } from "react-router-dom";
import useOnline from "../utils/useOnline";
const loggedInUser = () => {
  //API call to check authentication
};

const Title = () => {
  return (
    <a href="/">
      <img alt="logo" className="logo" src={logo} />
    </a>
  );
};
const Header = () => {
  const [title, setTitle] = useState("Foodies");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const isOnline = useOnline();
  return (
    <div className="header-container">
      <div className="header">
        <Title />
        <h1>{title}</h1>
        {/* <button onClick={()=>setTitle("New Food App")}>Change Title</button>   */}
        <div className="nav-items">
          <ul>
            <li>
              <Link to="/">HOME</Link>
            </li>
            <li>
              <Link to="/about">ABOUT</Link>
            </li>
            <li>
              <Link to="/contact">CONTACT</Link>
            </li>
            <li>
              <Link to="/instamart">INSTAMART</Link>
            </li>
            {/* <li>CART</li> */}
          </ul>
        </div>

        {/* {(loggedInUser()?<button>Logout</button>:<button>Login</button>)} */}
        {isLoggedIn ? (
          <button className="login-btn" onClick={() => setIsLoggedIn(false)}>
            LOGOUT{{ isOnline } ? "🔴" : "🟢" }
          </button>
        ) : (
          <button className="logout-btn" onClick={() => setIsLoggedIn(true)}>
            LOGIN{{ isOnline } ? "🟢" : "🔴"}
          </button>
        )}
      </div>
    </div>
  );
};

export default Header;
