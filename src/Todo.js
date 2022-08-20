import { Checkbox, IconButton, ListItem, ListItemSecondaryAction, ListItemText } from "@mui/material";
import useToggle from "./hooks/useToggleState";
import { Delete, Edit } from '@mui/icons-material';
import React from "react";
import EditTodoForm from "./EditTodoForm";

function Todo({ task, id, completed, removeTodo, toggleTodo, editTodo }) {
    const handleRemove = () => removeTodo(id)
    const handleToggle = () => toggleTodo(id)
    const [isEditing, toggleIsEditing] = useToggle(false)
    return (
        <ListItem>
            {isEditing ?
                <EditTodoForm editTodo={editTodo} id={id} taskName={task} toggle={toggleIsEditing} />
                :
                <>
                    <Checkbox
                        tabIndex={-1}
                        checked={completed}
                        onClick={handleToggle}
                    />
                    <ListItemText
                        sx={{ textDecoration: completed && "line-through" }}
                    >
                        {task}
                    </ListItemText>
                    <ListItemSecondaryAction>
                        <IconButton aria-label="Delete" onClick={handleRemove}>
                            <Delete />
                        </IconButton>
                        <IconButton aria-label="Edit" onClick={toggleIsEditing}>
                            <Edit />
                        </IconButton>
                    </ListItemSecondaryAction>
                </>
            }
        </ListItem>
    )
}

export default Todo