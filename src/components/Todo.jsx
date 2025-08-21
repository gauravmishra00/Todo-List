import React, { useEffect, useState,useRef } from 'react'
import { useDispatch } from 'react-redux'
import { removeTodo,updateTodo ,isCompelete} from '../features/todoSlice'
import { current } from '@reduxjs/toolkit'
function Todo({todo,id}) {

  const dispatch = useDispatch()
  const [editable , setEditable] = useState(false)
  const [text , setText] = useState(todo)
  const [complete , setComplete] = useState(false)
  const inputRef = useRef(null)
  function remove(e)
  {
    dispatch(removeTodo(id))
  }
  function edit(e)
  {
    setEditable(!editable)
    dispatch(updateTodo({id,todo}))
    inputRef.current.focus()
  }
  useEffect(()=>{
    dispatch(isCompelete(id))
  },[complete])
  return (
    <div className=' w-[80%] h-10 mx-auto mt-5 flex items-center'>
      <label htmlFor="check">

      <input 
      type="checkbox" 
      className='w-5 h-5 '
      // checked
      onChange={(e)=>setComplete(e.target.checked)}
      />
      </label>
    <input 
    className={`border mr-5 w-144 flex-1 ${complete? "line-through":"none"} `}
    type="text"
    value={text}
    readOnly= {!editable}
    ref={inputRef}
    id='check'
    name='check'
    
    onChange={(e)=>setText(e.target.value)}
    />
    <button
    className='border w-20 mr-2 '
    onClick={edit}
    >
      {editable?"Done":"Edit"}
    </button>
    <button
    className='border w-20'
    onClick={remove}
    >
      Del
    </button>
    </div>
  )
}

export default Todo