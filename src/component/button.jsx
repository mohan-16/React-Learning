 import React from "react";


// const Style={
//    backgroundColor='red'
// }

function Button( { label="primary", color,border="2px solid blue"}) {

  return (
    <spam>
     <button style={{margin:'100px 10px 0px 10px ',background:"white", color:color, 
      padding : '12px' , border:border, fontSize:'15px',borderRadius:'8px'}}> {label} </button>
     </spam>
  );
  
}

export {Button}