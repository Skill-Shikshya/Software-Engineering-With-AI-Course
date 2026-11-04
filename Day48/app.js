console.log('1. [Sync] Script Start');

// Macrotask (Timer)
setTimeout(() => {
  console.log('7. [Macrotask] setTimeout 1');
  
  process.nextTick(() => {
    console.log('8. [NextTick] inside setTimeout 1');
  });
}, 0);

// Macrotask (Check phase / setImmediate)
setImmediate(() => {
  console.log('9. [Macrotask] setImmediate');
});

setTimeout(() => {
  console.log('10. [Macrotask] setTimeout 2');
}, 1000);

// Microtask (Promise)
Promise.resolve().then(() => {
  console.log('4. [Microtask] Promise 1');
});

// Microtask (queueMicrotask)
queueMicrotask(() => {
  console.log('5. [Microtask] queueMicrotask');
});

// Node.js Next Tick
process.nextTick(() => {
  console.log('3. [NextTick] process.nextTick 1');
  
  // Nested NextTick
  process.nextTick(() => {
    console.log('3b. [NextTick] Nested inside nextTick 1');
  });
});

// Microtask (Promise 2)
Promise.resolve().then(() => {
  console.log('6. [Microtask] Promise 2');
});

console.log('2. [Sync] Script End');
