/* eslint-disable no-unused-vars */
import React, { useContext, useEffect } from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

import ReloadButton from './components/ReloadButton';
import SaveButton from './components/SaveButton';
import SwitchActive from './components/SwitchActive';
import NumberField from './components/NumberField';
import WalkSetWalking from './components/WalkSetWalking';
import WalkSetConfig from './components/WalkSetConfig';
import WalkContext from './context/WalkContext';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

function WalkSettings() {
  const {
    walking, kinematic, setKinematicValue, setWalkingValue,
  } = useContext(WalkContext);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Item>
        <Grid container spacing={1}>
          <Grid item xs={12} md={8} lg={4}>
            <Item>
                <WalkSetWalking />
              {Object.keys(walking.balance)
                .map((key) => {
                  if (typeof walking.balance[key] === 'boolean') {
                    return (
                      <SwitchActive name={key} value={walking.balance[key]} type="walking" />
                    );
                  }
                  return (
                    <NumberField name="balance" keys={key} value={walking.balance[key]} type="walking" />
                  );
                })}
              <NumberField name="ratio" keys="forward_hip_comp_ratio" value={kinematic.ratio.forward_hip_comp_ratio} type="kinematic" />
            </Item>
          </Grid>
            <WalkSetConfig />
        </Grid>
        <Grid container style={{ justifyContent: 'end' }}>
            <SaveButton />
            <ReloadButton />
        </Grid>
      </Item>
    </Box>
  );
}

export default WalkSettings;
