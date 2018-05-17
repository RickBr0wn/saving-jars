import React from 'react'

const NewJar = props  => {
  return(
    <form onSubmit={event => props.handleNewJarSubmit(event)}>
      <label>Name of New Jar
      <input  type="text"
              value={props.pendingJar}
              onChange={props.handleNewJarNameChangeAt} />
      </label>
      <input type="submit" value="submit" />
    </form>                    
  )
}

export default NewJar