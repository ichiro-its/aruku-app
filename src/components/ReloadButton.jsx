import React, { useState, useContext } from 'react';
import { LoadingButton } from '@mui/lab';

import aruku_interfaces from '../proto/aruku_grpc_web_pb';

import WalkContext from '../context/WalkContext';

function ReloadButton() {
  const {
    GRPC_WEB_API_URL, setPublished, setKinematic, setWalking,
  } = useContext(WalkContext);

  const client = new aruku_interfaces.ConfigClient(GRPC_WEB_API_URL, null, null);
  const request = new aruku_interfaces.Empty();
  const [isLoading, setIsLoading] = useState(false);

  const handleReload = () => {
    setIsLoading(true);

    client.getConfig(request, {}, (err, response) => {
      if (err) {
        console.log(`Unexpected error: code = ${err.code}, message = "${err.message}"`);
      } else {
        setKinematic(JSON.parse(response.array[0]));
        setWalking(JSON.parse(response.array[1]));
      }
    });

    setPublished(false);
    setIsLoading(false);
  };

  return (
    <LoadingButton
      onClick={handleReload}
      color="warning"
      variant="contained"
      sx={{ margin: 1, top: 5 }}
      loading={isLoading}
    >
      Reload
    </LoadingButton>
  );
}

export default ReloadButton;
