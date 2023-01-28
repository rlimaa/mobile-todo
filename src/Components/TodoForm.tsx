import { Button, Container, TextField } from "@mui/material";
import { FormEvent } from "react";
import { useInput } from "../Hooks/useInput";
import "./TodoForm.css"

interface TodoFormProps {
    create: (task: string) => void
};

export default function TodoForm(props: TodoFormProps) {
    const inputHook = useInput("");
    const task = inputHook.value, setTask = inputHook.onChange, resetTask = inputHook.reset;

    function onSubmit(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();
        props.create(task);
        resetTask();
    }

    return <>
        <div className="FormContainer">
            <form onSubmit={onSubmit}>
                <TextField 
                    fullWidth 
                    value={task} 
                    onChange={setTask} 
                    />
                <Button 
                    type="submit" 
                    style={{
                        marginTop: "1rem",
                        alignSelf: "flex-end"
                    }} 
                    variant="contained">Create</Button>
            </form>
        </div>
    </>
        ;
}