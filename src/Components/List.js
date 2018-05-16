import React from 'react'
import PropTypes from 'prop-types'

// Components
import AddAmount from './AddAmount'

const List = props =>
	
	<ul className="list-unstyled">
		{
			props.jars.map((jar, index) => {
				return(
					// This is where each handler gets the index from
					<div key={index}>
						<li>{jar.name}</li>
						<AddAmount 	amount={jar.amount}
												key={index}
												addAmount={amount => props.addAmountAt(amount, index)}	/>

					</div>
				)
			})
		}
	</ul>

List.propTypes = {
	jars: PropTypes.array.isRequired,
	addAmountAt: PropTypes.func.isRequired
}

export default List