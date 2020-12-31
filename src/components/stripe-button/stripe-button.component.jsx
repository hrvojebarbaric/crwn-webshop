import React from "react"
import StripeCheckout from "react-stripe-checkout"

const StripeButton = ({price}) => {
    const priceForStripe = price * 100
    const publishedKey = "pk_test_51I4SmGHU8owWVJeBK1HlDYiqUAABvRhuTANuGpD6hbPGVwsFxAaLU2ueNgsV2zvvjFZQWX3CU4PpnsT3uVvZILi100Rk4Pikb2"

    const onToken = token => {
        console.log(token)
        alert("Payment successful")
    }

    return(
        <StripeCheckout
        label="Pay now"
        name="CRWN Clothing"
        billingAddress
        shippingAddress
        image="https://sendeyo.com/up/d/f3eb2117da"
        description={`Your total payment $${price}`}
        amount={priceForStripe}
        panelLabel="Pay now"
        token={onToken}
        stripeKey={publishedKey}
        />
    )
}
export default StripeButton