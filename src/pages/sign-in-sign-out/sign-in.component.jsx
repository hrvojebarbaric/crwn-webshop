import React from "react";
import SignIn from "../../components/sign-in/sign-in.component";
import SignUp from "../../components/sign-up/sign-up.component"

import "./sign-in-sign-out.styles.scss";

const SignInAndSignOut = () => (
    <div className="sign-in-sign-out">
        <SignIn></SignIn>
        <SignUp></SignUp>
    </div>
)
export default SignInAndSignOut;