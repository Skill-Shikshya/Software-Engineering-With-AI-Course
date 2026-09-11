let a = "string";
let b = 2;
let y = true;
let x = null;
let z = BigInt('1')
let v = undefined;
let m = Symbol('a')

let arr = [a,b,y,x,z,v,m];

for(let x of arr){
	console.log("Type is", typeof(x));
}
