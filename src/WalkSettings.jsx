import React, { useContext } from 'react';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

// import GetConfig from './components/GetConfig';
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
  const { walking, walkConfig } = useContext(WalkContext);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Item>
        <Grid container spacing={1}>
          <Grid item xs={12} md={6} lg={4}>
            <Item>
              {Object.keys(walking)
                .map((name) => {
                  if (typeof walking[name] === 'boolean') {
                    return <SwitchActive key={name} name={name} value={walking[name]} type="main" />;
                  }
                  return <NumberField key={name} name={name} value={walking[name]} type="main" />;
                })}
              {Object.keys(walkConfig)
                .slice(0, 5)
                .map((name) => {
                  if (typeof walkConfig[name] === 'boolean') {
                    return <SwitchActive key={name} name={name} value={walkConfig[name]} type="walk" />;
                  }
                  return <NumberField key={name} name={name} value={walkConfig[name]} type="walk" />;
                })}
            </Item>
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <Item>
              {Object.keys(walkConfig)
                .slice(5, 15)
                .map((name) => (
                  <NumberField key={name} name={name} value={walkConfig[name]} type="walk" />
                ))}
            </Item>
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <Item>
              {Object.keys(walkConfig)
                .slice(15, 25)
                .map((name) => (
                  <NumberField key={name} name={name} value={walkConfig[name]} type="walk" />
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
            // onClick={handleCall}
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
