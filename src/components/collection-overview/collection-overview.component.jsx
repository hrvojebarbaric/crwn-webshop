import React from "react"

import {connect} from "react-redux"
import {createStructuredSelector} from "reselect"
import {selectCollectionForPreview} from "../../redux/shop/shop.selectors"

import PreviewCollection from "../preview-collection/preview-collection.component"

import "./collection-overview.styles.scss"

const CollectionOverview = ({collections}) => (
    <div className="collection-overview">
        {
            collections.map(({id, ...otherCollectionProps}) => (
                <PreviewCollection key={id} {...otherCollectionProps}></PreviewCollection>
                )
            )
         }
    </div>
)
const mapStateToProps = createStructuredSelector({
    collections:selectCollectionForPreview
})
export default connect(mapStateToProps)(CollectionOverview)