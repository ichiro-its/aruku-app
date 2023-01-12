/* eslint-disable no-unused-vars */
import React, { useContext, useEffect } from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

import {
  ClientProvider, PublisherProvider, useClient, useLogger, useHandleProcess,
} from 'kumo-app';

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

  const client = useClient();
  const logger = useLogger();

  const [fetching, handleFetch] = useHandleProcess(() => client
    .call({})
    .then((response) => {
      logger.success('Successfully get config.');
      const kinematicData = JSON.parse(`${response.json_kinematic.replace('/\\/g', '')}`);
      const walkingData = JSON.parse(`${response.json_walking.replace('/\\/g', '')}`);
      Object.keys(kinematicData).map((name) => Object.keys(kinematicData[name])
        .map((key) => setKinematicValue(name, key, kinematicData[name][key])));
      Object.keys(walkingData).map((name) => Object.keys(walkingData[name])
        .map((key) => setWalkingValue(name, key, walkingData[name][key])));
    })
    .catch((err) => {
      logger.error(`Failed to load config! ${err.message}.`);
    }), 500);

  useEffect(() => {
    handleFetch();
  }, []);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Item onLoad={handleFetch}>
        <PublisherProvider
          messageType="aruku_interfaces/msg/SetConfig"
          topicName="set_config"
        >
          <InitSetConfig />
        </PublisherProvider>
        <Grid container style={{ justifyContent: 'end' }}>
          <ClientProvider
            serviceType="aruku_interfaces/srv/SaveConfig"
            serviceName="/aruku/config/save_config"
          >
            <SaveButton />
          </ClientProvider>
          <ClientProvider
            serviceType="aruku_interfaces/srv/GetConfig"
            serviceName="/aruku/config/get_config"
          >
            <ReloadButton />
          </ClientProvider>
        </Grid>
      </Item>
    </Box>
  );
}

export default InitSettings;
