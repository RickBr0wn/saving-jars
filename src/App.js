import React from 'react'

// Components
import Title from './Components/Title'
<<<<<<< HEAD
import List from './Components/List'
=======
import JarList from './Components/JarList'
>>>>>>> a52e29fc97837ce8620df159c8344e0eca197b29

class App extends React.Component {
  constructor(){
    super()
    this.state = {
      jars: [
        {
          name: 'Holiday Fund',
          amount: 97.56,
          target: 100.00
        },
        {
          name: 'Savings',
          amount: 35.26,
          target: 1000.00
        },
        {
          name: 'Car Repairs',
          amount: 82.96,
          target: 100.00
<<<<<<< HEAD
        },
=======
        }
>>>>>>> a52e29fc97837ce8620df159c8344e0eca197b29
      ]
    }
  }

<<<<<<< HEAD
  addAmountAt = (amountToAdd, indexToChange) => {
    this.setState({
      jars: this.state.jars.map((jar, index) => {
        if(index === indexToChange){
          console.log(amountToAdd)
          return{
            ...jar,
            amountToAdd
=======
  addAmountAt = indexToChange => 
    this.setState({
      jars: this.state.jars.map((jar, index) => {
        if(index === indexToChange){
          return {
            ...jar,
            amountToBeAdded: 10
>>>>>>> a52e29fc97837ce8620df159c8344e0eca197b29
          }
        }
        return jar
      })
    })
<<<<<<< HEAD
  }
=======
>>>>>>> a52e29fc97837ce8620df159c8344e0eca197b29

  render() {
    return (
      <div className="container-fluid">
        <Title />
<<<<<<< HEAD
        <List jars={this.state.jars}
              addAmountAt={this.addAmountAt} />
=======
        <JarList  jarList={this.state.jars}
                  addAmountAt={this.addAmountAt} />
>>>>>>> a52e29fc97837ce8620df159c8344e0eca197b29
      </div>
    )
  }
}

export default App
