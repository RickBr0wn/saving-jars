import React from 'react'
import PropTypes from 'prop-types'

// Components
import JarName from './JarName'
import JarAmount from './JarAmount'

const Jar = props => {
	let newAmount
	return(
		<li className="jar">
			<JarName name={props.name} />
			<JarAmount amount={props.amount} />
			<form onSubmit={event => 	{
													props.handleAddAmount(event, newAmount)									
													event.target.value = props.amountToBeAdded
												}}>
				<label>
					ADD--
					<input 	type="text" 
									onChange={(event) => {
																newAmount = Number(event.target.value)
																return newAmount
															}
					} />
				</label>
				<input type="submit" value="Submit" />
			</form>
		</li>
	)
} 

Jar.propTypes = {
	name: PropTypes.string.isRequired,
	amount: PropTypes.number.isRequired,
	handleAddAmount: PropTypes.func.isRequired,
	amountToBeAdded: PropTypes.number.isRequired
}

export default Jar