import React,{Component} from 'react';
import './SearchPanel.css';


export default class  SearchPanel extends Component{
  state={
    value:""
  }
  onChangeSearch=(e)=>{
    this.setState({
      value:e.target.value
    })
    this.props.onSearch(e.target.value)
  }
  render(){
    return(
      <input
        placeholder="search"
        value={this.state.value}
        onChange={this.onChangeSearch} />
    )
  }

}
