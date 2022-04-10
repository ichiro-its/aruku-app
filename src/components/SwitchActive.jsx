/* eslint-disable no-unused-vars */
import React, { useContext } from 'react';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Switch from '@mui/material/Switch';
import Typography from '@mui/material/Typography';

import { useHandleProcess, useLogger, usePublisher } from 'kumo-app';

import WalkContext from '../context/WalkContext';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const ItemTitle = styled(Typography)(({ theme }) => ({
  textAlign: 'left',
  padding: theme.spacing(1),
}));

const ItemValue = styled(Typography)(({ theme }) => ({
  textAlign: 'center',
  padding: theme.spacing(1),
}));

function SwitchState({ name, value, type }) {
  const {
    main, kinematic, walking, setMainValue, setWalkingValue,
  } = useContext(WalkContext);
  const configPublisher = usePublisher();
  const walkConfigPublisher = usePublisher();
  const logger = useLogger();

  const [publishingWalking, handlePublishWalking] = useHandleProcess(() => {
    const run = main.start;
    const x_move = main.x;
    const y_move = main.y;
    const a_move = main.a;
    const aim_on = main.aim;
    return walkConfigPublisher
      .publish({
        run, x_move, y_move, a_move, aim_on,
      })
      .then(() => {
        logger.success('Successfully publish main config.');
      })
      .catch((err) => {
        logger.error(`Failed to publish main config! ${err.message}.`);
      });
  }, 500);

  const [publishingConfig, handlePublishConfig] = useHandleProcess(() => {
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

  return (
    <Item>
      <Grid container spacing={1}>
        <Grid item xs={6}>
          <ItemTitle>
            {name === 'enable' ? 'AUTO_BALANCE' : name.toUpperCase()}
          </ItemTitle>
        </Grid>
        <Grid item xs>
          <ItemValue> OFF </ItemValue>
        </Grid>
        <Grid item xs>
          <Switch
            onChange={type === 'main' ? (event) => {
              setMainValue(name, event.target.checked);
              handlePublishWalking();
            }
              : (event) => {
                setWalkingValue('balance', name, event.target.checked);
                handlePublishConfig();
              }}
            checked={value}
          />
        </Grid>
        <Grid item xs>
          <ItemValue> ON </ItemValue>
        </Grid>
      </Grid>
    </Item>
  );
}

export default SwitchState;
