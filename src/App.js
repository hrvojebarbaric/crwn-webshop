import React from 'react';
import './App.css';
import {Switch, Route, Redirect } from "react-router-dom";
import {connect} from "react-redux"
import {createStructuredSelector} from "reselect"

import HomePage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shop/shop.component";
import SignInAndSignOut from "./pages/sign-in-sign-out/sign-in.component";
import CheckoutPage from "./pages/checkout/checkout.component"

import Header from "./components/header/header.component";

import {selectUserCurrent} from "./redux/user/user.selector"
import {auth, createUserProfileDocument} from "./firebase/firebase.utis";
import {setCurrentUser} from "./redux/user/user.actions"


class App extends React.Component {

  unsubscribeFromAuth = null;

  componentDidMount() {
    const {setCurrentUser} = this.props

    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if(userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          setCurrentUser({
              id: snapShot.id,
              ...snapShot.data()
          })
        });        
      }
      else {
        setCurrentUser(userAuth);
      }
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header></Header>
        <Switch>
          <Route exact path="/" component={HomePage}></Route>
          <Route path="/shop" component={ShopPage}></Route>
          <Route exact path="/checkout" component={CheckoutPage}></Route>
          <Route exact path="/signin" render={() => 
            this.props.currentUser ? (
              <Redirect to="/"></Redirect>
              ):(
              <SignInAndSignOut></SignInAndSignOut>
              )
          } />
        </Switch>
      </div>
    );
  }  
}

const mapStateToProps = createStructuredSelector ({
  currentUser: selectUserCurrent
})

const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
