import React from 'react';
import TodoItem from './TodoItem';
import { List } from '@mui/material';

const TodoList = ({ todos, toggleTodo, deleteTodo }) => {
  return (
    <List>
      {todos.map(todo => (
        <TodoItem key={todo.id} todo={todo} toggleTodo={toggleTodo} deleteTodo={deleteTodo} />
      ))}
    </List>
  );
};

export default TodoList;
