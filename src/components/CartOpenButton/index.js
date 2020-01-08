import React from 'react';
import './styles.css';
import shopping from '../../assets/shopping-cart.png';

const CartOpenButton = (props) => {
    return (
      <div>
        <button class="CartButton" onClick={props.clicked}>
            <div style={{ paddingTop: 6 }}>
                <img style={{width: 45, height: 45}} src={shopping} alt="unloaded"/>
                <p class="cartItemCounter">
                    {props.itemCount}
                </p>
            </div>
        </button>
      </div>
    )
}

export default CartOpenButton;