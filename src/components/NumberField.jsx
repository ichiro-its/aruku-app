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
  const { name, value, type } = props;
  const { setMainValue, setWalkValue, setInitValue } = useContext(WalkContext);

  function setValue(val) {
    if (type === 'main') {
      setMainValue(name, value + val);
    } else if (type === 'walk') {
      setWalkValue(name, value + val);
    } else if (type === 'init') {
      setInitValue(name, value + val);
    }
  }

  return (
    <Item>
      <Grid container spacing={1}>
        <Grid item xs={6}>
          <ItemTitle>
            {' '}
            {name.toUpperCase()}
            {' '}
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
