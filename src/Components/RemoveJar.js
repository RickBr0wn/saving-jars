import React from 'react'

// Components
import IconButton from '@material-ui/core/IconButton'
import DeleteIcon from '@material-ui/icons/Delete'
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import DialogContentText from '@material-ui/core/DialogContentText'
import DialogTitle from '@material-ui/core/DialogTitle'
import Button from '@material-ui/core/Button'

const RemoveJar = props => {
  return(        
    <div className="remove-icon">
      <IconButton onClick={props.changeRemoveBool}
                  aria-label="Delete"
                  className="butt"
                  type="submit">
        <DeleteIcon />
      </IconButton>
      <Dialog
        open={props.removeJarDialogOpen}
        onClose={props.handleRemoveDialogOpen}
        aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Delete</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Are you sure you want to delete this Jar?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={props.handleRemoveDialogOpen} color="primary">
            No
          </Button>
          <Button onClick={props.handleRemoveAt} color="primary">
            Yes
          </Button>
        </DialogActions>
      </Dialog>
    </div>
    )
  }

  export default RemoveJar

