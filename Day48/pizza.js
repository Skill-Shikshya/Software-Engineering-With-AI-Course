import { EventEmitter } from 'node:events';
const myEmitter = new EventEmitter();
const ready = false

// const promise = new Promise((res,rej)=>{
//  if(re
// })

myEmitter.on('pizzaOrder', (name) => {
  let time = 0
  console.log(`Pizza ordered: ${name} Pizza!`);
  if(name == "cheese"){
     time = 1000
  }else if(name == "chicken"){
     time = 4000
  }else{
     time = 1500
  }

  myEmitter.emit("pizzaCooking", name, time)
});

myEmitter.on('pizzaCooking', (name, time) => {
  console.log(`the ${name} pizza is cooking`);
  setTimeout(()=> myEmitter.emit("pizzaPacking",name), time);
});

myEmitter.on('pizzaPacking', (name) => {
  console.log(`${name} Pizza is in packaging`);

  setTimeout(()=> myEmitter.emit("pizzaDelivering"), 2000);
});

myEmitter.on('pizzaDelivering', (name) => {
  console.log(`Pizza was successfully delivered!`);
});

myEmitter.emit('pizzaOrder', 'chicken'); 

