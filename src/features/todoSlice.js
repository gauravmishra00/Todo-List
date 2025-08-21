import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
    todos: [
        //  {
        //     id :nanoid(),
        //     text:"text",
        //     isCompeleted :false
        // }
    ]
}
const todo = createSlice({
    name: "todo",
    initialState,
    reducers:
    {
        addTodo: (state, action) => {
            const todo = {
                id: nanoid(),
                text: action.payload
            }
            state.todos.push(todo)
        },
        removeTodo: (state, action) => {
            state.todos = state.todos.filter((todo) => todo.id !== action.payload)
        },
        updateTodo: (state, action) => {
            state.todos = state.todos.map((todo) =>
            (
                todo.id === action.payload.id ? { ...todo, text: action.payload.text } : todo
            )
            )
        },
        isCompelete: (state, action) => {
            state.todos = state.todos.map(
                (todo) => (todo.id === action.payload.id ? { ...todo, isCompeleted: !todo.isCompeleted } : todo)
            )
        },
        
    }
}
)

export const { addTodo, removeTodo, updateTodo, isCompelete } = todo.actions;
export default todo.reducer