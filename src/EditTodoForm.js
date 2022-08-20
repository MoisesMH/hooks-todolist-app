import { TextField } from "@mui/material";
import React from "react";
import useInputState from "./hooks/useInputState";

function EditTodoForm({ editTodo, id, toggle, taskName }) {
    const [value, changeVal, resetVal] = useInputState(taskName)
    const handleEdit = (e) => {
        e.preventDefault()
        editTodo(id, value)
        resetVal()
        toggle()
    }

    return (
        <form onSubmit={handleEdit}>
            <TextField
                value={value}
                onChange={changeVal}
                margin="normal"
                label="New name"
                fullWidth
            />
        </form>
    )
}

export default EditTodoForm