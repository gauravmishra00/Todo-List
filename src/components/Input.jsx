import React,{useState} from "react"
import { useDispatch } from "react-redux"
import {addTodo} from "../features/todoSlice"
function Input() {
  const [todo,setTodo] = useState('')
  const dispatch = useDispatch()
  function addTask(e){
    e.preventDefault();
    dispatch(addTodo(todo))
    setTodo('')
  }
  return (
   <div className='bg-yellow-500'>
    <input 
    className='border mr-5 w-120'
    type="text"
    placeholder='Enter the task...'
    value={todo}
    onChange={(e)=>setTodo(e.target.value)}
    />
    <button 
    className='border'
    onClick={addTask}
    >Add</button>
   </div>
  )
}

export default Input