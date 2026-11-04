import { useForm } from "react-hook-form";
import z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect } from "react";

const schema = z.object({
  name: z.string().min(5, "Min 5 characters"),
  age: z.coerce.number().min(1).max(100),
});

export default function App() {
  const { register, handleSubmit, reset } = useForm({
    resolver: zodResolver(schema),
    defaultValues: { name: "jjojoj", age: "21" },
  });

  const onSubmit = (data) => {
    console.log("Submitted", data);
    // localStorage.setItem("formData", JSON.stringify(data));
    // reset();
  };

  // useEffect(() => {
  //   const JSONdata = localStorage.getItem("formData");
  //   const data = JSON.parse(JSONdata);
  //   reset({
  //     name: data.name,
  //     age: data.age,
  //   });
  // }, []);

  return (
    <div style={{ padding: 20 }}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label>Name: </label>
          <input
            type="text"
            name="name"
            style={{ color: "white", backgroundColor: "#2a2a2a" }}
            {...register("name")}
          />
        </div>
        <br />
        <div>
          <label>Age: </label>
          <input
            type="number"
            name="age"
            style={{ color: "white", backgroundColor: "#2a2a2a" }}
            {...register("age")}
          />
        </div>
        <br />
        <button type="submit">Submit</button>
        <button onClick={() => reset({ name: "bibek", age: 26 })}>
          Reset Form
        </button>
      </form>
    </div>
  );
}
