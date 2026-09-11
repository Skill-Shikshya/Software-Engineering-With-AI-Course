//making an array

const MyArr = [1,2,3,4,5,6]
const Obj = {
   name: "computer",
   quanity: 1,
   is_new: true,
   spec: {
      ram: "16GB",
      storage: "512 GB"
   },
   customer: ["bibek", "rabin", "Manish"],
   start: () => console.log(`${this.name} is booting`)
}

const YourArr = MyArr;
YourArr.push(7);
console.log(MyArr);

const obj2 = Obj
obj2.name = "Lenovo"
console.log(Obj.name);
obj2.age = 44


const jj = YourArr.reduce((arg,data) => arg + data, 0);
console.log(jj);

