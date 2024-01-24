import React, { useState } from 'react'

function ClickMethod() {
    let [name, setName] = useState();
    let [fullName,setFullName] = useState();

     const inputEvent=(event)=>{
          console.log(event.target.value)
          setName(event.target.value)
     }
     const onSubmit = ()=>{
        setFullName(name);
     }

  return (
    <div>
        <h1>I am {fullName} </h1>
        <input type='text' placeholder='Enter Your Name'
         onChange={inputEvent}
         value={name}
        />
        <button onClick={onSubmit}>Click Me</button>
    </div>
  )
}

export default ClickMethod