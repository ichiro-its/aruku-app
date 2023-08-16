import React, {
  useContext, useEffect,
} from 'react';
import { Button, CircularProgress } from '@mui/material';

import aruku_interfaces from '../proto/aruku_grpc_web_pb';

import WalkContext from '../context/WalkContext';

function ReloadButton() {
  const {
    grpc_web_address, setKinematicValue, setWalkingValue,
  } = useContext(WalkContext);

  const client = new aruku_interfaces.ConfigClient(grpc_web_address, null, null);
  const request = new aruku_interfaces.Empty();

  const handleReload = () => {
    client.getConfig(request, {}, (err, response) => {
      if (err) {
        console.log(`Unexpected error: code = ${err.code}` +
                    `, message = "${err.message}"`);;
      } else {
        const kinematicData = JSON.parse(response.array[0]);
        const walkingData = JSON.parse(response.array[1]);
        Object.keys(kinematicData).map((name) => Object.keys(kinematicData[name])
          .map((key) => setKinematicValue(name, key, kinematicData[name][key])));
        Object.keys(walkingData).map((name) => Object.keys(walkingData[name])
          .map((key) => setWalkingValue(name, key, walkingData[name][key])));
      }
    });
  }

  useEffect(() => {
    handleReload();
  })

  return (
    <Button
      onClick={handleReload}
      // disabled={client == null || reloading}
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
