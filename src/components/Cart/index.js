import React from 'react';
import './styles.css';
import CartContent from '../CartContent/index';
import FinalCheckOut from '../FinalCheckOut/index';

class Cart extends React.Component{

    shouldComponentUpdate (nextProps) {
        const { clicked } = this.props;
        if(nextProps.clicked !== clicked){
            return true;
        }
        return false;
    }
  
    render() {
      const { closeCart } = this.props;
      let x = 0;
      const updatedCart = [];
      const cartContent = this.props.cartItem;
      cartContent.sort(function(a, b){
        return (Number(a.id) - Number(b.id))
      });
      for(let i=0; i<cartContent.length; i++){
        if(cartContent[i].id !== x){
           updatedCart.push(cartContent[i]);
           x = cartContent[i].id;
        }  
      }
      const cartContents = updatedCart.map((x, index) => <CartContent clicked={this.props.clicked} items={x.img} itemName={x.name} itemCost={x.price} itemQuantity={x.quantity} click1={() => this.props.click2(x.id)}/>)
      let finalCheckout = '';
      if(updatedCart.length > 0){
        finalCheckout = (
            <div>
                <FinalCheckOut item={updatedCart} />
                <div class="checkout-btn" onClick = {() => {alert('Order Placed Successfully!')}}><button class="btn">PROCEED TO CHECKOUT</button></div>
            </div>
        );
      }
      else
        finalCheckout = <div style={{textAlign : 'center', marginTop : '20%'}}><strong>No Items in the Cart.</strong></div>
      
       if(this.props.clicked){
            return(
                <div onClick = {closeCart} style={{ width: '100%', height: '100%', position: 'fixed', zIndex: 3 }}>
                    <div class="cartModal">
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