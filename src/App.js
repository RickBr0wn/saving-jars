import React from 'react'

// Components
import Title from './Components/Title'
import List from './Components/List'
import data from './Data/data'

class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      stateTest: 'test'
    }
  }

  render() {
    const styles = {
      wrapper: {
        backgroundColor: '#eee',
        textAlign: 'center',
        display: 'flex',
        flexDirection: 'column',
        maxWidth: '400px'
      }
    }

    return (
      <div className="container-fluid" style={styles.wrapper}>
        <Title />
        <List data={} />
      </div>
    );
  }
}

export default App
