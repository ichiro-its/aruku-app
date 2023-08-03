/* eslint-disable no-unused-vars */
import React, { useContext, useEffect } from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

import aruku_app from './proto/aruku_grpc_web_pb';

import ReloadButton from './components/ReloadButton';
import SaveButton from './components/SaveButton';
import WalkContext from './context/WalkContext';
import InitSetConfig from './components/InitSetConfig';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

function InitSettings() {
  const {
    walking, setKinematicValue, setWalkingValue,
  } = useContext(WalkContext);

  const client = new aruku_app.GetConfigClient('http://localhost:8080', null, null);
  const request = new aruku_app.Empty();

  const handleFetch = () => {
    client.getConfig(request, {}, (err, response) => {
      if (err) {
        console.log(`Unexpected error: code = ${err.code}` +
                    `, message = "${err.message}"`);
      } else {
        console.log(response.getMessage());
        // const data = JSON.parse(response);
        // const kinematicData = JSON.parse(`${data.json_kinematic.replace('/\\/g', '')}`);
        // const walkingData = JSON.parse(`${data.json_walking.replace('/\\/g', '')}`);
        // Object.keys(data).map((name) => Object.keys(data[name])
        //   .map((key) => setWalkingValue(name, key, data[name][key])));
        // Object.keys(walkingData).map((name) => Object.keys(walkingData[name])
        //   .map((key) => setWalkingValue(name, key, walkingData[name][key])));
      }
    });
  }

  useEffect(() => {
    handleFetch();
  })

  return (
    <Box sx={{ flexGrow: 1 }}>
      <InitSetConfig />
      <Grid container style={{ justifyContent: 'end' }}>
        <SaveButton />
        <ReloadButton />
      </Grid>
    </Box>
  );
}

export default InitSettings;
