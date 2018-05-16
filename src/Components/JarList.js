import React from 'react'
import PropTypes from 'prop-types'

// Components
import Jar from './Jar'

const JarList = props => 
	<ul>
		{
			props.jarList.map((jar, index) => {
				return(
					<Jar 	key={index}
								name={jar.name}
								amount={jar.amount}
								handleAddAmount={() => props.addAmountAt(index)} />
				)
			})
		}
	</ul>

JarList.propTypes = {
	jarList: PropTypes.array.isRequired,
	addAmountAt: PropTypes.func.isRequired
}

export default JarList