interface TodoProps {
    id: string,
    task: string,
    completed: boolean,
    handleToggle: (id: string) => void
}

export default TodoProps;