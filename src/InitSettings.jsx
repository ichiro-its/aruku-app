/* eslint-disable no-unused-vars */
import React, { useContext, useEffect } from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

import ReloadButton from './components/ReloadButton';
import SaveButton from './components/SaveButton';
import WalkContext from './context/WalkContext';
import InitSetConfig from './components/InitSetConfig';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

function InitSettings() {
  const {
    walking, setKinematicValue, setWalkingValue,
  } = useContext(WalkContext);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Item>
          <InitSetConfig />
        <Grid container style={{ justifyContent: 'end' }}>
            <SaveButton />
            <ReloadButton />
        </Grid>
      </Item>
    </Box>
  );
}

export default InitSettings;
