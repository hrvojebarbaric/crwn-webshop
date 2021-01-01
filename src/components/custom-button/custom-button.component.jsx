import React from "react";

//styles CSS in JS
import {CustomButtonContainer} from "./custom-button.styles"

const CustomButton = ({ children, ...props }) => (
    <CustomButtonContainer {...props}>
        {children}
    </CustomButtonContainer>
);

export default CustomButton;