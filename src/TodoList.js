import { Divider, List, ListItem, ListItemText, Paper } from "@mui/material";
import React from "react";

function TodoList({ todos }) {
    const todoList = todos.map(t => (
        <>
            <ListItem>
                <ListItemText>{t.task}</ListItemText>
            </ListItem>
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