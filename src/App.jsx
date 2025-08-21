import React from "react"
import Input from "./components/Input"
import { useDispatch, useSelector } from "react-redux"
import Todo from "./components/Todo"
function App() {
  const todos = useSelector(state => state.todo.todos)

  return (
    <>
      <div className="flex  my-10 flex-col m-auto border h-[80vh] w-[60vw] overflow-y-scroll bg-gray-400">
        <h1 className='border text-white bg-gray-600  w-[100%] mb-10 text-center text-7xl uppercase sticky top-0'>Todo List</h1>
        <Input />


        <div >
          {
            todos.map((todo) => (
              <div key={todo.id}>
                <Todo todo={todo.text} id={todo.id} />
              </div>
            ))
          }
        </div>
      </div>
    </>
  )
}

export default App
