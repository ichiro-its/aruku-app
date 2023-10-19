/* eslint-disable no-useless-concat */
import React, { useContext } from 'react';
import { Button } from '@mui/material';

import aruku_interfaces from '../proto/aruku_grpc_web_pb';

import WalkContext from '../context/WalkContext';

function ReloadButton() {
  const { GRPC_WEB_API_URL, setPublished, setKinematic, setWalking } = useContext(WalkContext);

  const client = new aruku_interfaces.ConfigClient(GRPC_WEB_API_URL, null, null);
  const request = new aruku_interfaces.Empty();

  const handleReload = () => {
    client.getConfig(request, {}, (err, response) => {
      if (err) {
        console.log(`Unexpected error: code = ${err.code}` + `, message = "${err.message}"`);
      } else {
        setKinematic(JSON.parse(response.array[0]));
        setWalking(JSON.parse(response.array[1]));
      }
    });

    setPublished(false);
  };

  return (
    <Button
      onClick={handleReload}
      color="warning"
      variant="contained"
      sx={{ margin: 1, top: 5 }}
    >
      Reload
    </Button>
  );
}

export default ReloadButton;
