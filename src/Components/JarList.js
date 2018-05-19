import React from "react"

//Components
import NewJar from './NewJar'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import AddIcon from '@material-ui/icons/Add'
import { withStyles } from '@material-ui/core/styles'
import Icon from '@material-ui/core/Icon'
import IconButton from '@material-ui/core/IconButton'
import DeleteIcon from '@material-ui/icons/Delete'

const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
  },
})

class JarList extends React.Component {
  constructor() {
    super()
    this.state = {
      newJarDialogOpen: false,
			pendingJar: '',
      jars: [
        {
          name: "Holiday Fund",
          amount: 0.00.toFixed(2),
          amountToBeAdded: '',
          target: 100.0
        },
        {
          name: "Savings",
          amount: 35.26,
          amountToBeAdded: '',
          target: 1000.0
        },
        {
          name: "Car Repairs",
          amount: 82.96,
          amountToBeAdded: '',
          target: 100.0
        }
      ]
		}
		
    this.handleChangeAt = this.handleChangeAt.bind(this)
		this.handleSubmit = this.handleSubmit.bind(this)
		this.handleNewJarNameChangeAt = this.handleNewJarNameChangeAt.bind(this)
		this.handleNewJarSubmit = this.handleNewJarSubmit.bind(this)
    this.handleRemoveAt = this.handleRemoveAt.bind(this)
    this.handleNewJarDialogOpen = this.handleNewJarDialogOpen.bind(this)
    this.handleNewJarDialogClose = this.handleNewJarDialogClose.bind(this)

	}

	handleRemoveAt = index =>
		this.setState({
			jars: [
				...this.state.jars.slice(0, index),
				...this.state.jars.slice(index +1)
			]
		})
	
	handleNewJarSubmit(event){
		event.preventDefault()
		this.setState({
			jars: [
				{
					name: this.state.pendingJar,
					amount: 0.00.toFixed(2),
					amountToBeAdded: ''
				},
				...this.state.jars
			],
			pendingJar: ''
    })
    this.handleNewJarDialogClose()
	}

	handleNewJarNameChangeAt(event){
		this.setState({ pendingJar: event.target.value })
	}

  handleChangeAt(event, indexToChange){
    this.setState({
      jars: this.state.jars.map((jar, index) => {
        if(index === indexToChange){
          return { 
            ...jar,
            amountToBeAdded: event.target.value 
            }
        }
        return jar
      })
    })
  }

  handleSubmit(event, indexToChange){
    event.preventDefault()
    this.setState({
      jars: this.state.jars.map((jar, index) => {
        if (index === indexToChange) {
          const newAmount = Number(jar.amount) + Number(jar.amountToBeAdded)
          return {
            ...jar,
            amount: newAmount.toFixed(2),
            amountToBeAdded: ''
          }
        }
        return jar
      })
    })
  }

  handleNewJarDialogOpen = () => {
    this.setState({ newJarDialogOpen: true })
  }

  handleNewJarDialogClose = () => {
    this.setState({ newJarDialogOpen: false })
  }

  render() {
    return (
      <div className="test">
        <ul>
          {
            this.state.jars.map((jar, index) => {
              return(
                <div className="jar" key={index}>
                  <div className="title">{jar.name}</div>
                  <div className="amount">£{jar.amount}</div>
                  <div className="controls">
                    <TextField 	id={jar.name}
                                label="Amount to save"
                                placeholder="£"
                                onChange={event => this.handleChangeAt(event, index)} 
                                value={jar.amountToBeAdded} />
                    <IconButton onClick={event => this.handleSubmit(event, index)}
                                className="butt" 
                                aria-label="add" >
                      <AddIcon />
                    </IconButton>
                    <IconButton onClick={() => this.handleRemoveAt(index)}
                                aria-label="Delete"
                                className="butt"
                                type="submit">
                      <DeleteIcon />
                    </IconButton>
                  </div>
                </div>
              ) 
            })
          }
        </ul>
        <br />
        <div className="row">
          <p>CREATE A NEW JAR</p>
          <NewJar pendingJar = {this.state.pendingJar}
                  handleNewJarSubmit = {this.handleNewJarSubmit}
                  handleNewJarNameChangeAt = {this.handleNewJarNameChangeAt}
                  handleNewJarDialogOpen = {this.handleNewJarDialogOpen}
                  newJarDialogOpen = {this.state.newJarDialogOpen}
                  handleNewJarDialogClose = {this.handleNewJarDialogClose}  />
        </div>
      </div>
    )
  }
}

export default withStyles(styles)(JarList)