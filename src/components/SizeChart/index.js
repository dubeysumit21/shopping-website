import React from 'react';
import './styles.css';

const SizeChart = (props) => {
    return (
      <div>
        <button class="size" onClick = {props.clicked}>{props.item}</button>
      </div>
    )
  }

export default SizeChart;