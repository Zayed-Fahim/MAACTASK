import React from "react";
import "../../CSS/RegisterButton.css";
import "../../CSS/DownloadButton.css";

const Button = ({ type, text, buttonClassNames }) => {
  return (
    <button className={buttonClassNames} type={type}>
      {text}
    </button>
  );
};

export default Button;
