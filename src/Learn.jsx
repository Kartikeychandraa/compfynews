import React ,{useState,useRef,useEffect}from 'react';
import Todo from './Todo';
function Learn(){
const LOCAL_STORAGE_KEY = 'secret.key'
  
  const[ todo, setTodo ] = (useState([]))
  const todoref = useRef()

  
  function random(){
    return Math.floor(Math.random()*(999-100+1)+100);
  }
  useEffect(()=>{
const store = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))
    if(store) setTodo(store)
    
  },[])
useEffect(()=>{
  localStorage.setItem(LOCAL_STORAGE_KEY,JSON.stringify(
    todo
  ))
},[todo])
  
function handleadd(e){
 var count = random()  
  const name1 = todoref.current.value
  if(name1 !=''){
  
 setTodo(prevtodo =>{
  return [...prevtodo,{id: count,name: name1,complete: false}]
  })
   
  }
  
    console.log(todo)
}

  function handleclear(){
    setTodo([])
  }
  
return(
<div>
<Todo todos = {todo}/>
<input type="text" ref={todoref}/>
<button onClick={handleadd}>add</button>
  <button onClick = {handleclear}>clear</button>
  <p>{todo.length} task left</p>
</div>
  
)
}
export default Learn;