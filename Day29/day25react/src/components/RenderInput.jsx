import React, { useContext } from "react";
import AppContext from "./context";

function RenderInput({ text }) {
  const inputState = useContext(AppContext);
  console.log("this is inside reder", inputState);
  return (
    <div
      style={{
        backgroundColor: "lightgray",
        padding: "10px",
        fontSize: "30px",
      }}
    >
      RenderInput: {text}
    </div>
  );
}

export default RenderInput;
