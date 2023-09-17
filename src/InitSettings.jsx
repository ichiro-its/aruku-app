/* eslint-disable no-unused-vars */
import React, { useContext, useRef, useEffect } from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

import aruku_interfaces from './proto/aruku_grpc_web_pb';

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
    published, setPublished, setKinematic, setWalking,
  } = useContext(WalkContext);

  const client = new aruku_interfaces.ConfigClient(`${import.meta.env.GRPC_WEB_API_URL}`, null, null);
  const request = new aruku_interfaces.Empty();

  const handleFetch = () => {
    client.getConfig(request, {}, (err, response) => {
      if (err) {
        console.log(`Unexpected error: code = ${err.code}` +
                    `, message = "${err.message}"`);
      } else {
        setKinematic(JSON.parse(response.array[0]));
        setWalking(JSON.parse(response.array[1]));
      }
    });
  }

  useEffect(() => {
    if (!published) {
      handleFetch();
      setPublished(true);
    }
  }, [])

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
