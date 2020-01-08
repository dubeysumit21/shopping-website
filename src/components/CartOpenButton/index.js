import React from 'react';
import './styles.css';

const CartOpenButton = (props) => {
    return (
      <div>
        <button class="CartButton" onClick={props.clicked}>Cart</button>
      </div>
    )
}

export default CartOpenButton;