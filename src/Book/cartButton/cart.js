import React from 'react';
import './cart.css';

export const AddToCartButton = (props) => {
    return(
        <button class="addtocart" disabled={props.quantity === 0} >{props.quantity ?  'Add to cart' : 'Sold Out' }</button>
    )
};
