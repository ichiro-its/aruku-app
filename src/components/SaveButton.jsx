import React, { useContext } from 'react';
import { Button, CircularProgress } from '@mui/material';

import WalkContext from '../context/WalkContext';

function SaveButton() {
  const { kinematic, walking } = useContext(WalkContext);

  return (
    <Button
      color="primary"
      variant="contained"
      sx={{ margin: 1, top: 5 }}
    >
      {/* {saving ? <CircularProgress size={24} /> : 'Save'} */}
    </Button>
  );
}

export default SaveButton;
