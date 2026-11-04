import { Suspense } from "react";

function page() {
  return (
    <>
      <Suspense fallback={<>LODING...</>}>
        <SendHelloProducts />
      </Suspense>
    </>
  );
}

export default page;

async function SendHelloProducts() {
  const waitingPromise = new Promise((res) =>
    setTimeout(() => res("Okay"), 1000),
  );
  const wait = (await waitingPromise) as string;

  return (
    <>
      {/* <h2>The Users page</h2> */}
      <h1>This is the products page {wait}</h1>
      {/* <h2>the items page</h2> */}
    </>
  );
}
