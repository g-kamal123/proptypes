import { PropTypes } from 'prop-types'
import React from 'react'

function NameFirst(props) {
  return (
    <div>
        <h1>1.</h1>
      
      {props.name}</div>
  )
}
NameFirst.propTypes = {
    name: PropTypes.string
  };

export default NameFirst