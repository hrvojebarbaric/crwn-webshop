import React from "react";
import {connect} from "react-redux"

import CustomButton from "../custom-button/custom-button.component"
import {addItem} from "../../redux/cart/cart.actions"

import "./collection-item.component.scss";

const CollectionItem = ({ item, addItem}) => (
    <div className="collection-item">
        <div className="image" style={{backgroundImage: `url(${item.imageUrl})`}}>
        
        </div>
        <div className="collection-footer">
            <span className="name">{item.name}</span>
            <span className="price">${item.price}</span>
        </div>
        <CustomButton className="custom-button" onClick={() => addItem(item)} inverted>Add to cart</CustomButton>
    </div>
);
const mapDispatchToProps = dispatch => ({
    addItem: item => dispatch(addItem(item))
})

export default connect(null,mapDispatchToProps)(CollectionItem);