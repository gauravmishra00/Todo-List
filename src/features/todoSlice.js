import { createSlice , nanoid } from "@reduxjs/toolkit";

const initialState = {
    todos : {
        id :1,
        text:"task 1"
    }
}
const todo = createSlice({
    name : "todo",
    initialState,
    reducers :
    {
        addTodo : (state,action)=>
        {
            state.todos.text = action.payload.text
            state.todos.id = action.payload.id
        },
        removeTodo : (state,action)=>{
            state.todos.id = action.payload.id
        }
    }
}
)

export const {addTodo,removeTodo} = todo.actions;
export default todo.reducer