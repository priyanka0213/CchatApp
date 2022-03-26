import React from "react";
import "./Message.css";
function Message({ user, message, classs }) {
  console.log(user, classs, "lalalalalal");
  if (user) {
    return (
      <div className={`messageBox ${classs}`}>{`${user}: ${message}`}</div>
    );
  } else {
    return <div className={`messageBox ${classs}`}>{`You: ${message}`}</div>;
  }
}

export default Message;
