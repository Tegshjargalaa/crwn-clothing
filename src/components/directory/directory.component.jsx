import React from 'react';
import MenuItem from '../menu-item/menu-item'
import {connect} from 'react-redux';

import './directory.styles.scss'

import {createStructuredSelector} from 'reselect'

import {selectDirectorySections} from '../../redux/directory/directory.selectors'

const Directory = ({sections}) => (
  <div className='directory-menu' >
    {sections.map(({ id, ...otherProps }) => {
      { console.log(otherProps) }
      return <MenuItem key={id} {...otherProps} />
    })}
  </div>
)

const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySections
})

export default connect(mapStateToProps)(Directory);