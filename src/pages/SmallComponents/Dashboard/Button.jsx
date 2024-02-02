import React from "react";

const Button = ({ buttonClassNames, text, type, onClick }) => {
  return (
    <button className={buttonClassNames} type={type} onClick={onClick}>
      {text}
    </button>
  );
};

export default Button;
