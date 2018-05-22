import React from 'react'


// Components
import JarList from './Components/JarList'
import Title from './Components/Title'

class App extends React.Component{
  constructor() {
    super()
    this.state = {
      newJarDialogOpen: false,
      removeJarDialogOpen: false,
			pendingJar: '',
      jars: [
        {
          name: "Holiday Fund",
          amount: 0.00.toFixed(2),
          amountToBeAdded: '',
          target: 100.0,
          toBeRemoved: false
        },
        {
          name: "Savings",
          amount: 35.26,
          amountToBeAdded: '',
          target: 1000.0,
          toBeRemoved: false
        },
        {
          name: "Car Repairs",
          amount: 82.96,
          amountToBeAdded: '',
          target: 100.0,
          toBeRemoved: false
        }
      ]
		}
	}

  // Remove
  handleRemoveAt = () => {
    const newJar = this.state.jars.filter(
      item => item.toBeRemoved === !true
    )
    this.setState({
      jars: [...newJar]
    })
    this.handleRemoveDialogOpen()
  }

	changeRemoveBool = (event, indexToBeChanged) => {
    this.setState({
      jars: this.state.jars.map((item, index) => {
        if (index === indexToBeChanged) {
          return {
            ...item,
            toBeRemoved: true
          }
        }
        return item
      })
    })
    this.handleRemoveDialogOpen()
  }

  handleRemoveDialogOpen = () =>{
    const tempRemoveDialogOpen = this.state.removeJarDialogOpen
    this.setState({ removeJarDialogOpen: !tempRemoveDialogOpen })
  }
  
  // New Jar Dialog
  handleNewJarDialogOpen = () => {
    const tempNewJarDialogOpen = this.state.newJarDialogOpen
    this.setState({ newJarDialogOpen: !tempNewJarDialogOpen })
  }
	
	handleNewJarSubmit = event =>{
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
    this.handleNewJarDialogOpen()
	}

	handleNewJarNameChangeAt = event =>{
		this.setState({ pendingJar: event.target.value })
	}

  // Amount Change
  handleAmountChangeAt = (event, indexToChange) =>{
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

  handleAddAmountSubmit = (event, indexToChange) =>{
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

  handleMinusAmountSubmit = (event, indexToChange) =>{
    event.preventDefault()
    this.setState({
      jars: this.state.jars.map((jar, index) => {
        if (index === indexToChange) {
          const newAmount = Number(jar.amount) - Number(jar.amountToBeAdded)
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

  render(){
    return(
      <div>
        <Title />
        <JarList  jars={this.state.jars} 
                  handleAmountChangeAt={this.handleAmountChangeAt}
                  handleAddAmountSubmit={this.handleAddAmountSubmit}
                  handleMinusAmountSubmit={this.handleMinusAmountSubmit}
                  
                  pendingJar = {this.state.pendingJar}
                  handleNewJarSubmit = {this.handleNewJarSubmit}
                  handleNewJarNameChangeAt = {this.handleNewJarNameChangeAt}
                  handleNewJarDialogOpen = {this.handleNewJarDialogOpen}
                  newJarDialogOpen = {this.state.newJarDialogOpen}
                  
                  removeJarDialogOpen={this.state.removeJarDialogOpen}
                  handleRemoveAt={this.handleRemoveAt}
                  handleRemoveDialogOpen={this.handleRemoveDialogOpen}
                  changeRemoveBool={this.changeRemoveBool} />
   
      </div>
    )
  }
}     

export default App
