import React,{Component} from 'react';

export default class AddItem extends Component{
  state={
    value: ""
  }
  onChangeVal=(e)=>{
    this.setState({
      value: e.target.value
    })
  }
  onSubmit=(e)=>{
    e.preventDefault()
    if(this.state.value.length > 0){
      this.clearInput()
      return this.props.onAddItem(this.state.value)
    }
  }
  clearInput=()=>{
    this.setState({
      value: ""
    })
  }
  render(){
    return(
      <form onSubmit={this.onSubmit}>
        <input value={this.state.value}
               type="text"
               className="form-control"
               placeholder="What needs to be done"
               onChange={this.onChangeVal} />
        <button className="btn btn-outline-secondary"
          >
          add Item
        </button>
      </form>
    )
  }


}
