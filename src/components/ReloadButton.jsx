import React, {
  useContext, useEffect,
} from 'react';
import { Button, CircularProgress } from '@mui/material';

import aruku_app from '../proto/aruku_grpc_web_pb';

import WalkContext from '../context/WalkContext';

function ReloadButton() {
  const {
    setKinematicValue, setWalkingValue,
  } = useContext(WalkContext);

  const client = new aruku_app.GetConfigClient('http://localhost:8080', null, null);
  const request = new aruku_app.Empty();

  const handleReload = () => {
    client.getConfig(request, {}, (err, response) => {
      if (err) {
        console.log(`Unexpected error: code = ${err.code}` +
                    `, message = "${err.message}"`);;
      } else {
        console.log(response.getMessage());
        // const data = response.getMessage();
        // const kinematicData = JSON.parse(`${data.json_kinematic.replace('/\\/g', '')}`);
        // const walkingData = JSON.parse(`${data.json_walking.replace('/\\/g', '')}`);
        // Object.keys(kinematicData).map((name) => Object.keys(kinematicData[name])
        //   .map((key) => setKinematicValue(name, key, kinematicData[name][key])));
        // Object.keys(walkingData).map((name) => Object.keys(walkingData[name])
        //   .map((key) => setWalkingValue(name, key, walkingData[name][key])));
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
