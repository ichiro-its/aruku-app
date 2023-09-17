/* eslint-disable no-unused-vars */
/* eslint-disable no-useless-concat */
import React, { useContext, useEffect } from 'react';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

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

function WalkSetConfig() {
  const { walking, kinematic } = useContext(WalkContext);

  const handlePublish = () => {
    const client = new aruku_interfaces.ConfigClient(`${import.meta.env.GRPC_WEB_API_URL}`, null, null);
    const message = new aruku_interfaces.ConfigWalking();

    message.setJsonKinematic(JSON.stringify(kinematic));
    message.setJsonWalking(JSON.stringify(walking));

    client.publishConfig(message, {}, (err, response) => {
      if (err) {
        console.log(`Unexpected error: code = ${err.code}` + `, message = "${err.message}"`);
      } else {
        console.log(response);
      }
    });
  };

  useEffect(() => {
    handlePublish();
  }, [walking, kinematic]);

  return (
    <Grid container xs={12} md={10} lg={8}>
      <Grid item xs={12} md={10} lg={6} style={{ marginTop: 8 }}>
        <Item>
          {Object.keys(kinematic.ratio)
            .slice(1, 12)
            .map((key) => (
              <NumberField name="ratio" keys={key} value={kinematic.ratio[key]} type="kinematic" />
            ))}
        </Item>
      </Grid>
      <Grid item xs={12} md={10} lg={6} style={{ marginTop: 8 }}>
        <Item>
          <NumberField name="ratio" keys="foot_accel_ratio" value={kinematic.ratio.foot_accel_ratio} type="kinematic" />
          {Object.keys(kinematic.offset)
            .map((key) => (
              <NumberField name="offset" keys={key} value={kinematic.offset[key]} type="kinematic" />
            ))}
          {Object.keys(walking.odometry)
            .map((key) => (
              <NumberField name="odometry" keys={key} value={walking.odometry[key]} type="walking" />
            ))}
        </Item>
      </Grid>
    </Grid>
  );
}

export default WalkSetConfig;
