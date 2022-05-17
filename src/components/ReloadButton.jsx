import React, {
  useContext, useEffect,
} from 'react';
import { Button, CircularProgress } from '@mui/material';

import { useClient, useHandleProcess, useLogger } from 'kumo-app';

import WalkContext from '../context/WalkContext';

function ReloadButton() {
  const {
    setKinematicValue, setWalkingValue,
  } = useContext(WalkContext);

  const client = useClient();
  const logger = useLogger();

  const [reloading, handleReload] = useHandleProcess(() => client
    .call({})
    .then((response) => {
      logger.success('Successfully get config.');
      const kinematic = JSON.parse(`${response.json_kinematic.replace('/\\/g', '')}`);
      const walking = JSON.parse(`${response.json_walking.replace('/\\/g', '')}`);
      Object.keys(kinematic).map((name) => Object.keys(kinematic[name])
        .map((key) => setKinematicValue(name, key, kinematic[name][key])));
      Object.keys(walking).map((name) => Object.keys(walking[name])
        .map((key) => setWalkingValue(name, key, walking[name][key])));
    })
    .catch((err) => {
      logger.error(`Failed to load config! ${err.message}.`);
    }), 500);

  useEffect(() => {
    handleReload();
  }, []);

  return (
    <Button
      onClick={handleReload}
      disabled={client == null || reloading}
      color="warning"
      variant="contained"
      sx={{ margin: 1, top: 5 }}
    >
      {reloading ? <CircularProgress size={24} /> : 'Reload'}
    </Button>
  );
}

export default ReloadButton;
