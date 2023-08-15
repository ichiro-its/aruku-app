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

  const client = new aruku_interfaces.ConfigClient('http://localhost:8080', null, null);
  const request = new aruku_interfaces.SetWalking();

  const handleSetWalking = () => {
    request.setRun(main.start);
    request.setXMove(main.x);
    request.setYMove(main.y);
    request.setAMove(main.a);
    request.setAimOn(main.aim);

    client.setMainConfig(request, {}, (err, response) => {
      if (err) {
        console.log(`Unexpected error: code = ${err.code}` +
                    `, message = "${err.message}"`);
      } else {
        console.log(response.getMessage());
      }
    });
  }

  // const [publishingWalking, handlePublishWalking] = useHandleProcess(() => {
  //   const run = main.start;
  //   const x_move = main.x;
  //   const y_move = main.y;
  //   const a_move = main.a;
  //   const aim_on = main.aim;
  //   return walkConfigPublisher
  //     .publish({
  //       run, x_move, y_move, a_move, aim_on,
  //     })
  //     .then(() => {
  //       logger.success('Successfully publish main config.');
  //     })
  //     .catch((err) => {
  //       logger.error(`Failed to publish main config! ${err.message}.`);
  //     });
  // }, 500);

  useEffect(() => {
    // handlePublishWalking();
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
