//Create a react app from scratch.
//It should display 2 paragraph HTML elements.
//The paragraphs should say:
//Created by YOURNAME.
//Copyright CURRENTYEAR.
//E.g.
//Created by Angela Yu.
//Copyright 2019.

import React from "react";
import ReactDOM from "react-dom";

{
  /*My attempt:*/
}
const name = "Aisyah";
const year = new Date().getFullYear();

{
  /* Angela's currentDate method: 
- logs to console the current date
*/
}
const currentDate = new Date();
console.log(currentDate);
const year1 = currentDate.getFullYear();

ReactDOM.render(
  <div>
    <p>Created by {name}.</p>
    <p>Copyright {year}.</p>

    <p>Created by {name}.</p>
    <p>Copyright {year1}.</p>
  </div>,
  document.getElementById("root")
);
