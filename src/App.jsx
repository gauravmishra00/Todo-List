import React, { useState,useEffect } from "react"
import Input from "./components/Input"
import { useSelector } from "react-redux"
import Todo from "./components/Todo"
function App() {
  const todos = useSelector(state=>state.todo.todos)

  return (
    <>
    <div className="flex justify-center my-10 flex-col m-auto border">
    <h1 className='border text-gray-700 bg-gray-400  w-dvh mb-10 text-center text-7xl uppercase'>Todo List</h1>
    <Input/>
    <div >
      {
        todos.map((todo)=>(
          <div key={todo.id}>
            <Todo todo={todo.text} id={todo.id}/>
          </div>
        ))
      }
    </div>
    </div>
    </>
  )
}

export default App
