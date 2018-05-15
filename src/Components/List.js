import React from 'react'

// Components
import AddAmount from './AddAmount'

class List extends React.Component{
	constructor(props){
		super(props)
		this.state = this.props

		console.log(this.state)
	}

	addFunds(event){
		event.preventDefault()
		const { funds } = this.state
		// const amount = this.props.data.jars.amount
		const newFunds = this.newFunds.value

		console.log(funds)
	}

	render(){
		const { data } = this.props

		return(
			<div>
				<ul className="list-unstyled">
					{
						//Picks up jar index here
						data.jars.map((jar, index) => {
							return(
								<div key={jar.index}>
									<li>{jar.name}</li>
									<AddAmount amount={jar.amount} />
								</div>
							)
						})
					}
				</ul>
			</div>
		)
	}
}

export default List