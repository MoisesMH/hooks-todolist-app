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
        <Paper>
            <form onSubmit={handleSubmit}>
                <TextField value={value} onChange={changeVal} />
            </form>
        </Paper>
    )
}

export default TodoForm