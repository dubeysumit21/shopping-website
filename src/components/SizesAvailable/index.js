import React from 'react';
import './styles.css';

const SizesAvailable = (props) => {
    return (
      <div>
        <button class="sizesAvailable" onClick={props.click1}>{props.available}</button>
      </div>
    )
  }

  export default SizesAvailable;