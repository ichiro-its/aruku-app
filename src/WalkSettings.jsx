/* eslint-disable no-unused-vars */
import React, { useContext, useEffect } from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

import aruku_interfaces from './proto/aruku_grpc_web_pb';

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
    grpc_web_address, walking, kinematic, published, setKinematicValue, setWalkingValue,
  } = useContext(WalkContext);

  const client = new aruku_interfaces.ConfigClient(grpc_web_address, null, null);
  const request = new aruku_interfaces.Empty();

  const handleFetch = () => {
    client.getConfig(request, {}, (err, response) => {
      if (err) {
        console.log(`Unexpected error: code = ${err.code}` +
                    `, message = "${err.message}"`);
      } else {
        const kinematicData = JSON.parse(response.array[0]);
        const walkingData = JSON.parse(response.array[1]);
        Object.keys(kinematicData).map((name) => Object.keys(kinematicData[name])
          .map((key) => setKinematicValue(name, key, kinematicData[name][key])));
        Object.keys(walkingData).map((name) => Object.keys(walkingData[name])
          .map((key) => setWalkingValue(name, key, walkingData[name][key])));
      }
    });
  }

  useEffect(() => {
    if (!published) {
      handleFetch();
    }
  }, [])

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Item onLoad={handleFetch}>
        <Grid container spacing={1}>
          <Grid item xs={12} md={8} lg={4}>
            <Item>
              <WalkSetWalking />
              {Object.keys(walking.balance)
                .map((key) => {
                  if (typeof walking.balance[key] === 'boolean') {
                    return (
                      <SwitchActive name={key} value={walking.balance[key]} type="walking" handleChange={handleFetch}/>
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
