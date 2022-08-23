import { Divider, List, Paper } from "@mui/material";
import React, { useContext } from "react";
import { TodosContext } from "./context/todos.context";
import Todo from "./Todo";

// function TodoList({ todos, removeTodo, toggleTodo, editTodo }) {
function TodoList() {
    const { todos } = useContext(TodosContext)
    const todoList = todos && todos.map((t,i) => (
        <>
            <Todo
                {...t}
                key={t.id}
            />
            {/* To not display the last divider */}
            {(i < todos.length - 1) && <Divider />}
        </>
    ))

    return (
        <Paper>
            {(todos && todos.length > 0) &&
                <List>
                    {todoList}
                </List>
            }
        </Paper>
    )
}

export default TodoList