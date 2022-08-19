import { Divider, List, Paper } from "@mui/material";
import React from "react";
import Todo from "./Todo";

function TodoList({ todos, removeTodo, toggleTodo }) {
    const todoList = todos.map(t => (
        <>
            <Todo
                task={t.task}
                key={t.id}
                id={t.id}
                completed={t.completed}
                removeTodo={removeTodo}
                toggleTodo={toggleTodo}
            />
            <Divider />
        </>
    ))

    return (
        <Paper>
            <List>
                { todoList }
            </List>
        </Paper>
    )
}

export default TodoList