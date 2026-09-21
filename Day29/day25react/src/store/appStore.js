import { create } from "zustand";

const appStore = create((set) => ({
  count: 1,
  setCount: (num) =>
    set((state) => ({
      count: state.count + num,
    })),
}));

export default appStore;
