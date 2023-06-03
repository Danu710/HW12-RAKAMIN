import React, { useContext } from "react";
import PropsContext from "../PropsContext";

const ResetButton = () => {
  const props = useContext(PropsContext);
  return (
    <button className="" onClick={props.restart}>
      ResetButton
    </button>
  );
};

export default ResetButton;
