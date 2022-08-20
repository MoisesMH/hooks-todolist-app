import { useState } from "react"
import { v4 as uuid } from "uuid";

// Custom hook for todos
export default function useTodoState(initTodos) {
    const [todos, setTodos] = useState(initTodos)

    const addTodo = (newTodoText) => {
        setTodos([
            ...todos,
            { id: uuid(), task: newTodoText, completed: false }
        ])
    }
    const removeTodo = (id) => {
        const updatedTodos = todos.filter(t => t.id !== id)
        setTodos(updatedTodos)
    }
    const toggleTodo = (id) => {
        const updatedTodos = todos.map(t => t.id === id ?
            { ...t, completed: !t.completed} : t
        )
        setTodos(updatedTodos)
    }
    const editTodo = (id, task) => {
        const updatedTodos = todos.map(t => t.id === id ?
            { ...t, task } : t
        )
        setTodos(updatedTodos)
    }
    
    return [
        todos,
        addTodo,
        removeTodo,
        toggleTodo,
        editTodo
    ]
} 