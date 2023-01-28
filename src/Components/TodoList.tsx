import * as React from 'react';
import List from '@mui/material/List';
import TodoProps from '../Types/TodoProps';
import TodoItem from './TodoItem';

interface TodoListProps {
  todos: Pick<TodoProps, "id" | "task" | "completed">[],
  toggleComplete: (id: string) => void
}

export default function TodoList({todos, toggleComplete}: TodoListProps) {
  return (
    <List dense sx={{ width: '100%', bgcolor: 'background.paper' }}>
      {todos.map(todoItem => <TodoItem key={todoItem.id} {...todoItem} handleToggle={toggleComplete}/>)}
    </List>
  );
}