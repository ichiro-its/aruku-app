/* eslint-disable no-unused-vars */
import React, { useContext } from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

import {
  ClientProvider, PublisherProvider,
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
  const { walking } = useContext(WalkContext);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Item>
        <PublisherProvider
          messageType="aruku_interfaces/msg/SetConfig"
          topicName="set_config"
        >
          <InitSetConfig />
        </PublisherProvider>
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
