import React from 'react';
import './styles.css';
import shopping from '../../assets/cart.png';

const CartOpenButton = (props) => {
    return (
      <div>
        <button class="CartButton" onClick={props.clicked}>
            <div style={{ paddingTop: 10 }}>
                <img style={{width: 30, height: 25}} src={shopping} alt="unloaded"/>
                <p style={{ color: 'white', fontSize: 10, marginTop: 0 }}>CART</p>
                {/* <p class="cartItemCounter">
                    {props.itemCount}
                </p> */}
            </div>
        </button>
      </div>
    )
}

export default CartOpenButton;