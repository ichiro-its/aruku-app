import React, { useContext } from 'react';
import { Button, CircularProgress } from '@mui/material';

import { useClient, useHandleProcess, useLogger } from 'kumo-app';

import WalkContext from '../context/WalkContext';

function ReloadButton() {
  const { setKinematic, setWalking } = useContext(WalkContext);

  const client = useClient();
  const logger = useLogger();

  const [reloading, handleReload] = useHandleProcess(() => client
    .call({})
    .then((response) => {
      logger.success('Successfully get config.');
      const kinematic = JSON.parse(`${response.json_kinematic}`);
      const walking = JSON.parse(`${response.json_walking}`);
      setKinematic(kinematic);
      setWalking(walking);
    })
    .catch((err) => {
      logger.error(`Failed to load config! ${err.message}.`);
    }), 500);

  return (
    <Button
      onClick={handleReload}
      disabled={client == null || reloading}
      color="warning"
      variant="contained"
      sx={{ margin: 1, top: 5, left: 30 }}
    >
      {reloading ? <CircularProgress size={24} /> : 'Reload'}
    </Button>
  );
}

export default ReloadButton;
