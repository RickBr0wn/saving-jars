import React from 'react'

class AddAmount extends React.Component{
  constructor(props){
    super(props)
    
    this.amount = this.props.amount
  }

  render(){
    console.log(this.amount)
    return(
      <div>
        <li>{this.amount}</li>
        <form className="form-inline" onSubmit={event => this.addAmount(event)}>
          <div className="form-group">
            <input ref={input => this.newFunds = input} type="text" placeholder="£" className="form-control" id="newJarNameInput" />
          </div>
          <button type="submit" className="btn btn-primary">Add Funds</button>
        </form>
      </div>
    )
  }
}

export default AddAmount