import React, { useState } from 'react';
import { TextField, Button } from '@mui/material';

const AddTodo = ({ addTodo }) => {
  const [task, setTask] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (task.trim()) {
      addTodo(task);
      setTask('');
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ display: 'flex', marginBottom: '20px' }}>
      <TextField
        label="Add a new task"
        variant="outlined"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        fullWidth
      />
      <Button type="submit" variant="contained" color="primary" style={{ marginLeft: '10px' }}>
        Add
      </Button>
    </form>
  );
};

export default AddTodo;
