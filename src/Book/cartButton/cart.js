import React from 'react';
import './cart.css';

export class AddToCartButton extends React.Component {
    constructor(props) {
      super(props);
    }
    render() {
    return(
        <button class="addtocart" onClick={this.props.clickbutton} disabled={this.props.quantity === 0} >{this.props.quantity ?  'Add to card' : 'Sold Out' }</button>
    )
}
};
