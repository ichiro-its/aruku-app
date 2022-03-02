import React from 'react';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Switch from '@mui/material/Switch';
import Typography from '@mui/material/Typography';

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

function SwitchState({ name, value }) {
  return (
    <Item>
      <Grid container spacing={1}>
        <Grid item xs={6}>
          <ItemTitle>
            {' '}
            {name}
            {' '}
          </ItemTitle>
        </Grid>
        <Grid item xs>
          <ItemValue> OFF </ItemValue>
        </Grid>
        <Grid item xs>
          <Switch defaultChecked />
        </Grid>
        <Grid item xs>
          <ItemValue> ON </ItemValue>
        </Grid>
      </Grid>
    </Item>
  );
}

export default SwitchState;
