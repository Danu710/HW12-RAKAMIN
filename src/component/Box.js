import React from "react";
import "./styles.box.css";

const Box = ({ value, onClick }) => {
  const style = value === "X" ? "box x" : "box o";

  return (
    <div className="rounded-lg bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500">
      <button className={style} onClick={onClick}>
        {value}
      </button>
    </div>
  );
};

export default Box;
