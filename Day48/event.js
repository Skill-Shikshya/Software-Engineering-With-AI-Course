import { EventEmitter } from 'node:events');
const myEmitter = new EventEmitter();
myEmitter.on('pizza', (name) => {
  console.log(`I want to eat ${name} Pizza!`);
});

myEmitter.emit('pizza', 'Alice'); 

