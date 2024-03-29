import {createSelector} from 'reselect';
import memoize from 'lodash.memoize';

const selectShop = state => state.shop;

export const selectShopData = createSelector(
    [selectShop],
    shop => shop.shopData
);

export const selectCollection = memoize(collectionUrlParam => 
createSelector(
    [selectShopData],
    collections => collections[collectionUrlParam]
) )

export const selectCollectionsForPreview = createSelector(
[selectShopData],
collections => Object.keys(collections).map(key => collections[key])
)