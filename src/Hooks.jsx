import React, { useState } from 'react'



function Hooks() {

  const state = useState();

  const [count, setCount] = useState(2);

let IncNum  = ()=>
{

  setCount(count+1);

//  console.log('clicked'+count++);
 
};
  return (
    <>
    <h1>{count}</h1>
    <button onClick={IncNum}>Click me</button>
    </>
  )
}

export default Hooks