import React from "react"
import NewJar from './NewJar'

class JarList extends React.Component {
  constructor() {
    super()
    this.state = {
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

  render() {
    return (
      <div>
        <ul>
          {
            this.state.jars.map((jar, index) => {
              return(
                <div className="jar" key={index}>
                  <li>{jar.name}</li>
                  <li>{jar.amount}</li>

                  <form onSubmit={event => this.handleSubmit(event, index)}>
                    <label>Money To Add To Jar
                    <input  type="text"
                            value={jar.amountToBeAdded}
                            onChange={event => this.handleChangeAt(event, index)} />
                    </label>
                    <input type="submit" value="submit" />
                  </form>
									<button onClick={() => this.handleRemoveAt(index)}
													type="submit">REMOVE JAR</button>
                </div>
              ) 
            })
          }
        </ul>
				<NewJar pendingJar={this.state.pendingJar}
								handleNewJarSubmit={this.handleNewJarSubmit}
								handleNewJarNameChangeAt={this.handleNewJarNameChangeAt} />
      </div>
    )
  }
}

export default JarList