import { useSearchParams } from "react-router";

function useUpdateSearchParams() {
  //const [_, setSearch] = useSearchParams();
  const [search, setSearch] = useSearchParams();

  const updatter = (key: string, value?: string) => {
    setSearch((prev) => {
      const query = new URLSearchParams(prev);
      if (key && value) {
        query.set(key, value);
      } else if (key) {
        query.delete(key);
      }
      return query;
    });
  };

  console.log(Array.from(search.entries()));

  const clearAll = () => {
    setSearch({});
  };

  // console.log(search.get("search"));

  // return updatter;
  return { search, updatter, clearAll };
}

export default useUpdateSearchParams;
