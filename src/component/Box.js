import React from "react";
import "./Box.css";
//import styles from "./styles.module.css";

const Box = ({ value, onClick }) => {
  const style = value === "X" ? "box x" : "box o";

  return (
    <div className="">
      <button className={style} onClick={onClick}>
        {value}
      </button>
    </div>
  );
};

export default Box;
