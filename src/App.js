import React from 'react'

// Components
import List from './Components/List'

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
        width: '400px',
        maxWidth: '400px',
        backgroundColor: '#eee',
        textAlign: 'center',
        marginTop: '-16px',
        paddingTop: '20px',
        paddingBottom: '20px'
      }
    }

    return (
      <div style={styles.wrapper}>
        <p>SAVING JAR</p>
        <List stateTest={this.state.stateTest} />
      </div>
    );
  }
}

export default App
