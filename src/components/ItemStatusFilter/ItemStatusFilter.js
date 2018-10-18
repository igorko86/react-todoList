import React,{Component} from 'react';

export default class ItemStatusFilter extends Component{

  render(){
    const buttons = [
      {name:"all",filter:"all"},
      {name:"Important",filter:"important"},
      {name:"Done",filter:"done"}
    ]
    const showButtons = buttons.map(btn=>{
      const clazz = this.props.filter===btn.filter?"btn btn-info":"btn btn-outline-secondary";
      return (<button key={btn.name}
                  type="button"
                  className={clazz}
                  onClick={()=>this.props.takeFilter(btn.filter)}
                  >
                  {btn.name}
              </button>)
    })
    return(
      <div>
        {showButtons}
      </div>
    )
  }

}
