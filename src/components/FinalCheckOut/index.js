import React from 'react';
import './styles.css';

const FinalCheckOut = (props) => {
    let items = props.item.reduce((a, x) => a+Number((x.quantity)*(x.price)), 0);
    // if(items === 0) {
    //     items = null;
    // }
    console.info(items);
     return(
      <div>
        <div class="finalCartStatus">
            <div class="finalCartStatusLeft">
                <div>Total Amount : </div>
                <div>Taxes : </div>
                <div>Delivery Charges : </div>
                <br></br>
                <hr></hr>
                <div>Total : </div>
            </div>
            <div class="finalCartStatusRight">
                <div>{items}</div>
                <div>₹ 149</div>
                <div>₹ 49</div>
                <br></br>
                <hr></hr>
                <div>₹ {items+149+49}</div>
            </div>
        </div>
      </div>
    )
  }

  export default FinalCheckOut;