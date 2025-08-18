// import React, { useState } from 'react'
// import { useSelector } from 'react-redux'
function Todo({todo}) {
  // const [task,setTask] = useState('')
  // const useTodo = useSelector(state=>state.todo)
  return (
    <div className='bg-yellow-500'>
    <input 
    className='border mr-5 w-120'
    type="text"
    // placeholder='Enter the task...'
    value={todo}
    // onChange={(e)=>setTodo(e.target.value)}
    readOnly
    />
    </div>
  )
}

export default Todo