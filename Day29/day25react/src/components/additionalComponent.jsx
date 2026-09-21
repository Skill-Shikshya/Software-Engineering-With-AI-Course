import Input from "./Input";
import appStore from "../store/appStore";

function AdditionalComponent({ name, desc }) {
  const count = appStore((state) => state.count);
  const setCount = appStore((state) => state.setCount);
  // const { count, setCount } = appStore();
  console.log("this is count", count);

  return (
    <div>
      <h3>{name}</h3>
      <p>{desc}</p>
      <Input />
      <button onClick={() => setCount(2)}>click me: {count}</button>
    </div>
  );
}

export default AdditionalComponent;
