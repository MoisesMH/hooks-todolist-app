import { Typography, Paper, AppBar, Toolbar, Grid } from "@mui/material";
import React from "react";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";
import { TodosProvider } from "./context/todos.context";

const classes = {
    paper: {
        padding: 0,
        margin: 0,
        height: "100vh",
        backgroundColor: "#fafafa"
    }
}

function TodoApp() {
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
                    <TodosProvider>
                        <TodoForm />
                        <TodoList />
                    </TodosProvider>
                </Grid>
            </Grid>
        </Paper>
    )
}

export default TodoApp