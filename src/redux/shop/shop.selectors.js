import {createSelector} from "reselect"
import memoize from 'lodash.memoize';

const selectShop = state => state.shop

export const selectShopColection = createSelector(
    [selectShop],
    shop => shop.collections
)
export const selectCollectionForPreview = createSelector(
    [selectShopColection],
    collections => Object.keys(collections).map(key=>collections[key])
)
export const selectCollection = memoize(collectionUrlParam => createSelector(
    [selectShopColection],
    collections => collections[collectionUrlParam]
))