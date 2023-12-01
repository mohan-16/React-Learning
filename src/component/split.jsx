import React from "react";
import "../component/split.css";

function Split() {
  return (
    <div className="Card">
      <div>
        <img
          className=" picture"
          src="https://rukminim2.flixcart.com/image/416/416/kg8avm80/mobile/y/7/n/apple-iphone-12-dummyapplefsn-original-imafwg8dpyjvgg3j.jpeg?q=70"
          alt="iphone"
        />
       <div className="join"> <input type="checkbox"/>
        <h6>Add to compare</h6></div>
       </div>
      <div><h2>APPLE iPhone 15 (Blue, 128 GB)</h2>
    
     <h5> 4.61,687 Ratings & 153 Reviews</h5>
      <ul>
        <h5>
     <li> 128 GB ROM</li>
     
     <li> 15.49 cm (6.1 inch) Super Retina XDR Display</li>
    
     <li> 48MP + 12MP | 12MP Front Camera</li>
      
     <li>A16 Bionic Chip, 6 Core Processor Processor</li>
      
     <li> 1 Year Warranty for Phone and 6 Months Warranty for In-Box Accessories</li></h5>
      </ul>
     </div>
         <div>
       <h4> ₹79,900<br /></h4>  
          <h5>  Delivery by 11 PM, Tomorrow<br /></h5>
          </div>
    </div>
  );
}

export { Split };
