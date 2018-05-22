import React from 'react'
import TextField from '@material-ui/core/TextField'
import AddIcon from '@material-ui/icons/Add'
import IconButton from '@material-ui/core/IconButton'

const AddAmount = props => {
  return(
    <div>
      <TextField 	id={props.name}
                  label="Amount to save"
                  placeholder="£"
                  onChange={props.handleAmountChangeAt} 
                  value={props.amountToBeAdded} />
      <IconButton onClick={props.handleAmountSubmit}
                  className="butt" 
                  aria-label="add" >
        <AddIcon />
      </IconButton>
    </div>
  )
}

export default AddAmount