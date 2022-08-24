import React, { createContext } from "react";
// import useTodoState from "../hooks/useTodoState";
import useTodoReducer from "../reducers/todo.reducer";

const defaultTodos = [
    { id: 1, task: "Mow the lawn using goars", completed: false },
    { id: 2, task: "Release lady bugs into garden", completed: true }
]

// All of our logic has been moved over to the context
// This is effective if we don't want to pass down many props
// Because we're distributing the info over here
// A problem is that our context is rerendering every time a pice of state changes
// For example, when creating a todo, editTodo function is rerendering, we didn't even change the state
// from the editTodo method
// Creating a new todo is causing to rerender all of our context, even though we're not using all of its functionalities
// The solution: one context for our todos state, another for our methods to avoid unnecessary rerendering because of the change of the state

export const TodosContext = createContext()

export function TodosProvider({ children }) {
    // const [todos, addTodo, removeTodo, toggleTodo, editTodo] = useTodoState(defaultTodos)
    // const TodosStuff = useTodoState(defaultTodos)
    const TodosStuff = useTodoReducer(defaultTodos)
    return (
        // spreading because with useTodoState returns is an array, and we want an object
        // So we spread and wrap the values and functions in an object
        <TodosContext.Provider value={TodosStuff}>
            { children }
        </TodosContext.Provider>
    )
}