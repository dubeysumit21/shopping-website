import React from 'react';
import './styles.css';

const CartContent = (props) => {
  if(props.clicked){
    return (
    <div>
      <div class="cartContent">
        <div class="cartContentRight">
        <img class="right-img" src={props.items} alt="unloadedImage"></img>
        <div class="info">
          <p><strong>{props.itemName}</strong></p>
          <p>Quantity: <strong>{props.itemQuantity}</strong></p>
          <p>Total Price: ₹ <strong>{(props.itemCost)*(props.itemQuantity)}</strong></p>
          <button class="removeBtn" onClick={props.click1}>Remove</button>
        </div>
      </div>  
      </div>
    </div>
  )
 }
  else
   return null;
}

export default CartContent;