import React from 'react';

import './AppHeader.css'

const AppHeader =({dones})=>{
  const newDone = dones.filter(done=>done.done).length;
  const newTodo = dones.length - newDone;
  return(
    <div className="app-header d-flex">
      <h1>TodoList</h1>
      <h2>{newTodo} more to do,{newDone} done</h2>
    </div>
  )
}
export default AppHeader;
