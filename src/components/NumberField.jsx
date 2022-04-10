/* eslint-disable no-unused-vars */
import React, { useContext } from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import KeyboardDoubleArrowLeftIcon from '@mui/icons-material/KeyboardDoubleArrowLeft';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';

import {
  useHandleProcess,
  useLogger,
  usePublisher,
} from 'kumo-app';

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
  fontSize: '0.9rem',
}));

const ItemValue = styled(Typography)(({ theme }) => ({
  textAlign: 'center',
  padding: theme.spacing(1),
  fontSize: '0.9rem',
}));

function NumberField(props) {
  const {
    name,
    keys,
    value,
    type,
  } = props;
  const {
    main, kinematic, walking, setMainValue, setWalkingValue, setKinematicValue,
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

  function setValue(val) {
    if (type === 'main') {
      setMainValue(keys, value + val);
      handlePublishWalking();
    } else if (type === 'walking') {
      setWalkingValue(name, keys, value + val);
      handlePublishConfig();
    } else {
      setKinematicValue(name, keys, value + val);
      handlePublishConfig();
    }
  }

  return (
    <Item>
      <Grid container spacing={1}>
        <Grid item xs={6}>
          <ItemTitle>
            {keys.toUpperCase()}
          </ItemTitle>
        </Grid>
        <Grid item xs={1}>
          <IconButton onClick={() => setValue(-10)}>
            <KeyboardDoubleArrowLeftIcon />
          </IconButton>
        </Grid>
        <Grid item xs={1}>
          <IconButton onClick={() => setValue(-1)}>
            <KeyboardArrowLeft />
          </IconButton>
        </Grid>
        <Grid item xs={1.5}>
          <ItemValue>{value}</ItemValue>
        </Grid>
        <Grid item xs={1}>
          <IconButton onClick={() => setValue(1)}>
            <KeyboardArrowRight />
          </IconButton>
        </Grid>
        <Grid item xs={1}>
          <IconButton onClick={() => setValue(10)}>
            <KeyboardDoubleArrowRightIcon />
          </IconButton>
        </Grid>
      </Grid>
    </Item>
  );
}

export default NumberField;
