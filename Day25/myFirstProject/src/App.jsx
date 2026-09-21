import { useState } from "react";
import { useForm } from "react-hook-form";
import { R } from "./component/controlledFrom";
import z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

// const output = schema.safeParse({
//   name: "abcde",
//   age: "15",
//   status: null,
//   password: "accd",
//   confirmPassword: "accd",
// });

// console.log(output);
// if (output.success) {
//   console.log("output", output.data);
// } else {
//   console.log("err", output.error.issues);
// }

const schema = z.object({
  name: z.string().min(5, "needs to the min 5 char"),
  age: z.coerce
    .number()
    .min(1, "should be greater than 1")
    .max(100, "should be less than 100"),
  // status: z.enum(["active", "inactive"]).nullable(),
  // email: z.email().optional(),
  // password: z.string().min(3),
  // confirmPassword: z.string().min(3),
});
// .refine((data) => data.password === data.confirmPassword, {
//   error: "password didn't match",
// });

function App() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isValid },
  } = useForm({
    resolver: zodResolver(schema),
    mode: "onBlur",
  });

  console.log(isValid);

  console.log(errors);
  const SubmitData = (data) => {
    console.log("Form submitted with", data);
  };

  

  return (
    <>
      <form onSubmit={handleSubmit(SubmitData)}>
        <div>
          <label>
            Name
            <R />
          </label>
          <input type="text" {...register("name")} />
          {errors?.name ? (
            <p style={{ color: "red" }}>{errors.name?.message}</p>
          ) : null}
        </div>

        <div>
          <label>
            age
            <R />
          </label>
          <input type="number" {...register("age")} />
          {errors?.age ? (
            <p style={{ color: "red" }}>{errors.age?.message}</p>
          ) : null}
        </div>
        <input
          style={
            isValid ? { backgroundColor: "green" } : { backgroundColor: "red" }
          }
          type="submit"
        />
      </form>
    </>
  );
}

export default App;
