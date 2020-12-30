import React from "react"
import {connect} from "react-redux"

import "./checkout-item.styles.scss"

import {addItem,removeItem,removeAllItemFromCart} from "../../redux/cart/cart.actions"

const CheckoutItem = ({removeItem,addItem,item,removeAllItemFromCart}) => (
    <div className="checkout-item">
        <div className="image-container">
            <img src={item.imageUrl} alt="item" />
        </div>
        <span className="name">{item.name}</span>
        <span className="quantity">
            <span className="add-remove-button" onClick={() => removeItem(item)}>&#10094;</span>        
            {item.quantity}
            <span className="add-remove-button" onClick={() => addItem(item)}>&#10095;</span>
        </span>
        <span className="price">${item.price}</span>
        <div onClick={ () => removeAllItemFromCart(item)} className="remove-button">&#10005;</div>
    </div>
)
const mapDispatchToProps = dispatch => ({
    addItem: item => dispatch(addItem(item)),
    removeItem: item => dispatch(removeItem(item)),
    removeAllItemFromCart: item => dispatch(removeAllItemFromCart(item))
})
export default connect(null,mapDispatchToProps)(CheckoutItem)