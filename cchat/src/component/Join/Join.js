import React, { useState } from "react";
import "./Join.css";
import { Link } from "react-router-dom";
import logo from "../../images/logo.png";
let user;
const Join = () => {
  const [name, setName] = useState("");
  const sendUser = () => {
    user = document.getElementById("joinInput").value;
    document.getElementById("joinInput").value = "";
  };
  console.log(name);
  return (
    <div className="JoinPage">
      <div className="JoinContainer">
        <img src={logo} alt="logo" />
        <h1>C CHAT</h1>
        <input
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter your name"
          type="text"
          id="joinInput"
        />
        <Link
          onClick={(event) => (name === "" ? event.preventDefault() : null)}
          to="/chat"
        >
          <button onClick={sendUser} className="joinBtn">
            Login in
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Join;
export { user };
