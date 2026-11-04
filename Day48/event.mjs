import { EventEmitter } from 'node:events';
const myEmitter = new EventEmitter();

myEmitter.on('pizza', (name, price) => {
  console.log(`I want to eat ${name} Pizza! cost: ${price}`);
});

myEmitter.emit('pizza', 'Alice', 10); 

