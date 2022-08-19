import { Typography, Paper, AppBar, Toolbar, Grid } from "@mui/material";
import React, { useState } from "react";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";

const classes = {
    paper: {
        padding: 0,
        margin: 0,
        height: "100vh",
        backgroundColor: "#fafafa"
    }
}

function TodoApp() {
    const initTodos = [
        { id: 1, task: "Clean Fishtank", completed: false },
        { id: 2, task: "Wash Car", completed: true },
        { id: 3, task: "Grow Beard", completed: false },
    ]

    const [todos, setTodos] = useState(initTodos)
    const addTodo = (newTodoText) => {
        setTodos([
            ...todos, 
            { id: 4, task: newTodoText, completed: false }
        ])
    }
    
    const { paper } = classes
    return (
        <Paper sx={paper} elevation={0}>
            <AppBar color="primary" position="static" sx={{ height: "64px" }}>
                <Toolbar>
                    <Typography color="inherit">Todos with Hooks</Typography>
                </Toolbar>
            </AppBar>
            <TodoForm addTodo={addTodo} />
            <TodoList todos={todos} />
        </Paper>
    )
}

export default TodoApp