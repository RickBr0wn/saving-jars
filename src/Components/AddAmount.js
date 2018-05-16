import React from 'react'
import PropTypes from 'prop-types'

// Components
import ActualAmount from 'react'
import Amount from './Amount'

const AddAmount = props => {
  return(
    <div>
      {props.amount}
      <input type="text" onChange={props.addAmount} ></input>
      <button onClick={props.addAmount} className="btn btn-sm">Add</button>
      <Amount amount={props.amount} />
    </div>
  )
}
  
    
AddAmount.propTypes = {
  amount: PropTypes.number.isRequired,
  addAmount: PropTypes.func.isRequired
}

export default AddAmount