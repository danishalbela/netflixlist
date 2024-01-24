import React, { useState } from 'react'

function DigitalWatch() {
    let time = new Date().toLocaleTimeString();
    const [ctime, setCtime] = useState(time);

    const upDateTime = ()=> {
        time = new Date().toLocaleTimeString();
        setCtime(time);
    }
    setInterval(upDateTime,1000);

  return (
    <div>
        <h1>Digital Clock</h1>
        <h1>{ctime}</h1>
        <br/>
        {/* <button onClick={upDateTime}>Get Time</button> */}
    </div>
  )
}

export default DigitalWatch