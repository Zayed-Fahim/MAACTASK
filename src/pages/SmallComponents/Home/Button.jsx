import React from "react";
import "../../../CSS/RegisterButton.css";
import "../../../CSS/DownloadButton.css";

const Button = ({ type, text, buttonClassNames, onClick }) => {
  return (
    <button className={buttonClassNames} type={type} onClick={onClick}>
      {text}
    </button>
  );
};

export default Button;
