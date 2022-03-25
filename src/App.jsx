/* eslint-disable camelcase */
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useHandleProcess, useLogger, usePublisher } from 'kumo-app';
import Header from './components/Header';

import Walk from './WalkSettings';
import Init from './InitSettings';
import WalkContext from './context/WalkContext';

function App() {
  const [walking, setWalking] = useState({
    Start: true,
    X: 0.0,
    Y: 0.0,
    A: 5.0,
    aim: false,
  });

  const [config, setConfig] = useState({
    Ratio: {
      forward_hip_comp_ratio: 0.0,
      dsp_comp_ratio: 0.0,
      period_time: 810.0,
      swing_right_left: 15.0,
      dsp_ratio: -0.12,
      period_comp_ratio: 0.0,
      swing_up_down: -1.0,
      arm_swing_gain: 0.2,
      backward_hip_comp_ratio: 0.0,
      foot_comp_ratio: 0.0,
      foot_height: 30.0,
      move_accel_ratio: 1.0,
      foot_accel_ratio: 0.2,
    },
    Offset: {
      y_offset: 0.0,
      roll_offset: 1.0,
      hip_pitch_offset: 23.0,
      pitch_offset: -0.4,
      yaw_offset: 0.1,
      z_offset: 25.0,
      x_offset: 40.0,
    },
    Balance: {
      balance_knee_gain: 0.3,
      balance_ankle_pitch_gain: 0.3,
      balance_hip_roll_gain: 0.2,
      balance_ankle_roll_gain: 0.2,
    },
    PID: {
      p_gain: 10,
      i_gain: 2,
      d_gain: 3,
    },
    Odometry: {
      ry_coefficient: 5.0,
      fx_coefficient: 5.85,
      ly_coefficient: 5.0,
    },
    Kinematic: {
      thigh_length: 199.0,
      calf_length: 195.0,
      ankle_length: 59.7,
      leg_length: 394,
    },
    InitAngles: {
      left_shoulder_pitch: 15,
      left_shoulder_roll: -10,
      left_elbow: 50,
      right_shoulder_pitch: 15,
      right_shoulder_roll: -10,
      right_elbow: 50,
      left_hip_yaw: 3,
      left_hip_roll: -3,
      left_hip_pitch: 5,
      left_knee: 0,
      left_ankle_roll: -2,
      left_ankle_pitch: 0,
      right_hip_yaw: -3,
      right_hip_roll: 3,
      right_hip_pitch: 5,
      right_knee: 0,
      right_ankle_roll: 2,
      right_ankle_pitch: 0,
    },
  });

  const configPublisher = usePublisher();
  const walkConfigPublisher = usePublisher();
  const logger = useLogger();

  const [publishingWalkConfig, handlePublishWalkConfig] = useHandleProcess(() => {
    const run = walking.start;
    const x_move = walking.X;
    const y_move = walking.Y;
    const z_move = walking.Z;
    const aim_on = walking.aim;
    return walkConfigPublisher
      .publish({
        run, x_move, y_move, z_move, aim_on,
      })
      .then(() => {
        logger.success('Successfully publish set joints.');
      })
      .catch((err) => {
        logger.error(`Failed to publish set joints data! ${err.message}.`);
      });
  }, 500);

  const [publishingConfig, handlePublishConfig] = useHandleProcess(
    (name, key, value) => configPublisher
      .publish({
        name, key, value,
      })
      .then(() => {
        logger.success('Successfully publish set joints.');
      })
      .catch((err) => {
        logger.error(`Failed to publish set joints data! ${err.message}.`);
      }),
    500,
  );

  const setMainValue = (name, value) => {
    setWalking({ ...walking, [name]: value });
    handlePublishWalkConfig();
  };

  const setConfigValue = (name, key, value) => {
    setConfig({ ...config, [name]: { ...config[name], [key]: value } });
    handlePublishConfig(name, key, value);
  };

  return (
    <WalkContext.Provider value={{
      walking,
      config,
      publishingWalkConfig,
      publishingConfig,
      setMainValue,
      setConfigValue,
    }}
    >
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Walk />} />
          <Route path="/init" element={<Init />} />
        </Routes>
      </Router>
    </WalkContext.Provider>
  );
}

export default App;
