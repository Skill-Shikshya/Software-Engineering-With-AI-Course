import AppContext from "./context";
import React from "react";

const Input = () => {
  const { searchTerm, setSearchTerm } = React.useContext(AppContext);
  return (
    <input
      type="text"
      value={searchTerm}
      placeholder="Search products..."
      onChange={(e) => setSearchTerm(e.target.value)}
    />
  );
};

export default Input;
