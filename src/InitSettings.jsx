import React, { useState } from 'react';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

import NumberField from './components/NumberField';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

function InitSettings() {
  const [config, setConfig] = useState({
    LEFT_SHOULDER_PITCH: 5,
    LEFT_SHOULDER_ROLL: 10,
    LEFT_ELBOW: 50,
    LEFT_HIP_YAW: 3,
    LEFT_HIP_ROLL: -3,
    LEFT_HIP_PITCH: 5,
    LEFT_KNEE: 0,
    LEFT_ANKLE_ROLL: -2,
    LEFT_ANKLE_PITCH: 0,
    RIGHT_SHOULDER_PITCH: 15,
    RIGHT_SHOULDER_ROLL: 10,
    RIGHT_ELBOW: 50,
    RIGHT_HIP_YAW: 3,
    RIGHT_HIP_ROLL: -3,
    RIGHT_HIP_PITCH: 5,
    RIGHT_KNEE: 0,
    RIGHT_ANKLE_ROLL: -2,
    RIGHT_ANKLE_PITCH: 0,
  });

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Item>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <Item>
              <Typography variant="h6" component="div" sx={{ padding: 1 }}>
                Left Foot
              </Typography>
              {Object.keys(config)
                .slice(0, 9)
                .map((name) => (
                  <NumberField name={name} value={config[name]} />
                ))}
            </Item>
          </Grid>
          <Grid item xs={12} md={6}>
            <Item>
              <Typography variant="h6" component="div" sx={{ padding: 1 }}>
                Right Foot
              </Typography>
              {Object.keys(config)
                .slice(9, 18)
                .map((name) => (
                  <NumberField name={name} value={config[name]} />
                ))}
            </Item>
          </Grid>
        </Grid>
        <Grid container>
          <Button
            color="primary"
            variant="contained"
            sx={{ margin: 1, top: 5, left: 30 }}
          >
            Save
          </Button>
          <Button
            color="warning"
            variant="contained"
            sx={{ margin: 1, top: 5, left: 30 }}
          >
            Reload
          </Button>
        </Grid>
      </Item>
    </Box>
  );
}

export default InitSettings;
