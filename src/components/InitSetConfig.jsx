/* eslint-disable no-unused-vars */
import React, { useContext, useEffect } from 'react';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

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
  const { walking } = useContext(WalkContext);

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
