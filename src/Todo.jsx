import React from 'react'

function Todo({todos}){
  const todo = todos.map((n) =>
    <div>
    
  <li><input type="checkbox" checked={n.complete} /> {n.name}</li>
      </div>
)
return(
<div>
  {todo}
</div>
  
)
}

export default Todo