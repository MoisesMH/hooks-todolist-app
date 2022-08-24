import { useReducer } from "react"

export default function useTodoReducer(reducer, initTodoState) {
    // We start with a piece of state: { todos: initTodos }
    const [todos, dispatch] = useReducer(reducer, initTodoState)

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

    // Declaring the actions object
    const actions = {
        addTodo,
        removeTodo,
        toggleTodo,
        editTodo
    }

    return [
        todos,
        actions
    ]
}