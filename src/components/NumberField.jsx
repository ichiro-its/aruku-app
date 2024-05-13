import React, { useContext } from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import { TextField } from '@material-ui/core';
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

function NumberField(props) {
  const {
    name,
    keys,
    value,
    type,
  } = props;
  const {
    setMainValue, setWalkingValue, setKinematicValue,
  } = useContext(WalkContext);

  function setValue(val) {
    if (type === 'main') {
      val *= 10;
      setMainValue(keys, value + val);
    } else if (type === 'walking') {
      switch (name) {
        case 'balance':
          val /= 10;
          break;

        case 'pid':
          val *= 10;
          break;
      }

      setWalkingValue(name, keys, value + val);
    } else {
      switch (name) {
        case 'offset':
          switch (keys) {
            case 'x_offset':
            case 'y_offset':
            case 'z_offset':
              val *= 10;
              break;
          }
          break;
        
        case 'ratio':
          switch (keys) {
            case 'foot_height':
            case 'period_time':
              val *= 10;
              break;
            default:
              val /= 10;
              break;
          }
      }

      setKinematicValue(name, keys, value + val);
    }
  }
  function changeValue(val) {
    if (type === 'main') {
      setMainValue(keys, val);
    } else if (type === 'walking') {
      setWalkingValue(name, keys, val);
    } else {
      setKinematicValue(name, keys, val);
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
          <IconButton onClick={() => setValue(-1)}>
            <KeyboardDoubleArrowLeftIcon />
          </IconButton>
        </Grid>
        <Grid item xs={1}>
          <IconButton onClick={() => setValue(-0.1)}>
            <KeyboardArrowLeft />
          </IconButton>
        </Grid>
        <Grid item xs={1.5}>
          <TextField
            value={value}
            margin="dense"
            type="number"
            InputProps={{
              inputProps: {
                style: { textAlign: 'center' },
              },
            }}
            onChangeCapture={(event) => {
              if (event.target.value === '') {
                changeValue(0.0);
              } else {
                changeValue(parseFloat(event.target.value));
              }
            }}
          />
        </Grid>
        <Grid item xs={1}>
          <IconButton onClick={() => setValue(0.1)}>
            <KeyboardArrowRight />
          </IconButton>
        </Grid>
        <Grid item xs={1}>
          <IconButton onClick={() => setValue(1)}>
            <KeyboardDoubleArrowRightIcon />
          </IconButton>
        </Grid>
      </Grid>
    </Item>
  );
}

export default NumberField;
