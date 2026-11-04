import React from "react";
import PostsCard, { type PostType } from "@/_components/PostsCard";

async function RenderAllPosts() {
  const posts = await fetch(
    "https://jsonplaceholder.typicode.com/posts?_page=1&_limit=10",
  ).then((response) => response.json());
  
  return (
    <>
      {posts.map((pc: PostType) => (
        <PostsCard key={pc.id} {...pc} />
      ))}
    </>
  );
}

export default RenderAllPosts;
