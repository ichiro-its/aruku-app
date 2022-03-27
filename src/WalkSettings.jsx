import React, { useContext } from 'react';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

import NumberField from './components/NumberField';
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
                    return <SwitchActive key={name} name={name} value={main[name]} type="main" />;
                  }
                  return <NumberField key={name} keys={name} value={main[name]} type="main" />;
                })}
              {Object.keys(walking)
                .slice(0, 1)
                .map((name) => Object.keys(walking[name]).map((key) => {
                  if (typeof walking[name][key] === 'boolean') {
                    return <SwitchActive key={key} name={key} value={walking[name][key]} type="walking" />;
                  }
                  return <NumberField key={key} name={name} keys={key} value={walking[name][key]} type="walking" />;
                }))}
              {Object.keys(kinematic)
                .slice(0, 1)
                .map((name) => Object.keys(kinematic[name])
                  .slice(0, 1)
                  .map((key) => <NumberField key={key} name={name} keys={key} value={kinematic[name][key]} type="kinematic" />))}
            </Item>
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <Item>
              {Object.keys(kinematic)
                .slice(0, 1)
                .map((name) => Object.keys(kinematic[name])
                  .slice(1, 12)
                  .map((key) => <NumberField key={key} name={name} keys={key} value={kinematic[name][key]} type="kinematic" />))}
            </Item>
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <Item>
              {Object.keys(kinematic)
                .slice(0, 1)
                .map((name) => Object.keys(kinematic[name])
                  .slice(12, 13)
                  .map((key) => <NumberField key={key} name={name} keys={key} value={kinematic[name][key]} type="kinematic" />))}
              {Object.keys(kinematic)
                .slice(1, 2)
                .map((name) => Object.keys(kinematic[name])
                  .map((key) => <NumberField key={key} name={name} keys={key} value={kinematic[name][key]} type="kinematic" />))}
              {Object.keys(walking)
                .slice(1, 2)
                .map((name) => Object.keys(walking[name])
                  .map((key) => <NumberField key={key} name={name} keys={key} value={walking[name][key]} type="walking" />))}
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

export default WalkSettings;
