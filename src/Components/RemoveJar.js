import React from 'react'

// Components
import IconButton from '@material-ui/core/IconButton'
import DeleteIcon from '@material-ui/icons/Delete'

const RemoveJar = props => {
  return(
    <div className="remove-icon">
      <IconButton onClick={props.handleRemove}
                  aria-label="Delete"
                  className="butt"
                  type="submit">
        <DeleteIcon />
      </IconButton>
    </div>
  )
}

export default RemoveJar

