import { Divider, List, Paper } from "@mui/material";
import React from "react";
import Todo from "./Todo";

function TodoList({ todos, removeTodo, toggleTodo, editTodo }) {
    const todoList = todos.map((t,i) => (
        <>
            <Todo
                {...t}
                key={t.id}
                removeTodo={removeTodo}
                toggleTodo={toggleTodo}
                editTodo={editTodo}
            />
            {/* To not display the last divider */}
            {(i < todos.length - 1) && <Divider />}
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