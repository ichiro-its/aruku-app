import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {
  BridgeProvider,
  BridgeConnection,
  LoggerProvider,
  SessionProvider,
  // useHandleProcess,
  // useLogger,
  // usePublisher,
} from 'kumo-app';
import Header from './components/Header';

import Walk from './WalkSettings';
import Init from './InitSettings';
import WalkContext from './context/WalkContext';

function App() {
  const [main, setMain] = useState({
    start: true,
    x: 0.0,
    y: 0.0,
    a: 5.0,
    aim: false,
  });

  const [kinematic, setKinematic] = useState({
    ratio: {
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
    offset: {
      y_offset: 0.0,
      roll_offset: 1.0,
      hip_pitch_offset: 23.0,
      pitch_offset: -0.4,
      yaw_offset: 0.1,
      z_offset: 25.0,
      x_offset: 40.0,
    },
  });

  const [walking, setWalking] = useState({
    balance: {
      enable: false,
      balance_knee_gain: 0.3,
      balance_ankle_pitch_gain: 0.3,
      balance_hip_roll_gain: 0.2,
      balance_ankle_roll_gain: 0.2,
    },
    odometry: {
      ry_coefficient: 5.0,
      fx_coefficient: 5.85,
      ly_coefficient: 5.0,
    },
    init_angles: {
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

  // const configPublisher = usePublisher();
  // const walkConfigPublisher = usePublisher();
  // const logger = useLogger();

  // const [publishingWalkConfig, handlePublishWalkConfig] = useHandleProcess(() => {
  //   const run = walking.start;
  //   const x_move = walking.x;
  //   const y_move = walking.y;
  //   const z_move = walking.z;
  //   const aim_on = walking.aim;
  //   return walkConfigPublisher
  //     .publish({
  //       run, x_move, y_move, z_move, aim_on,
  //     })
  //     .then(() => {
  //       logger.success('Successfully publish main config.');
  //     })
  //     .catch((err) => {
  //       logger.error(`Failed to publish main config! ${err.message}.`);
  //     });
  // }, 500);

  // const [publishingConfig, handlePublishConfig] = useHandleProcess(() => {
  //   const json_kinematic = JSON.stringify(kinematic);
  //   const json_walking = JSON.stringify(walking);
  //   return configPublisher
  //     .publish({
  //       json_kinematic, json_walking,
  //     })
  //     .then(() => {
  //       logger.success('Successfully publish kinematic and walking config.');
  //     })
  //     .catch((err) => {
  //       logger.error(`Failed to publish kinematic and walking config! ${err.message}.`);
  //     });
  // }, 500);

  const setMainValue = (name, value) => {
    setMain({ ...main, [name]: value });
    // handlePublishWalkConfig();
  };

  const setWalkingValue = (name, key, value) => {
    setWalking({ ...walking, [name]: { ...walking[name], [key]: value } });
    // handlePublishConfig();
  };

  const setKinematicValue = (name, key, value) => {
    setKinematic({ ...kinematic, [name]: { ...kinematic[name], [key]: value } });
    // handlePublishConfig();
  };

  return (
    <WalkContext.Provider value={{
      main,
      walking,
      kinematic,
      // publishingConfig,
      // publishingWalkConfig,
      setMainValue,
      setWalkingValue,
      setKinematicValue,
    }}
    >
      <LoggerProvider>
        <BridgeProvider>
          <BridgeConnection />
          <SessionProvider>
            <Router>
              <Header />
              <Routes>
                <Route path="/" element={<Walk />} />
                <Route path="/init" element={<Init />} />
              </Routes>
            </Router>
          </SessionProvider>
        </BridgeProvider>
      </LoggerProvider>
    </WalkContext.Provider>
  );
}

export default App;
