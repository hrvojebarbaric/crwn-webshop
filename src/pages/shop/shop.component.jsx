import React from "react";
import PreviewCollection from "../../components/preview-collection/preview-collection.component";

import ShopData from "./shop.data";

class ShopPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            collections: ShopData
        }
    }
    render() {
        const {collections} = this.state;
        return (
            collections.map(({id, ...otherCollectionProps}) => (
                <PreviewCollection key={id} {...otherCollectionProps}></PreviewCollection>
            )
            )
        )
    }
}
export default ShopPage;