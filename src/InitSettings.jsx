import React, { useContext } from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

import {
  ClientProvider, PublisherProvider,
} from 'kumo-app';

import NumberField from './components/NumberField';
import ReloadButton from './components/ReloadButton';
import SaveButton from './components/SaveButton';
import WalkContext from './context/WalkContext';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

function InitSettings() {
  const { walking } = useContext(WalkContext);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Item>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <Item>
              <Typography variant="h6" component="div" sx={{ padding: 1 }}>
                Left Foot
              </Typography>
              {Object.keys(walking)
                .slice(2, 3)
                .map((name) => Object.keys(walking[name])
                  .slice(0, 3)
                  .map((key) => (
                    <PublisherProvider
                      messageType="aruku_interfaces/msg/SetConfig"
                      topicName="set_config"
                    >
                      <NumberField key={key} name={name} keys={key} value={walking[name][key]} type="walking" />
                    </PublisherProvider>
                  )))}
              {Object.keys(walking)
                .slice(2, 3)
                .map((name) => Object.keys(walking[name])
                  .slice(6, 12)
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
          <Grid item xs={12} md={6}>
            <Item>
              <Typography variant="h6" component="div" sx={{ padding: 1 }}>
                Right Foot
              </Typography>
              {Object.keys(walking)
                .slice(2, 3)
                .map((name) => Object.keys(walking[name])
                  .slice(3, 6)
                  .map((key) => (
                    <PublisherProvider
                      messageType="aruku_interfaces/msg/SetConfig"
                      topicName="set_config"
                    >
                      <NumberField key={key} name={name} keys={key} value={walking[name][key]} type="walking" />
                    </PublisherProvider>
                  )))}
              {Object.keys(walking)
                .slice(2, 3)
                .map((name) => Object.keys(walking[name])
                  .slice(12, 18)
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

export default InitSettings;
