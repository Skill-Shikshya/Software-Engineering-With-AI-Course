import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useMutation } from "@tanstack/react-query";
import { ToastContainer, toast } from "react-toastify";
import z from "zod";

const schema = z.object({
  title: z.string().min(5, "can't be less than 5 char"),
  body: z.string().min(10, "can't be less than 10 char"),
});

type PostAddData = z.infer<typeof schema>;

function PostsForm() {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    resolver: zodResolver(schema),
  });

  const { mutate: SubmitForm, isPending } = useMutation({
    mutationFn: async (data: PostAddData) => {
      const fetchedData = await fetch(
        "https://jsonplaceholder.typicode.com/posts",
        {
          method: "POST",
          body: JSON.stringify(data),
          headers: {
            "Content-type": "application/json; charset=UTF-8",
          },
        },
      );
      const wait = new Promise((res) => setTimeout(() => res("done"), 3000));
      const reswas = await wait;
      console.log(reswas);
      const actualData = fetchedData.json();
      return actualData;
    },
    onError: (err) => {
      console.log("laa ERR to aaya xata", err);
      toast.error("SOME ERR");
    },
    onSuccess: (data) => {
      console.log("La hai data ta successfully add vo");
      console.log("success", data);
      toast.success("From submitted successfully!");
    },
  });

  const SubmitData = (data: PostAddData) => {
    SubmitForm(data);
  };

  console.log("this is errors", errors);

  return (
    <>
      <form onSubmit={handleSubmit(SubmitData)}>
        <div>
          <label>title</label>
          <input {...register("title", { required: "this is required" })} />
          {errors?.title?.message && (
            <span style={{ color: "red" }}>
              {errors?.title?.message as string}
            </span>
          )}
        </div>
        <div>
          <label>Content</label>
          <input {...register("body")} />
          {errors?.body?.message && (
            <span style={{ color: "red" }}>
              {errors?.body?.message as string}
            </span>
          )}
        </div>
        <input disabled={isPending} type="submit" />
      </form>
      <ToastContainer />
    </>
  );
}

export default PostsForm;
