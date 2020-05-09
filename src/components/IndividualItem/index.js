import React from 'react';
import './styles.css';
import SizesAvailable from '../SizesAvailable/index';
import Stars from '../Stars';
import Forward from '../../assets/Forward.png';
import Backward from '../../assets/backward.png';
import FillHeart from '../../assets/redHeart.png';
import EmptyHeart from '../../assets/EmptyHeart.png';
import Close from '../../assets/close.png';

class IndividualItem extends React.Component {

  state = {
    gallery: false,
  };

  render() {
    const availability = this.props.size.map((x) => <SizesAvailable available={x} />);
    const { gallerySetter, display, heartSelected, heartChangeHandler, itemSetter } = this.props;
    return (
      <div>
        {display ? <div class="item">
          <div onClick={() => heartChangeHandler(this.props.id)} style={{ width: '100%', display: 'flex', justifyContent: 'flex-end' }}>
            {heartSelected ? <img style={{ width: '25px', height: '25px' }} src={FillHeart} alt="unloadedImage"></img> : <img style={{ width: '25px', height: '25px' }} src={EmptyHeart} alt="unloadedImage"></img>}
          </div>
          <img class="img animate__animated animate__zoomIn" src={this.props.item} alt="unloadedImage"></img>
          <p class="p1">{this.props.name}</p>
          <p class='p1'>₹ (INR) {this.props.price}</p>
          {/* <div class="sizesAvailable-container">{availability}</div> */}
          <div class="sizesAvailable-container"><Stars count={3} /></div>
          <div class="buttonHolder">
            <button class="cartCancelBtn" onClick={() => gallerySetter(this.props.id)}>VIEW GALLERY</button>
            <button class="btn" onClick={this.props.clicked1}>ADD TO CART</button>
          </div>
        </div> :
          <div class="galleryItem">
            <img onClick={() => itemSetter(this.props.id)} style={{ float: 'right', width: '25px', height: '25px' }} src={Close} alt="unloadedImage"></img>
            <div style={{ display: 'flex', width: '100%', flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
              <img style={{ width: '30px', height: '30px' }} src={Backward} alt="unloadedImage"></img>
              <img class="img animate__animated animate__zoomIn" src={this.props.item} alt="unloadedImage"></img>
              <img style={{ width: '30px', height: '30px' }} src={Forward} alt="unloadedImage"></img>
            </div>
          </div>}
      </div>
    )
  }
}

export default IndividualItem;