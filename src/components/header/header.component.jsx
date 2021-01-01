import React from "react";
import {Link} from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/crown.svg";
import {auth} from "../../firebase/firebase.utis";
import {createStructuredSelector} from "reselect"
import {connect} from "react-redux"

import CartIcon from "../cart-icon/cart-icon.component"
import CartDropdown from "../cart-dropdown/cart-dropdown.component"

import {selectCartHidden} from "../../redux/cart/cart.selectors"
import {selectUserCurrent} from "../../redux/user/user.selector"

//styles CSS in JS
import {HeaderComponentDiv,LogoContainerLink,OptionDiv,OptionLink,OptionsDiv} from "./header.styles"

const HeaderComponent = ({currentUser, hidden}) => (
    <HeaderComponentDiv>
        <LogoContainerLink to="/">
            <Logo></Logo>
        </LogoContainerLink> 
        <OptionsDiv>
            <OptionLink to="/shop">SHOP</OptionLink>
            <OptionLink to="/contact">CONTACT</OptionLink>
            {
                currentUser ? <OptionDiv onClick={() => auth.signOut()}>SIGN OUT</OptionDiv> : <Link to="/signin">SIGN IN</Link>
            }
            <CartIcon></CartIcon>
        </OptionsDiv> 
        { hidden? null : <CartDropdown/> } 
    </HeaderComponentDiv>
)

const mapStateToProps = createStructuredSelector({
    currentUser:selectUserCurrent, 
    hidden: selectCartHidden
})

export default connect(mapStateToProps)(HeaderComponent);