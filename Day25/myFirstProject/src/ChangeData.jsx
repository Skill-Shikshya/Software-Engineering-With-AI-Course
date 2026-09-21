import React from "react";

function ChangeData() {
  const obj = {
    name: "Ram",
    age: 7000,
    address: {},
  };
  const [person, setPerson] = useState(obj);

  let nePerson = obj;
  nePerson = { name: "someName" };
  console.log("new person", nePerson.age);

  const updateName = () => {
    const getName = prompt("Hey what is your name");
    console.log("");
    setPerson((prev) => {
      return { ...prev, name: getName };
    });
  };

  const updateAge = () => {
    const getAge = prompt("Hey what is your age");
    setPerson((prev) => {
      return { age: getAge };
    });
  };

  const updateName_Age = () => {
    const getName = prompt("Hey what is your name");
    const getAge = prompt("Hey what is your age");
    setPerson((prev) => {
      return { name: getName, age: getAge };
    });
  };

  return (
    <>
      <section id="center">
        <p
          style={{
            fontSize: "32px",
            border: "1px solid red",
            padding: "10px 20px",
          }}
        >
          {person.name || "undefined"}
        </p>
        <p
          style={{
            fontSize: "32px",
            border: "1px solid red",
            padding: "10px 20px",
          }}
        >
          {person.age || "undefined"}
        </p>

        <button type="button" className="counter" onClick={updateName}>
          Update name
        </button>

        <button type="button" className="counter" onClick={updateAge}>
          Update age
        </button>

        <button type="button" className="counter" onClick={updateName_Age}>
          Update age & age
        </button>
      </section>
    </>
  );
}

export default ChangeData;
