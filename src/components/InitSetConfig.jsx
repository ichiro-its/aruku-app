/* eslint-disable no-unused-vars */
/* eslint-disable no-useless-concat */
import React, { useContext, useEffect } from 'react';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

import aruku_interfaces from '../proto/aruku_grpc_web_pb';

import NumberField from './NumberField';
import WalkContext from '../context/WalkContext';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

function InitSetConfig() {
  const { GRPC_WEB_API_URL, kinematic, walking } = useContext(WalkContext);

  const handlePublish = () => {
    const client = new aruku_interfaces.ConfigClient(GRPC_WEB_API_URL, null, null);
    const message = new aruku_interfaces.ConfigWalking();

    message.setJsonKinematic(JSON.stringify(kinematic));
    message.setJsonWalking(JSON.stringify(walking));

    client.publishConfig(message, {}, (err, response) => {
      if (err) {
        console.log(`Unexpected error: code = ${err.code}` + `, message = "${err.message}"`);
      }
    });
  };

  useEffect(() => {
    handlePublish();
  }, [walking]);

  return (
    <Grid container spacing={2}>
      <Grid item xs={12} md={6}>
        <Item>
          <Typography variant="h6" component="div" sx={{ padding: 1 }}>
            Left Foot
          </Typography>
          {Object.keys(walking.init_angles)
            .slice(0, 9)
            .map((key) => (

              <NumberField name="init_angles" keys={key} value={walking.init_angles[key]} type="walking" />
            ))}
        </Item>
      </Grid>
      <Grid item xs={12} md={6}>
        <Item>
          <Typography variant="h6" component="div" sx={{ padding: 1 }}>
            Right Foot
          </Typography>
          {Object.keys(walking.init_angles)
            .slice(9, 18)
            .map((key) => (
              <NumberField name="init_angles" keys={key} value={walking.init_angles[key]} type="walking" />
            ))}
        </Item>
      </Grid>
    </Grid>
  );
}

export default InitSetConfig;
