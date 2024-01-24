import React, { useState } from 'react'

function GetCurrentTime() {

    const state = useState();
      const [CurrentTimeis , setTime] = useState(Date());

  const CurrentTime = ()=>
  {
      setTime(Date());
  }

  return (
    <div>
    <h1>{CurrentTimeis}</h1>
    <button onClick={CurrentTime}>GETTIME</button>
    </div>
  )
}

export default GetCurrentTime