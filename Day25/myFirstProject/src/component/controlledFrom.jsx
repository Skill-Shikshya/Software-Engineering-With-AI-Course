import React from "react";
import { useStore } from "zustand";

export function R() {
  console.log("R is prining again");
  return <span style={{ color: "red" }}>*</span>;
}

function controlledFrom() {
  // const { data, updatedData } = useStore();
  const data = useStore((state) => state.data);

  // console.log("FROM APP", data);

  const SubmitData = (e) => {
    e.preventDefault();
    console.log("I will send the data now", data);
    validateData();
    //if true
    //api fetch
    //false
    //toast validate
  };

  return (
    <>
      <form onSubmit={SubmitData}>
        <div style={{ backgroundColor: "red" }}>
          <label>
            Name
            <R />
          </label>
          <input
            type="text"
            name="name"
            value={data.name}
            required
            onChange={(e) => updatedData({ name: e.target.value })}
          />
          {data.name !== "" ? <p style={{ color: "red" }}>required</p> : null}
        </div>
        <div>
          <label>
            age
            <R />
          </label>
          <input
            style={{ display: "block" }}
            type="text"
            name="age"
            value={data.age}
            required
            onChange={(e) => updatedData({ age: e.target.value })}
          />
          {data.age?.length ? (
            <p style={{ color: "red" }}>age is required</p>
          ) : null}
        </div>
        <input style={{ display: "block" }} type="submit" />
      </form>
    </>
  );
}

export default controlledFrom;
