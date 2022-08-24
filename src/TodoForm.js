import { Paper, TextField } from "@mui/material";
import React, { useContext } from "react";
import { ActionsContext } from "./context/todos.context";
import useInputState from "./hooks/useInputState";

function TodoForm() {
    const [value, changeVal, resetVal] = useInputState("")
    const { addTodo } = useContext(ActionsContext)

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