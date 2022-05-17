/* eslint-disable no-unused-vars */
import React, { useContext, useEffect } from 'react';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

import { useHandleProcess, useLogger, usePublisher } from 'kumo-app';

import NumberField from './NumberField';
import WalkContext from '../context/WalkContext';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

function WalkingSetConfig() {
  const { walking, kinematic } = useContext(WalkContext);

  const configPublisher = usePublisher();
  const logger = useLogger();

  const [publishingConfig, handlePublishConfig] = useHandleProcess(() => {
    console.log(kinematic);
    console.log(walking);
    const json_kinematic = JSON.stringify(kinematic);
    const json_walking = JSON.stringify(walking);
    return configPublisher
      .publish({
        json_kinematic, json_walking,
      })
      .then(() => {
        logger.success('Successfully publish kinematic and walking config.');
      })
      .catch((err) => {
        logger.error(`Failed to publish kinematic and walking config! ${err.message}.`);
      });
  }, 500);

  useEffect(() => {
    handlePublishConfig();
  }, [kinematic, walking]);

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

export default WalkingSetConfig;
