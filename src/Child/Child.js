import React from 'react'

function Child(props) {
    // const {data,data2}=props
  return (
    <div>
        <h1> Child Component </h1>
      <button onClick={props.data}>Click me</button>
      <button onClick={props.data2}>Click </button>
    </div>
  )
}

export default Child

// import React from 'react';

// function Counter(props) {
//   const { count, increment, decrement } = props;

//   return (
//     <div>
//       <h2>Count: {count}</h2>
//       <button onClick={increment}>Increment</button>
//       <button onClick={decrement}>Decrement</button>
//     </div>
//   );
// }