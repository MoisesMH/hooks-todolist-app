import { TextField } from "@mui/material";
import React, { useContext } from "react";
import { ActionsContext } from "./context/todos.context";
import useInputState from "./hooks/useInputState";

function EditTodoForm({ id, toggle, taskName }) {
    const { editTodo } = useContext(ActionsContext)
    const [value, changeVal, resetVal] = useInputState(taskName)
    const handleEdit = (e) => {
        e.preventDefault()
        editTodo(id, value)
        resetVal()
        toggle()
    }

    return (
        <form onSubmit={handleEdit} style={{ marginLeft: "0.7rem", width: "50%" }} >
            <TextField
                sx={{ marginBottom: "1rem" }}
                variant="filled"
                size="small"
                value={value}
                onChange={changeVal}
                margin="normal"
                label="New name"
                fullWidth
                // To write directly in the TextField component
                autoFocus
            />
        </form>
    )
}

export default EditTodoForm