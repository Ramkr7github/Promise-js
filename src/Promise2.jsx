import React from 'react'

const Promise2 = () => {

      // Creating a promise
const myPromise = new Promise((resolve, reject) => {
    // Asynchronous operation (e.g., fetching data from an API)
    setTimeout(() => {
      const randomNumber = Math.random();
      if (randomNumber > 0.5) {
        resolve(randomNumber); // Resolve with a value
      } else {
        console.log(randomNumber)
        reject(new Error('Random number is too low')); // Reject with an error
      }
    }, 1000);
  });
  
  // Consuming the promise
  myPromise
    .then((result) => {
      console.log('Success:', result);
    })
    .catch((error) => {
      console.error('Error:', error);
    });

  return (
    <div>
       <h1 style={{background:'Blue'}}>Promise 2</h1>
    </div>
  )
}

export default Promise2
