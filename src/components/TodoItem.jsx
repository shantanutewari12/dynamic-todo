import React from 'react';
import { ListItem, ListItemText, ListItemSecondaryAction, IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';


const TodoItem = ({ todo, toggleTodo, deleteTodo }) => {
  return (
    <ListItem button onClick={() => toggleTodo(todo.id)}>
      <ListItemText primary={todo.task} style={{ textDecoration: todo.completed ? 'line-through' : 'none' }} />
      <ListItemSecondaryAction>
        <IconButton edge="end" aria-label="delete" onClick={() => deleteTodo(todo.id)}>
          <DeleteIcon />
        </IconButton>
      </ListItemSecondaryAction>
    </ListItem>
  );
};

export default TodoItem;
