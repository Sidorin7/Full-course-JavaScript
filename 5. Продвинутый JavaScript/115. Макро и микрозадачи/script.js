setTimeout(() => console.log('timeout')); // acинхронно

Promise.resolve()
    .then(() => console.log('promise')); // acинхронно

queueMicrotask(() => console.log('wow'));

Promise.resolve()
    .then(() => console.log('promise_2')); // acинхронно

console.log('code');  // cинхронно

// () => {}
// microtasks: then/catch/finally/await
// render
// () => {}
// microtasks: then/catch/finally/await
// render
// () => {}
