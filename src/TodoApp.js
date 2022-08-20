import { Typography, Paper, AppBar, Toolbar, Grid } from "@mui/material";
import React, { useEffect } from "react";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";
import useTodoState from "./hooks/useTodoState";

const classes = {
    paper: {
        padding: 0,
        margin: 0,
        height: "100vh",
        backgroundColor: "#fafafa"
    }
}

function TodoApp() {
    const initTodos = JSON.parse(localStorage.getItem("todos")) || []

    // const initTodos = [
    //     { id: 1, task: "Clean Fishtank", completed: false },
    //     { id: 2, task: "Wash Car", completed: true },
    //     { id: 3, task: "Grow Beard", completed: false },
    // ]

    const [todos, addTodo, removeTodo, toggleTodo, editTodo] = useTodoState(initTodos)

    // save todos array each time its state changes
    useEffect(() => {
        const stringifiedTodos = JSON.stringify(todos)
        localStorage.setItem("todos", stringifiedTodos)
    }, [todos])
    
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
                    { (todos && todos.length > 0) &&
                        <TodoList todos={todos} removeTodo={removeTodo} toggleTodo={toggleTodo} editTodo={editTodo} />
                    }
                </Grid>
            </Grid>
        </Paper>
    )
}

export default TodoApp