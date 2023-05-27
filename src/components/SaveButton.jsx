import React, { useContext } from 'react';
import { Button, CircularProgress } from '@mui/material';

import WalkContext from '../context/WalkContext';
import ros2_ws from '../proto/aruku_grpc_web_pb';

function SaveButton() {
  const { kinematic, walking } = useContext(WalkContext);

  const client = new ros2_ws.SaveConfigClient('http://localhost:8080', null, null);
  const request = new ros2_ws.SetWalking();

  const handleSave = () => {
    const kinematicData = JSON.stringify(kinematic);
    const walkingData = JSON.stringify(walking);
    request.setJsonKinematic(kinematicData);
    request.setJsonWalking(walkingData);
    client.saveConfig(request, {}, (err, response) => {
      if (err) {
        console.log(err);
      } else {
        console.log(response.getMessage());
      }
    });
  };

  return (
    <Button
      onClick={handleSave}
      // disabled={client == null || saving}
      color="primary"
      variant="contained"
      sx={{ margin: 1, top: 5 }}
    >
      {/* {saving ? <CircularProgress size={24} /> : 'Save'} */}
      Save
    </Button>
  );
}

export default SaveButton;
