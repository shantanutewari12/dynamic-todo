import React from 'react';
import { ButtonGroup, Button } from '@mui/material';

const Filter = ({ setFilter }) => {
  return (
    <ButtonGroup variant="contained" aria-label="outlined primary button group">
      <Button onClick={() => setFilter('all')}>All</Button>
      <Button onClick={() => setFilter('completed')}>Completed</Button>
      <Button onClick={() => setFilter('pending')}>Pending</Button>
    </ButtonGroup>
  );
};

export default Filter;
