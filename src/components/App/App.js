import React,{Component} from 'react';

import AppHeader from '../AppHeader';
import SearchPanel from '../SearchPanel';
import TodoList from '../TodoList';
import ItemStatusFilter from '../ItemStatusFilter';
import AddItem from '../AddItem';

export default class App extends Component{
  maxId=100;
  state={
    todoData : [
      this.todoData("Make coffe"),
      this.todoData('Make Awesome App'),
      this.todoData('Have a Lunch')
    ],
    trem:"",
    filter: "all"
  }
  todoData(label){
    return{
      id:this.maxId++,
      label:label,
      important: false,
      done: false
    }
  }
  onToggleDone=(idx)=>{
    this.setState(({ todoData })=>{
      const ind = todoData.findIndex(el=>el.id===idx)
      const oldItem = todoData[ind]
      const newItem = {...oldItem,done:!todoData.done}
      const newArr = [...todoData.slice(0,ind),
                      newItem,
                      ...todoData.slice(ind+1)
                    ];
      return{
        todoData:newArr
      }

    })
  }
  onToggleImportant=(idx)=>{
    this.setState(({ todoData })=>{
      const ind = todoData.findIndex(el=>el.id===idx)
      const oldItem = todoData[ind]
      const newItem = {...oldItem,important:!todoData.important}
      const newArr = [...todoData.slice(0,ind),
                      newItem,
                      ...todoData.slice(ind+1)
                    ];
      return{
        todoData:newArr
      }

    })
  }
  onAddItem=(text)=>{
    const newItem = this.todoData(text)
    this.setState(({todoData})=>{
      return{
        todoData:[...todoData,newItem]
      }
    })
  }
  deleteItem=(idItem)=>{
    this.setState(({todoData})=>{
    return {todoData:todoData.filter(cur=>cur.id!==idItem)}
    })
  }
  onSearch=(val)=>{
    this.setState({
      trem:val
    })
  }
  onSearchItem=(trem,todoData)=>{
    if(trem.length===0)return todoData
    return todoData.filter(el=>el.label.toLowerCase().indexOf(trem.toLowerCase()) > -1)
  }
  filterItems(filter,todoData){
    switch(filter){
      case "all":
        return todoData;
      case "important":
        return todoData.filter(item=>item.important);
      case "done":
        return todoData.filter(item=>item.done);
      default:
        return todoData
    }
  }
  takeFilter=(filter)=>{
    this.setState({
        filter: filter
    })
  }
  render(){
    const availableItem = this.filterItems(this.state.filter,this.onSearchItem(this.state.trem,this.state.todoData))
    return(
      <div>
        <AppHeader dones={this.state.todoData}/>
        <ItemStatusFilter filter = {this.state.filter} takeFilter={this.takeFilter} />
        <SearchPanel onSearch={this.onSearch}/>
        <TodoList
          todoList = {availableItem}
          onDeleted={this.deleteItem}
          onToggleDone={this.onToggleDone}
          onToggleImportant={this.onToggleImportant}
          />
        <AddItem onAddItem={this.onAddItem}/>
      </div>
    )
  }
}
