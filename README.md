# React + Vite

## Promise In Javascript

> Promises in JavaScript are objects representing the eventual completion or failure of an asynchronous operation. They provide a cleaner and more manageable way to deal with asynchronous code compared to using callbacks directly. Promises have three states: pending, fulfilled, or rejected.

> Key Concepts:

States: A promise can be in one of three states:

Pending: The operation is still ongoing.

Fulfilled: The operation completed successfully, and the promise has a value.

Rejected: The operation failed, and the promise has an error reason.

Resolution: Once an operation finishes, the promise is resolved, meaning it transitions to either the fulfilled or rejected state. This is done by calling either the resolve or reject function provided when the promise is created.

Chaining: You can chain multiple asynchronous operations together using promise methods like .then() and .catch(). Each .then() method receives a callback that takes the fulfilled value of the previous promise, and returns a new promise or value. .catch() handles any rejection within the chain.

Asynchronous/Await: The async/await syntax provides a more synchronous-like way to work with promises, making the code easier to read and write.

> Advatages of Promises

Improved code readability: Chaining promises helps organize asynchronous code more clearly.

Error handling: .catch() ensures errors are handled appropriately.

Composition: Easy to compose asynchronous operations together.

Callback hell avoidance: Promises prevent the nesting of callbacks, leading to cleaner code.

>Used Cases of Promises

Fetching data from APIs: Promises are well-suited for asynchronous data retrieval.

Performing multiple async operations sequentially: Chain promises to execute operations in a specific order.

Handling user interactions: Manage asynchronous events like button clicks or form submissions.