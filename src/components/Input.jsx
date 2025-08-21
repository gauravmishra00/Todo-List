import React,{useEffect, useState} from "react"
import { useDispatch } from "react-redux"
import {addTodo } from "../features/todoSlice"
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
   <div className=' mx-auto w-[80%]  sticky top-28 '>
    <input 
    className='border mr-[5%] w-[80%] h-10'
    type="text"
    placeholder='Enter the task...'
    value={todo}
    onChange={(e)=>setTodo(e.target.value)}
    />
    <button 
    className='border w-[15%] h-[100%]'
    onClick={addTask}
    >Add</button>
    
   </div>
  )
}

export default Input