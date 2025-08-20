import React,{useState} from "react"
import { useDispatch } from "react-redux"
import {addTodo} from "../features/todoSlice"
function Input() {
  const [todo,setTodo] = useState('')
  const dispatch = useDispatch()
  function addTask(e){
    e.preventDefault();
    if(todo.trim().length>0)
      dispatch(addTodo(todo))
    setTodo('')
  }
  return (
   <div className='bg-yellow-500 mb-5'>
    <input 
    className='border mr-5 w-166'
    type="text"
    placeholder='Enter the task...'
    value={todo}
    onChange={(e)=>setTodo(e.target.value)}
    />
    <button 
    className='border w-20'
    onClick={addTask}
    >Add</button>
    
   </div>
  )
}

export default Input