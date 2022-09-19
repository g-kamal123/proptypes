import PropTypes  from 'prop-types'
import React from 'react'

function Validation(props) {
  return (
    <div>
        <p>{props.hello}</p>
        <p>{props.obj.name}</p> 
        <p>{props.num}</p>
        {props.bool ? <p>true</p>:<p>false</p>}
        {/* <p>{props.bool}</p> */}
        <p>{props.fun()}</p>
        <p>{props.symbol}</p>
    </div>
  )
}
Validation.propTypes ={
    hello:PropTypes.string,
    obj:PropTypes.object,
    num:PropTypes.number,
    bool:PropTypes.bool,
    fun:PropTypes.func,
    symbol:PropTypes.symbol
}

export default Validation