import React from 'react';
import './styles.css';
import CartContent from '../CartContent/index';
import FinalCheckOut from '../FinalCheckOut/index';
import Close from '../../assets/white-close.png';
import EmptyBag from '../../assets/business.png';

class Cart extends React.Component {

  shouldComponentUpdate(nextProps) {
    const { clicked } = this.props;
    if (nextProps.clicked !== clicked) {
      return true;
    }
    return false;
  }

  render() {
    const { closeCart } = this.props;
    let x = 0;
    const updatedCart = [];
    const cartContent = this.props.cartItem;
    cartContent.sort(function (a, b) {
      return (Number(a.id) - Number(b.id))
    });
    for (let i = 0; i < cartContent.length; i++) {
      if (cartContent[i].id !== x) {
        updatedCart.push(cartContent[i]);
        x = cartContent[i].id;
      }
    }
    const cartContents = updatedCart.map((x, index) => <CartContent clicked={this.props.clicked} items={x.img} itemName={x.name} itemCost={x.price} itemQuantity={x.quantity} click1={() => this.props.click2(x.id)} />)
    let finalCheckout = '';
    if (updatedCart.length > 0) {
      finalCheckout = (
        <div>
          <FinalCheckOut item={updatedCart} />
          <div class="checkout-btn" onClick={() => { alert('Order Placed Successfully!') }}><button class="btn">PROCEED TO CHECKOUT</button></div>
        </div>
      );
    }
    else
      finalCheckout = (
        <div class="emptyCartConatiner">
          <img class="bagImage" src={EmptyBag} alt="unloaded" />
          <strong style={{ fontSize: '30px', paddingTop: '10px' }}>It feels so light!</strong>
          <strong style={{ fontSize: '20px', paddingTop: '20px' }}>Looks like your cart is empty!</strong>
        </div>
      );

    if (this.props.clicked) {
      return (
        <div onClick={closeCart} class="backdrop">
          <div class="cartModal animate__animated animate__zoomIn">
            <div class="cartHeader">
              <p class="cartLabel">Shopping Cart</p>
              <img onclick={closeCart} class="closeImage" src={Close} alt="unloaded" />
            </div>
            {cartContents}
            {finalCheckout}
          </div>
        </div>
      );
    }
    else
      return null;
  }
}

export default Cart;