import { Typography, Paper, AppBar, Toolbar, Grid } from "@mui/material";
import React, { useState } from "react";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";
import { v4 as uuid } from "uuid";

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
    
    const { paper } = classes
    return (
        <Paper sx={paper} elevation={0}>
            <AppBar color="primary" position="static" sx={{ height: "64px" }}>
                <Toolbar>
                    <Typography color="inherit">Todos with Hooks</Typography>
                </Toolbar>
            </AppBar>
            <Grid container justifyContent="center" sx={{ mt: "1rem" }}>
                <Grid item xs={11} md={8} lg={4} >
                    <TodoForm addTodo={addTodo} />
                    <TodoList todos={todos} removeTodo={removeTodo} toggleTodo={toggleTodo} />
                </Grid>
            </Grid>
        </Paper>
    )
}

export default TodoApp