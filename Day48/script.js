
const { EventEmitter } = require('node:events');
const myEmitter = new EventEmitter();

// 1. Register a listener for the 'greet' event
myEmitter.on('greet', (name) => {
  console.log(`Hello, ${name}!`);
});

// 2. Emit the event and pass data
myEmitter.emit('greet', 'Alice'); 
// Output: Hello, Alice!
