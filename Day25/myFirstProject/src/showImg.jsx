// import heroImg from "./assets/hero.png";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "./assets/vite.svg";
// import { obj } from "./newone.js";
import React from "react";

function ShowImg({ name = "GUEST", heroImg, reactLogo, viteLogo }) {
  return (
    <div className="hero">
      <h1>helle {name}</h1>
      <img src={heroImg} className="base" width="170" height="179" alt="" />
      <img src={reactLogo} className="framework" alt="React logo" />
      <img src={viteLogo} className="vite" alt="Vite logo" />
    </div>
  );
}

export default ShowImg;

function Button() {
  console.log("hello this is btn", obj.name);
  return React.createElement(
    "h1",
    { id: "btn", className: "newH1" },
    `hello ${obj.name}`,
  );
}

export const obj2 = { a: ShowImg, b: Button };
