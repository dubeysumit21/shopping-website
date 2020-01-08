import React from 'react';
import './styles.css';

const SortButton = (props) => {
    return (
      <div>
        <button class="sortButton" onClick={props.clicked}>{props.item}</button>
      </div>
    )
}

export default SortButton;
