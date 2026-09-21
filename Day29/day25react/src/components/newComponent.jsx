import React from "react";
import AdditionalComponent from "./additionalComponent.jsx";

function NewComponent({ name, description, sayHello, children }) {
  const [count, setCount] = React.useState(0);

  const handleClick = () => {
    setCount(count + 1);
  };

  console.log("this is children", children);

  return (
    <div>
      {/* <h2>{name}</h2>
      <p>{description}</p> */}
      <AdditionalComponent name={name} desc={description} />
      <button onClick={sayHello}>Say Hello</button>
      <button onClick={handleClick}>Increment</button>
      <p>Count: {count}</p>

      {children}
    </div>
  );
}

export default NewComponent;
