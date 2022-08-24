import { Checkbox, IconButton, ListItem, ListItemSecondaryAction, ListItemText } from "@mui/material";
import useToggle from "./hooks/useToggleState";
import { Delete, Edit } from '@mui/icons-material';
import React, { memo, useContext } from "react";
import EditTodoForm from "./EditTodoForm";
import { ActionsContext } from "./context/todos.context";

function Todo({ task, id, completed }) {
    const { removeTodo, toggleTodo } = useContext(ActionsContext)
    const handleRemove = () => removeTodo(id)
    const handleToggle = () => toggleTodo(id)
    const [isEditing, toggleIsEditing] = useToggle(false)
    console.log("TODO RE-RENDER: ", task)
    return (
        <ListItem sx={{ height: "4rem" }} >
            {isEditing ?
            // We no longer pass down editTodo as a prop, because we're getting it from the TodosContext
                <EditTodoForm id={id} taskName={task} toggle={toggleIsEditing} />
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

export default memo(Todo)