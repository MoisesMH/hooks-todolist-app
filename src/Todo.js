import { Checkbox, IconButton, ListItem, ListItemSecondaryAction, ListItemText } from "@mui/material";
import { Delete, Edit } from '@mui/icons-material';
import React from "react";

function Todo({ task, id, completed, removeTodo, toggleTodo }) {
    const handleRemove = () => removeTodo(id)
    const handleToggle = () => toggleTodo(id)
    return (
        <ListItem>
            <Checkbox tabIndex={-1} checked={completed} onClick={handleToggle} />
            <ListItemText sx={{textDecoration: completed && "line-through"}} >{ task }</ListItemText>
            <ListItemSecondaryAction>
                <IconButton aria-label="Delete" onClick={handleRemove}>
                    <Delete />
                </IconButton>
                <IconButton aria-label="Edit">
                    <Edit />
                </IconButton>
            </ListItemSecondaryAction>
        </ListItem>
    )
}

export default Todo