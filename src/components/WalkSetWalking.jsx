/* eslint-disable no-unused-vars */
import React, { useContext, useEffect } from 'react';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';

import aruku_interfaces from '../proto/aruku_grpc_web_pb'

import NumberField from './NumberField';
import SwitchActive from './SwitchActive';
import WalkContext from '../context/WalkContext';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

function WalkSetWalking() {
  const { main } = useContext(WalkContext);

  const client = new aruku_interfaces.ConfigClient(`${import.meta.env.GRPC_WEB_API_URL}`, null, null);
  const message = new aruku_interfaces.SetWalking();

  const handleSetWalking = () => {
    message.setRun(main.start);
    message.setXMove(main.x);
    message.setYMove(main.y);
    message.setAMove(main.a);
    message.setAimOn(main.aim);

    client.setMainConfig(message, {}, (err, response) => {
      if (err) {
        console.log(`Unexpected error: code = ${err.code}` +
                    `, message = "${err.message}"`);
      } else {
        console.log(response);
      }
    });
  }

  useEffect(() => {
    handleSetWalking();
  }, [main]);

  return (
    <div>
      {Object.keys(main)
        .map((name) => {
          if (typeof main[name] === 'boolean') {
            return (
              <SwitchActive name={name} value={main[name]} type="main" />
            );
          }
          return (
            <NumberField keys={name} value={main[name]} type="main" />
          );
        })}
    </div>
  );
}

export default WalkSetWalking;
