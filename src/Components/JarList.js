import React from "react"

//Components
import NewJar from './NewJar'
import { withStyles } from '@material-ui/core/styles'
import AddAmount from './AddAmount'
import RemoveJar from './RemoveJar'

const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
  },
})

const JarList = props => {
    return (
      <div className="test">
        <ul>
          {
            props.jars.map((jar, index) => {
              return(
                <div className="jar" key={index}>
                  <div className="title">{jar.name}</div>
                  <div className="amount">£{jar.amount}</div>
                  <div className="controls">
                    <AddAmount  name={jar.name}
                                handleChangeAt={event => props.handleChangeAt(event, index)}
                                amountToBeAdded={jar.amountToBeAdded}
                                handleSubmit={event => props.handleSubmit(event, index)} />

                    <RemoveJar handleRemoveAt={() => props.handleRemoveAt(index)} />
                  </div>
                </div>
              ) 
            })
          }
        </ul>
        <br />
        <div className="row">
          <p>CREATE A NEW JAR</p>
          <NewJar pendingJar = {props.pendingJar}
                  handleNewJarSubmit = {props.handleNewJarSubmit}
                  handleNewJarNameChangeAt = {props.handleNewJarNameChangeAt}
                  handleNewJarDialogOpen = {props.handleNewJarDialogOpen}
                  newJarDialogOpen = {props.newJarDialogOpen}
                  handleNewJarDialogClose = {props.handleNewJarDialogClose}  />
        </div>
      </div>
    )
  }

export default withStyles(styles)(JarList)