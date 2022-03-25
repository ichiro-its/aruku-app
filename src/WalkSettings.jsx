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
  // const { walking, walkConfig } = useContext(WalkContext);
  const { walking, config } = useContext(WalkContext);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Item>
        <Grid container spacing={1}>
          <Grid item xs={12} md={6} lg={4}>
            <Item>
              {Object.keys(walking)
                .map((name) => {
                  if (typeof walking[name] === 'boolean') {
                    return <SwitchActive key={name} name={name} value={walking[name]} />;
                  }
                  return <NumberField key={name} keys={name} value={walking[name]} type="main" />;
                })}
              {Object.keys(config)
                .slice(2, 3)
                .map((name) => Object.keys(config[name]).map((key) => <NumberField key={key} name={name} keys={key} value={config[name][key]} type="walk" />))}
              {Object.keys(config)
                .slice(4, 5)
                .map((name) => Object.keys(config[name]).map((key) => <NumberField key={key} name={name} keys={key} value={config[name][key]} type="walk" />))}
            </Item>
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <Item>
              {Object.keys(config)
                .slice(0, 1)
                .map((name) => Object.keys(config[name]).slice(0, 12).map((key) => <NumberField key={key} name={name} keys={key} value={config[name][key]} type="walk" />))}
            </Item>
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <Item>
              {Object.keys(config)
                .slice(0, 1)
                .map((name) => Object.keys(config[name]).slice(12, 13).map((key) => <NumberField key={key} name={name} keys={key} value={config[name][key]} type="walk" />))}
              {Object.keys(config)
                .slice(1, 2)
                .map((name) => Object.keys(config[name]).map((key) => <NumberField key={key} name={name} keys={key} value={config[name][key]} type="walk" />))}
              {Object.keys(config)
                .slice(3, 4)
                .map((name) => Object.keys(config[name]).map((key) => <NumberField key={key} name={name} keys={key} value={config[name][key]} type="walk" />))}
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
