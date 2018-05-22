import React from 'react'
import TextField from '@material-ui/core/TextField'
import AddIcon from '@material-ui/icons/Add'
import RemoveIcon from '@material-ui/icons/Remove'
import IconButton from '@material-ui/core/IconButton'

const AddAmount = props => {
  return(
    <div>
      <TextField 	id={props.name}
                  label="Amount to save"
                  placeholder="£"
                  onChange={props.handleAmountChangeAt} 
                  value={props.amountToBeAdded} />
      <IconButton onClick={props.handleAddAmountSubmit}
                  className="butt" 
                  aria-label="add" >
        <AddIcon />
      </IconButton>
      <IconButton onClick={props.handleMinusAmountSubmit}
                  className="butt minus-icon" 
                  aria-label="add" >
        <RemoveIcon />
      </IconButton>
    </div>
  )
}

export default AddAmount