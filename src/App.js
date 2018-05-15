import React from 'react'

// Components
import Title from './Components/Title'
import List from './Components/List'
import AddAmount from './Components/AddAmount';

const data = {
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
    },
  ]
}

class App extends React.Component {
  addAmount = (addedAmount, indexToChange) => {
    this.setState({
      jars: this.state.jars.map((jar, index) => {
        if(index === indexToChange){
          const newAmount = this.amount + addedAmount
          return{
            ...jar,
            newAmount
          }
        }
        return jar
      })
    })
  }

  render() {
    return (
      <div className="container-fluid">
        <Title />
        <List data={data}
              addAmount={this.addAmount} />
      </div>
    );
  }
}

export default App
