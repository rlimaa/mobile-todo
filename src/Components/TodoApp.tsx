import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import TodoList from './TodoList';
import TodoForm from './TodoForm';
import { Paper } from '@mui/material';
import { v4 as uuidv4 } from "uuid";
import TodoProps from '../Types/TodoProps';

export default function TodoApp() {
  const initTodosStr = localStorage.getItem("todos");
  type Type = Pick<TodoProps, "id" | "task" | "completed">;
  const [todos, setTodos] = React.useState<Type[]>(initTodosStr ? JSON.parse(initTodosStr) :new Array<Type>());

  function createTodo(task: string) {
    const newTodos: Type[] = [...todos, {
      id: uuidv4(),
      task: task,
      completed: false
    }];
    setTodos(newTodos);
    localStorage.setItem("todos", JSON.stringify(newTodos));
  }

  function toggleComplete(id: string) {
    const changed = todos.find(x => x.id === id);
    if(changed)
    {
      changed.completed = !changed.completed;
      const newTodos = [...todos];
      setTodos(newTodos);
      localStorage.setItem("todos", JSON.stringify(newTodos));
    }
  }

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Paper style={{
          padding: 0,
          margin: 0,
          height: "100vh",
          backgroundColor: "#fafafa"
      }}>
        <AppBar style={{textAlign: "center"}} position="static">
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Todo App
            </Typography>
          </Toolbar>
        </AppBar>
        <TodoForm create={createTodo}/>
        <TodoList todos={todos} toggleComplete={toggleComplete}/>
      </Paper>
    </Box>
  );
}