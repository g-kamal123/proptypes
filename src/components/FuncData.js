import React from 'react'
import PropTypes from 'prop-types'

function FuncData(props) {
  return (
    <div>
    <h2>Final Data</h2>
    <div>
      <div>
        <label>Name :</label>
        <label>{props.name}</label>
      </div>

      <div>
        <label>Marks :</label>
        <label>{props.marks}</label>
      </div>

      <div>
        <label>Total :</label>
        <label>{props.total}</label>
      </div>

    </div>
  </div>
  )
}
FuncData.propTypes = {
    name: PropTypes.string.isRequired,
    marks: PropTypes.number,
    total: PropTypes.number
  };

export default FuncData