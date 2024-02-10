import React from 'react'

const Promise1 = () => {

    // Simulated function to fetch data from a server
function fetchDataFromServer() {
    return new Promise((resolve, reject) => {
        // Simulating an asynchronous operation with setTimeout
        setTimeout(() => {
            const data = { id: 1, name: 'John Doe', age: 30 };
            // Simulating successful data retrieval
            resolve(data);
            // Simulating an error
            // reject('Failed to fetch data from server');
        }, 2000); // Simulating a delay of 2 seconds
    });
}

// Consuming the promise
fetchDataFromServer()
    .then((data) => {
        console.log('Data fetched successfully:', data);
    })
    .catch((error) => {
        console.error('Error fetching data:', error);
    });


  return (
    <div>
      <h1 style={{background:'red'}}>Promise 1</h1>
    </div>
  )
}

export default Promise1
