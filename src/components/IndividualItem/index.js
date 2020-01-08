import React from 'react';
import './styles.css';
import SizesAvailable from '../SizesAvailable/index';

class IndividualItem extends React.Component {
  
    render(){
     const availability = this.props.size.map((x) => <SizesAvailable available={x} />);
     return (
      <div>
        <div class="item">
          <img class="img" src={this.props.item} alt="unloadedImage"></img>
          <p class="p1">{this.props.name}</p>
          <hr></hr>
          <p class='p1'>₹ (INR) {this.props.price}</p>
          <div class="sizesAvailable-container">{availability}</div>
          <button class="btn" onClick={this.props.clicked1}>ADD TO CART</button>
        </div>
        </div>
    )
    }
  }

  export default IndividualItem;