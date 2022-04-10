import React, { useContext } from 'react';
import { Button, CircularProgress } from '@mui/material';

import { useClient, useHandleProcess, useLogger } from 'kumo-app';

import WalkContext from '../context/WalkContext';

function SaveButton() {
  const { kinematic, walking } = useContext(WalkContext);

  const client = useClient();
  const logger = useLogger();

  const [saving, handleSave] = useHandleProcess(() => {
    const json_kinematic = JSON.stringify(kinematic);
    const json_walking = JSON.stringify(walking);
    return client
      .call({ json_kinematic, json_walking })
      .then((response) => {
        logger.success(
          `Successfully save config with status ${response.status}.`,
        );
      })
      .catch((err) => {
        logger.error(`Failed to save config! ${err.message}.`);
      });
  }, 500);

  return (
    <Button
      onClick={handleSave}
      disabled={client == null || saving}
      color="primary"
      variant="contained"
      sx={{ margin: 1, top: 5, left: 30 }}
    >
      {saving ? <CircularProgress size={24} /> : 'Save'}
    </Button>
  );
}

export default SaveButton;
