// import React from 'react'
// import ReactDOM from 'react-dom'

// ReactDOM.render(
//     <>
//       <h1>Thapa Technical Netflix Pick</h1>
//       <p>Here the list of my fav 5 netflix series</p>
      
//       <ol>
//         <li>Dark</li>
//         <li>Extra curricular</li>
//         <li>My Holo Love</li>
//         <li>My First-2 love</li>
//         <li>My Robot</li>
//       </ol>
//     </>,
//     document.getElementById("root")
// );

// jsx expression
// import React from 'react'
// import  ReactDOM  from 'react-dom'

// const name = 'Danish';
// ReactDOM.render(
//   <>
//   <h1 >My Name is {name} </h1>
//   <p>my lucky number is {3+3}</p>
//   <p>my lucky number is {Math.random()}</p>
//   </>,
//   document.getElementById("root")
// );

// challange 3

import React from 'react'
import ReactDOM  from 'react-dom';
import DateGreetin from './DateGreetin';
import App from './App';
import Hooks from './Hooks';
import GetCurrentTime from './GetCurrentTime';
import DigitalWatch from './DigitalWatch';
import ClickMethod from './ClickMethod';


ReactDOM.render(

    <React.StrictMode>


        {/* <App/> */}
        {/* <DateGreetin/> */}
        {/* <Hooks/> */}
        {/* <GetCurrentTime/> */}
        {/* <DigitalWatch/> */}
        
        <ClickMethod/>
        
    </React.StrictMode>,
     
  document.getElementById("root")
);


