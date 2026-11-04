import type { Posts } from "../schema/posts";

function Card({ data }: { data: Posts }) {
  return (
    <div style={{ backgroundColor: "blue" }}>
      <h1>{data.title}</h1>
      <p>{data.body}</p>
    </div>
  );
}

export default Card;
