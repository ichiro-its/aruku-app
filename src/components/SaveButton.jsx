/* eslint-disable no-useless-concat */
import React, { useState, useContext } from 'react';
import { LoadingButton } from '@mui/lab';

import WalkContext from '../context/WalkContext';
import aruku_interfaces from '../proto/aruku_grpc_web_pb';

function SaveButton() {
  const { GRPC_WEB_API_URL, kinematic, walking } = useContext(WalkContext);

  const client = new aruku_interfaces.ConfigClient(GRPC_WEB_API_URL, null, null);
  const message = new aruku_interfaces.ConfigWalking();
  const [isLoading, setIsLoading] = useState(false);

  const handleSave = () => {
    setIsLoading(true);
    message.setJsonKinematic(JSON.stringify(kinematic));
    message.setJsonWalking(JSON.stringify(walking));

    client.saveConfig(message, {}, (err) => {
      if (err) {
        console.log(`Unexpected error: code = ${err.code}` + `, message = "${err.message}"`);
      }
    });

    setIsLoading(false);
  };

  return (
    <LoadingButton
      onClick={handleSave}
      color="primary"
      variant="contained"
      sx={{ margin: 1, top: 5 }}
      loading={isLoading}
    >
      Save
    </LoadingButton>
  );
}

export default SaveButton;
