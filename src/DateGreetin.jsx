import React from 'react'

let curDate = new Date(2023,5,5,14)
curDate = curDate.getHours();
const cssStyle = {};


let greeting="";

if(curDate>=1 && curDate <12)
{
  greeting = "Good Morning";
  cssStyle.color = "green";

}else if(curDate >=12 && curDate <19)
{
   greeting ="Good Afternoon";
   cssStyle.color = "Orange";
}else
{
 greeting = "Good Night";
 cssStyle.color = "Black";
}

function DateGreetin() {
  return (
    <div>
         
      <h1>Hello Sir, <span style={cssStyle}>{greeting}</span></h1>
      
    </div>
  )
}

export default DateGreetin