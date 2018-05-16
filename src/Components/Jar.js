import React from 'react'
import PropTypes from 'prop-types'

// Components
import JarName from './JarName'
import JarAmount from './JarAmount'

const Jar = props => {
	return(
		<li>
			<JarName name={props.name} />
			<JarAmount amount={props.amount} />
			<form onSubmit={this.handleAddAmount}>
        <label>
          Add:
          <input type="text" onChange={this.handleChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
		</li>
	)
} 

Jar.propTypes = {
	name: PropTypes.string.isRequired,
	amount: PropTypes.number.isRequired,
	handleAddAmount: PropTypes.func.isRequired
}

export default Jar