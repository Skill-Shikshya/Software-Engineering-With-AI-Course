import { create } from "zustand";
const useStore = create((set, get) => ({
  data: {
    name: "",
    gender: "",
    age: "",
    phone: "",
    email: "",
    address: "",
  },
  

  validation: {
    name: "",
    gender: "",
    age: "",
    phone: "",
    email: "",
    addresss: "",
  },

  updatedData: (newData) => {
    set((state) => ({
      data: {
        ...state.data,
        ...newData,
      },
    }));
  },

  validateData: async () => {
    await new Promise((res, rej) =>
      setTimeout(() => {
        console.log("okay");
        res("okay");
      }, 2000),
    );
    const userData = Object.entries(get().data);
    const emptyData = userData.filter((e) => e[1] == "");
    console.log("the empty one", emptyData);
    emptyData.forEach((e) =>
      set({
        validation: { ...get().validation, [e[0]]: `${e[0]} is required` },
      }),
    );
    console.log("the validation", get().validation);
  },
}));

export default useStore;
