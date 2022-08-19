import { Paper, TextField } from "@mui/material";
import React from "react";
import useInputState from "./hooks/useInputState";

function TodoForm({ addTodo }) {
    const [value, changeVal, resetVal] = useInputState("")

    const handleSubmit = (e) => {
        e.preventDefault()
        addTodo(value)
        resetVal()
    }

    return (
        <Paper sx={{ m: "1rem 0", p: "0 1rem 0.4rem 1rem" }}>
            <form onSubmit={handleSubmit}>
                <TextField
                    value={value}
                    onChange={changeVal}
                    margin="normal"
                    label="Add New Todo"
                    fullWidth
                />
            </form>
        </Paper>
    )
}

export default TodoForm