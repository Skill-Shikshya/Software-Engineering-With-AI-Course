import Link from "next/link";
import React from "react";

export interface PostType {
  id: number;
  title: string;
  body: string;
}
function PostsCard({ id, title, body }: PostType) {
  console.log("the props", id);
  return (
    <div className="bg-gray-300 text-black rounded-lg p-5 max-w-lg  ">
      <h1>Title: {title} </h1>
      <p>{body}</p>
      <Link className="text-blue-900" href={`/blogs/${id}`}>
        See more
      </Link>
    </div>
  );
}

export default PostsCard;
