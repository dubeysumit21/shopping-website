import React from 'react';
import './styles.css';
import CartContent from '../CartContent/index';
import FinalCheckOut from '../FinalCheckOut/index';
import Close from '../../assets/white-close.png';
import FillHeart from '../../assets/redHeart.png';
import EmptyBag from '../../assets/business.png';
import WhiteStar from '../../assets/white-star.png';
import SizesAvailable from '../SizesAvailable/index';

class Cart extends React.Component {

  shouldComponentUpdate(nextProps) {
    const { clicked } = this.props;
    if (nextProps.clicked !== clicked) {
      return true;
    }
    return false;
  }

  itemDescription = [
    '100% Original Products',
    'Free Delivery on order above Rs. 1199',
    'Pay on delivery might be available',
    'Easy 30 days returns and exchanges',
    'Try & Buy might be available'
  ];

  itemFeatures = [
    'Athleisure T-shirt can be paired with tracks, khakis or jeans',
    'Style: Round Neck',
    'Sleeve: Short Sleeves',
    'Colour: Yellow',
    'Print: Typography',
    'Fit: Regular'
  ];

  itemSpecification = [
    { label: 'Fabric', desc: 'Cotton' },
    { label: 'Fit', desc: 'Regular Fit' },
    { label: 'Length', desc: 'Regulat' },
    { label: 'Main Trend', desc: 'Typography' },
    { label: 'Multipack Set', desc: 'Single' },
    { label: 'Neck', desc: 'Round' },
    { label: 'Occasion', desc: 'Casula' },
    { label: 'Pattern', desc: 'Printed' },
  ];

  render() {
    const { closeCart, item } = this.props;
    const availability = item.size.map((x) => <SizesAvailable available={x} />);
    return (
      <div class="backdrop">
        <div class="cartModal animate__animated animate__zoomIn">
          <div class="cartHeader">
            <p class="cartLabel">Product Details : </p>
            <img onClick={closeCart} class="closeImage" src={Close} alt="unloaded" />
          </div>
          <div class="prouct_mainContainer">
            <div class="product_itemDetailsHolder">
              <div class="product_imageHolder">
                <img class="heartImage" src={FillHeart} alt="unloadedImage"></img>
                <img class="itemImage" src={item.img} alt="unloaded" />
              </div>
              <div class="product_itemDetails">
                <div class="product_deliveryItem">
                  <div>
                    <p class="product_itemName">{item.name}</p>
                  </div>
                  <div>
                    <p>Check Delivery : </p>
                    <input class="product_pinCodeBox" placeholder="Enter PIN Code"></input>
                  </div>
                </div>
                <div class="product_starHolder">
                  <p>3.9</p>
                  <img class="product_starImage" src={WhiteStar} alt="unloadedImage"></img>
                </div>
                <div class="product_priceCode">
                  <p class="product_itemPrice">₹ {item.price}</p>
                  <p>Product Code : 1700AD{item.id}BAXT</p>
                </div>
                <p>Sizes Available : </p>
                <div class="product_sizeAvailable">{availability}</div>
                <div>
                  {this.itemDescription.map(x => <p>{x}</p>)}
                </div>
              </div>
            </div>
          </div>
          <div class="product_description">
            <div class="product_descriptionCol1">
              <p>PRODUCT DETAILS : </p>
              <p>Keep this hip this season with the {item.name}.
                This versatile T-shirt can be styled any way you like
                for the ultimate gym-to-street look.</p>
              <p>FEATURES : </p>
              {this.itemFeatures.map(x => <p>{x}</p>)}
            </div>
            {/* <div class="product_descriptionCol2">
              {this.itemSpecification.map(x => {
                return (
                  <div class="product_spec">
                    <p class="product_labelText">{x.label}</p>
                    <p>{x.desc}</p>
                  </div>
                );
              })}
            </div> */}
          </div>
        </div>
      </div>
    );
  }
}

export default Cart;