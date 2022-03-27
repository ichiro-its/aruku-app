import React, { useContext } from 'react';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

import NumberField from './components/NumberField';
import WalkContext from './context/WalkContext';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

function InitSettings() {
  const { walking } = useContext(WalkContext);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Item>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <Item>
              <Typography variant="h6" component="div" sx={{ padding: 1 }}>
                Left Foot
              </Typography>
              {Object.keys(walking)
                .slice(2, 3)
                .map((name) => Object.keys(walking[name])
                  .slice(0, 3)
                  .map((key) => <NumberField key={key} name={name} keys={key} value={walking[name][key]} type="walking" />))}
              {Object.keys(walking)
                .slice(2, 3)
                .map((name) => Object.keys(walking[name])
                  .slice(6, 12)
                  .map((key) => <NumberField key={key} name={name} keys={key} value={walking[name][key]} type="walking" />))}
            </Item>
          </Grid>
          <Grid item xs={12} md={6}>
            <Item>
              <Typography variant="h6" component="div" sx={{ padding: 1 }}>
                Right Foot
              </Typography>
              {Object.keys(walking)
                .slice(2, 3)
                .map((name) => Object.keys(walking[name])
                  .slice(3, 6)
                  .map((key) => <NumberField key={key} name={name} keys={key} value={walking[name][key]} type="walking" />))}
              {Object.keys(walking)
                .slice(2, 3)
                .map((name) => Object.keys(walking[name])
                  .slice(12, 18)
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

export default InitSettings;
