import React, { useContext } from 'react';
import { Button, CircularProgress } from '@mui/material';

import WalkContext from '../context/WalkContext';
import aruku_app from '../proto/aruku_grpc_web_pb';

function SaveButton() {
  const { kinematic, walking } = useContext(WalkContext);

  const client = new aruku_app.SaveConfigClient('http://localhost:8080', null, null);
  const request = new aruku_app.ConfigWalking();

  const handleSave = () => {
    const kinematicData = JSON.stringify(kinematic);
    const walkingData = JSON.stringify(walking);
    request.setJsonKinematic(kinematicData);
    request.setJsonWalking(walkingData);
    client.saveConfig(request, {}, (err, response) => {
      if (err) {
        console.log(`Unexpected error: code = ${err.code}` +
                    `, message = "${err.message}"`);
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
