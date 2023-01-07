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
import SwitchActive from './components/SwitchActive';
import NumberField from './components/NumberField';
import WalkSetWalking from './components/WalkSetWalking';
import WalkSetConfig from './components/WalkSetConfig';
import WalkContext from './context/WalkContext';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

function WalkSettings() {
  const {
    walking, kinematic, setKinematicValue, setWalkingValue,
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
        <Grid container spacing={1}>
          <Grid item xs={12} md={8} lg={4}>
            <Item>
              <PublisherProvider
                messageType="aruku_interfaces/msg/SetWalking"
                topicName="/walking/set_walking"
              >
                <WalkSetWalking />
              </PublisherProvider>
              {Object.keys(walking.balance)
                .map((key) => {
                  if (typeof walking.balance[key] === 'boolean') {
                    return (
                      <SwitchActive name={key} value={walking.balance[key]} type="walking" />
                    );
                  }
                  return (
                    <NumberField name="balance" keys={key} value={walking.balance[key]} type="walking" />
                  );
                })}
              <NumberField name="ratio" keys="forward_hip_comp_ratio" value={kinematic.ratio.forward_hip_comp_ratio} type="kinematic" />
            </Item>
          </Grid>
          <PublisherProvider
            messageType="aruku_interfaces/msg/SetConfig"
            topicName="/aruku/config/set_config"
          >
            <WalkSetConfig />
          </PublisherProvider>
        </Grid>
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

export default WalkSettings;
