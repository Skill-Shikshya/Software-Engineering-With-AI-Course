import { useReducer } from "react";
import PostsForm from "@/forms/posts";
import { Button } from "@/components/ui/button";
import { Apple, Ham, Popcorn } from "lucide-react";

type fnType = (a: number, b: string) => number;

const changeTitle: fnType = (state, action) => {
  if (action == "one") {
    return state + 1;
  } else if (action == "two") {
    return state + 2;
  } else {
    return 0;
  }
};

function AddPosts() {
  const [state, caller] = useReducer(changeTitle, 0);
  return (
    <>
      <h1 className="text-3xl flex justify-center bg-amber-900 text-amber-50 py-20">
        This is to post posts: {state}
      </h1>
      <div style={{ display: "flex", gap: "10px", justifyContent: "center" }}>
        <Button variant="destructive" onClick={() => caller("one")}>
          <Ham />
        </Button>
        <Button
          variant="default"
          className="bg-red-500 hover:bg-amber-300"
          onClick={() => caller("two")}
        >
          <Apple />
        </Button>
        <Button variant="outline" onClick={() => caller("non")}>
          <Popcorn />
        </Button>
      </div>
      <PostsForm />
    </>
  );
}

export default AddPosts;
