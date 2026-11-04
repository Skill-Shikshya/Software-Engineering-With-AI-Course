import React from "react";

type paramsType = Promise<{ slug: string }>;
type searchParamsType = Promise<{
  [key: string]: string | string[] | undefined;
}>;

async function page({
  params,
  searchParams,
}: {
  params: paramsType;
  searchParams: searchParamsType;
}) {
  const param = await params;
  const searchparam = await searchParams;
  console.log("Params:", param);
  console.log("SearchParams:", searchparam);
  // const SinglePosts = await fetch(
  //   `https://jsonplaceholder.typicode.com/posts/${param.slug}`,
  // ).then((response) => response.json());

  // console.log("this is the single Post", SinglePosts);
  return (
    <>
    
    </>
  );
}

export default page;
