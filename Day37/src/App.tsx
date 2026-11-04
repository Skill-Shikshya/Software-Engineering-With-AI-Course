import { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import "./App.css";
// import { useSearchParams } from "react-router";
import useUpdateSearchParams from "./hook/UpdateSearchParams";
import Header from "./CustomComponent/Header";
import Card from "./CustomComponent/Card";
import type { Posts } from "./schema/posts";

function App() {
  const { updatter, clearAll } = useUpdateSearchParams();
  const [count, setCount] = useState(0);
  // const [posts, setPosts] = useState();

  const { data: query } = useQuery({
    queryKey: ["posts"],
    queryFn: async () =>
      await fetch(
        "https://jsonplaceholder.typicode.com/posts?_page=1&_limit=10",
      )
        .then((data) => data.json())
        .then((data) => {
          return data;
        }),
  });

  console.log("data outside", query);

  // useEffect(() => {
  //   fetch("https://jsonplaceholder.typicode.com/posts")
  //     .then((data) => data.json())
  //     .then((data) => setPosts(data));
  // }, []);

  //console.log("the posts", posts);

  return (
    <>
      <Header />
      <h1>Hello world</h1>
      <input type="text" onChange={(e) => updatter("search", e.target.value)} />
      <input
        type="text"
        onChange={(e) => updatter("category", e.target.value)}
      />
      <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
        <button onClick={() => setCount((prev) => prev + 1)}>
          Counter: {count}
        </button>
        <button onClick={() => updatter("search")}>Clear search</button>
        <button onClick={() => clearAll()}>Clear All</button>
      </div>

      <div style={{ background: "gray" }}>
        {query?.map((e: Posts) => (
          <Card key={e.id} data={e} />
        ))}
      </div>
    </>
  );
}

export default App;
