import React from 'react'

// Components
import Title from './Components/Title'
import JarList from './Components/JarList'

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
        }
      ]
    }
  }

  addAmountAt = indexToChange => 
    this.setState({
      jars: this.state.jars.map((jar, index) => {
        if(index === indexToChange){
          return {
            ...jar,
            amountToBeAdded: 10
          }
        }
        return jar
      })
    })

  render() {
    return (
      <div className="container-fluid">
        <Title />
        <JarList  jarList={this.state.jars}
                  addAmountAt={this.addAmountAt} />
      </div>
    )
  }
}

export default App
