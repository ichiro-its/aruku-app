/* eslint-disable no-unused-vars */
import React, { useContext } from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

import { ClientProvider, PublisherProvider } from 'kumo-app';

import NumberField from './components/NumberField';
import ReloadButton from './components/ReloadButton';
import SaveButton from './components/SaveButton';
import SwitchActive from './components/SwitchActive';
import WalkContext from './context/WalkContext';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

function WalkSettings() {
  const { main, walking, kinematic } = useContext(WalkContext);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Item>
        <Grid container spacing={1}>
          <Grid item xs={12} md={6} lg={4}>
            <Item>
              {Object.keys(main)
                .map((name) => {
                  if (typeof main[name] === 'boolean') {
                    return (
                      <PublisherProvider
                        messageType="aruku_interfaces/msg/SetWalking"
                        topicName="set_walking"
                      >
                        <SwitchActive key={name} name={name} value={main[name]} type="main" />
                      </PublisherProvider>
                    );
                  }
                  return (
                    <PublisherProvider
                      messageType="aruku_interfaces/msg/SetWalking"
                      topicName="set_walking"
                    >
                      <NumberField key={name} keys={name} value={main[name]} type="main" />
                    </PublisherProvider>
                  );
                })}
              {Object.keys(walking)
                .slice(0, 1)
                .map((name) => Object.keys(walking[name]).map((key) => {
                  if (typeof walking[name][key] === 'boolean') {
                    return (
                      <PublisherProvider
                        messageType="aruku_interfaces/msg/SetConfig"
                        topicName="set_config"
                      >
                        <SwitchActive key={key} name={key} value={walking[name][key]} type="walking" />
                      </PublisherProvider>
                    );
                  }
                  return (
                    <PublisherProvider
                      messageType="aruku_interfaces/msg/SetConfig"
                      topicName="set_config"
                    >
                      <NumberField key={key} name={name} keys={key} value={walking[name][key]} type="walking" />
                    </PublisherProvider>
                  );
                }))}
              {Object.keys(kinematic)
                .slice(0, 1)
                .map((name) => Object.keys(kinematic[name])
                  .slice(0, 1)
                  .map((key) => (
                    <PublisherProvider
                      messageType="aruku_interfaces/msg/SetConfig"
                      topicName="set_config"
                    >
                      <NumberField key={key} name={name} keys={key} value={kinematic[name][key]} type="kinematic" />
                    </PublisherProvider>
                  )))}
            </Item>
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <Item>
              {Object.keys(kinematic)
                .slice(0, 1)
                .map((name) => Object.keys(kinematic[name])
                  .slice(1, 12)
                  .map((key) => (
                    <PublisherProvider
                      messageType="aruku_interfaces/msg/SetConfig"
                      topicName="set_config"
                    >
                      <NumberField key={key} name={name} keys={key} value={kinematic[name][key]} type="kinematic" />
                    </PublisherProvider>
                  )))}
            </Item>
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <Item>
              {Object.keys(kinematic)
                .slice(0, 1)
                .map((name) => Object.keys(kinematic[name])
                  .slice(12, 13)
                  .map((key) => (
                    <PublisherProvider
                      messageType="aruku_interfaces/msg/SetConfig"
                      topicName="set_config"
                    >
                      <NumberField key={key} name={name} keys={key} value={kinematic[name][key]} type="kinematic" />
                    </PublisherProvider>
                  )))}
              {Object.keys(kinematic)
                .slice(1, 2)
                .map((name) => Object.keys(kinematic[name])
                  .map((key) => (
                    <PublisherProvider
                      messageType="aruku_interfaces/msg/SetConfig"
                      topicName="set_config"
                    >
                      <NumberField key={key} name={name} keys={key} value={kinematic[name][key]} type="kinematic" />
                    </PublisherProvider>
                  )))}
              {Object.keys(walking)
                .slice(1, 2)
                .map((name) => Object.keys(walking[name])
                  .map((key) => (
                    <PublisherProvider
                      messageType="aruku_interfaces/msg/SetConfig"
                      topicName="set_config"
                    >
                      <NumberField key={key} name={name} keys={key} value={walking[name][key]} type="walking" />
                    </PublisherProvider>
                  )))}
            </Item>
          </Grid>
        </Grid>
        <Grid container>
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
