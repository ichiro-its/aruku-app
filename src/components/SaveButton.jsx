import React, { useContext } from 'react';
import { Button, CircularProgress } from '@mui/material';

import WalkContext from '../context/WalkContext';
import aruku_interfaces from '../proto/aruku_grpc_web_pb';

function SaveButton() {
  const { grpc_web_address, kinematic, walking } = useContext(WalkContext);

  const client = new aruku_interfaces.ConfigClient(grpc_web_address, null, null);
  const message = new aruku_interfaces.ConfigWalking();

  const handleSave = () => {
    message.setJsonKinematic( JSON.stringify(kinematic));
    message.setJsonWalking(JSON.stringify(walking));

    client.saveConfig(message, {}, (err, response) => {
      if (err) {
        console.log(`Unexpected error: code = ${err.code}` +
                    `, message = "${err.message}"`);
      } else {
        console.log(response);
        setPublished(false);
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
