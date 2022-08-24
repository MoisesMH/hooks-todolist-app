import { useReducer } from "react"
import { v4 as uuid } from "uuid"

// Action is the payload to apply to the state
// const reducer = (state, action) => {
const reducer = ({ todos }, { type, payload }) => {
    const { id, task } = payload
    const updatedTodos = { value: null }

    // These are like the mutations on Vue.js
    switch (type) {
        case "addTodo":
            updatedTodos.value = [
                ...todos,
                { id: uuid(), task, completed: false }
            ]
            return { todos: updatedTodos.value }
        
        case "removeTodo":
            updatedTodos.value = todos.filter(t => t.id !== id)
            return { todos: updatedTodos.value }

        case "toggleTodo":
            updatedTodos.value = todos.map(t => t.id === id ?
                { ...t, completed: !t.completed } : t
            )
            return { todos: updatedTodos.value }
        
        case "editTodo":
            updatedTodos.value = todos.map(t => t.id === id ?
                { ...t, task } : t
            )
            return { todos: updatedTodos.value }

        default:
            console.log("Not a valid expression");
    }
}

export default function useTodoReducer(initTodos) {
    // We start with a piece of state: { todos: initTodos }
    const [state, dispatch] = useReducer(reducer, { todos: initTodos })

    // These are like the actions in Vue.js
    const addTodo = (task) => {
        dispatch({ type: "addTodo", payload: { task } })
    }
    
    const removeTodo = (id) => {
        dispatch({ type: "removeTodo", payload: { id } })
    }
    
    const toggleTodo = (id) => {
        dispatch({ type: "toggleTodo", payload: { id } })
    }
    
    const editTodo = (id, task) => {
        dispatch({ type: "editTodo", payload: { id, task } })
    }

    return {
        todos: state.todos,
        addTodo,
        removeTodo,
        toggleTodo,
        editTodo
    }
}