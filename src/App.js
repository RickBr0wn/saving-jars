import React from 'react'


// Components
import JarList from './Components/JarList'
import Title from './Components/Title'

class App extends React.Component{
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
	}

	handleRemoveAt = index =>
		this.setState({
			jars: [
				...this.state.jars.slice(0, index),
				...this.state.jars.slice(index +1)
			]
    })
  
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

  handleAmountSubmit = (event, indexToChange) =>{
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

  

  // handleNewJarDialogClose = () => {
  //   this.setState({ newJarDialogOpen: false })
  // }

  render(){
    return(
      <div>
        <Title />
        <JarList  jars={this.state.jars} 
                  handleChangeAmountAt={this.handleChangeAmountAt}
                  handleAmountSubmit={this.handleAmountSubmit}
                  handleRemoveAt={this.handleRemoveAt}
                  pendingJar = {this.state.pendingJar}
                  handleNewJarSubmit = {this.handleNewJarSubmit}
                  handleNewJarNameChangeAt = {this.handleNewJarNameChangeAt}
                  handleNewJarDialogOpen = {this.handleNewJarDialogOpen}
                  newJarDialogOpen = {this.state.newJarDialogOpen}
                  handleNewJarDialogClose = {this.handleNewJarDialogClose} />
      </div>
    )
  }
}     

export default App
