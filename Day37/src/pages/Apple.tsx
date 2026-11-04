import useUpdateSearchParams from "../hook/UpdateSearchParams";
import Header from "../CustomComponent/Header";

function Apple() {
  const { updatter } = useUpdateSearchParams();
  return (
    <>
      <Header />
      <div className="mx-50 text-2xl">Apple</div>
      <input type="text" onChange={(e) => updatter("apple", e.target.value)} />
    </>
  );
}

export default Apple;
