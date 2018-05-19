import React from 'react'

// Components
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
  },
});

class NewJar extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      open: false,
    }
  }

  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  render(){
    const { classes } = this.props;
    return(        
      <div>
        <Button variant="fab" 
                color="primary" 
                aria-label="add" 
                className={classes.button}
                onClick={this.handleClickOpen}>
          <AddIcon />
        </Button>
        <Dialog
          open={this.state.open}
          onClose={this.handleClose}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle id="form-dialog-title">Create A New Savings Jar</DialogTitle>
          <DialogContent>
            <DialogContentText>
              Please enter the name of your new Savings Jar
            </DialogContentText>
            <TextField
              autoFocus
              margin="dense"
              id="name"
              label="Name of Jar"
              onChange={this.props.handleNewJarNameChangeAt}
              fullWidth
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleClose} color="primary">
              Cancel
            </Button>
            <Button onClick={this.props.handleNewJarSubmit} color="primary">
              Create
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    )
  }
}

export default withStyles(styles)(NewJar)