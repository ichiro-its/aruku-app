import React, {
  useContext, useEffect,
} from 'react';
import { Button, CircularProgress } from '@mui/material';

import WalkContext from '../context/WalkContext';

function ReloadButton() {
  const {
    setKinematicValue, setWalkingValue,
  } = useContext(WalkContext);

  return (
    <Button
      color="warning"
      variant="contained"
      sx={{ margin: 1, top: 5 }}
    >
      {/* {reloading ? <CircularProgress size={24} /> : 'Reload'} */}
      Reload
    </Button>
  );
}

export default ReloadButton;
