/* eslint-disable no-unused-vars */
import React, { useContext, useEffect } from 'react';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';

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
