import React, { useState } from "react"
import Input from "./components/Input"
import { useSelector } from "react-redux"
function App() {
  const useTodo = useSelector(state=>state.todo)
  const [todos,setTodos] = useState([])
  setTodos(useTodo)
  return (
    <>
    <div className="flex justify-center my-10 flex-col ">
    <h1 className='border text-gray-700 bg-gray-400  w-dvh mb-10'>Todo List</h1>
    <Input/>
    <div>
      {
        todos?.map((todo)=>(
          <div key={todo.id}>
            <Todo todo={todo.text}/>
          </div>
        ))
      }
    </div>
    </div>
    </>
  )
}

export default App
