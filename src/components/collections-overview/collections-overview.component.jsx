import React from 'react'
import { connect } from 'react-redux';

import { selectCollectionsForPreview } from '../../redux/shop/shop.selectors';

import { createStructuredSelector } from 'reselect';
import CollectionPreview from '../collection-preview/collection-preview';
import './collections-overview.styles.scss';


const CollectionsOverview = ({ collections }) => (
    
        <div className='collection-overview'>
            {collections.map(({ id, ...otherCollectionProps }) => (
                <CollectionPreview key={id} {...otherCollectionProps} />
        ))}

        </div>

)

const MapStateToProps = createStructuredSelector(
    {collections: selectCollectionsForPreview}
)

export default connect(MapStateToProps)(CollectionsOverview);
