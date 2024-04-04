import React, { useContext, useEffect } from 'react';

import aruku_interfaces from '../proto/aruku_grpc_web_pb';

import NumberField from './NumberField';
import SwitchActive from './SwitchActive';
import WalkContext from '../context/WalkContext';

function WalkSetWalking() {
  const { GRPC_WEB_API_URL, main } = useContext(WalkContext);

  const client = new aruku_interfaces.ConfigClient(GRPC_WEB_API_URL, null, null);
  const message = new aruku_interfaces.SetWalking();

  const handleSetWalking = () => {
    message.setRun(main.start);
    message.setXMove(main.x);
    message.setYMove(main.y);
    message.setAMove(main.a);
    message.setAimOn(main.aim);

    client.setMainConfig(message, {}, (err, response) => {
      if (err) {
        console.log(`Unexpected error: code = ${err.code}, message = "${err.message}"`);
      } else {
        console.log(response);
      }
    });
  };

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
