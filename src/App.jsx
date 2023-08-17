import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';

import Walk from './WalkSettings';
import Init from './InitSettings';
import WalkContext from './context/WalkContext';

function App() {
  const grpc_web_address = 'http://192.168.1.4:8080';

  const [published, setPublished] = useState(false);

  const [main, setMain] = useState({
    start: false,
    x: 0.0,
    y: 0.0,
    a: 0.0,
    aim: false,
  });

  const [kinematic, setKinematic] = useState({
    ratio: {
      forward_hip_comp_ratio: 0.0,
      dsp_comp_ratio: 0.0,
      period_time: 0.0,
      swing_right_left: 0.0,
      dsp_ratio: 0.0,
      period_comp_ratio: 0.0,
      swing_up_down: 0.0,
      arm_swing_gain: 0,
      backward_hip_comp_ratio: 0.0,
      foot_comp_ratio: 0.0,
      foot_height: 0.0,
      move_accel_ratio: 0.0,
      foot_accel_ratio: 0.0,
    },
    offset: {
      y_offset: 0.0,
      roll_offset: 0.0,
      hip_pitch_offset: 0.0,
      pitch_offset: 0.0,
      yaw_offset: 0.0,
      z_offset: 0.0,
      x_offset: 0.0,
    },
    length: {
      thigh_length: 134.0,
      calf_length: 112.0,
      ankle_length: 34.0,
      leg_length: 280.0,
    },
  });

  const [walking, setWalking] = useState({
    balance: {
      enable: false,
      balance_knee_gain: 0.0,
      balance_ankle_pitch_gain: 0.0,
      balance_hip_roll_gain: 0.0,
      balance_ankle_roll_gain: 0.0,
    },
    pid: {
      p_gain: 10,
      i_gain: 2,
      d_gain: 3,
    },
    odometry: {
      ry_coefficient: 0.0,
      fx_coefficient: 0.0,
      ly_coefficient: 0.0,
    },
    init_angles: {
      left_shoulder_pitch: 0,
      left_shoulder_roll: 0,
      left_elbow: 0,
      left_hip_yaw: 0,
      left_hip_roll: 0,
      left_hip_pitch: 0,
      left_knee: 0,
      left_ankle_roll: 0,
      left_ankle_pitch: 0,
      right_shoulder_pitch: 0,
      right_shoulder_roll: 0,
      right_elbow: 0,
      right_hip_yaw: 0,
      right_hip_roll: 0,
      right_hip_pitch: 0,
      right_knee: 0,
      right_ankle_roll: 0,
      right_ankle_pitch: 0,
    },
    angles_direction: {
      left_shoulder_pitch: -1,
      left_shoulder_roll: -1,
      left_elbow: -1,
      right_shoulder_pitch: 1,
      right_shoulder_roll: 1,
      right_elbow: 1,
      left_hip_yaw: -1,
      left_hip_roll: -1,
      left_hip_pitch: -1,
      left_knee: -1,
      left_ankle_roll: 1,
      left_ankle_pitch: 1,
      right_hip_yaw: -1,
      right_hip_roll: -1,
      right_hip_pitch: 1,
      right_knee: 1,
      right_ankle_roll: 1,
      right_ankle_pitch: -1,
    },
  });

  const setMainValue = (name, value) => {
    setMain((prevState) => ({ ...prevState, [name]: value }));
  };

  const setWalkingValue = (name, key, value) => {
    setWalking((prevState) => ({ ...prevState, [name]: { ...prevState[name], [key]: value } }));
  };

  const setKinematicValue = (name, key, value) => {
    setKinematic((prevState) => ({ ...prevState, [name]: { ...prevState[name], [key]: value } }));
  };

  return (
    <WalkContext.Provider value={{
      grpc_web_address,
      published,
      main,
      walking,
      kinematic,
      setPublised,
      setKinematic,
      setMain,
      setWalking,
      setMainValue,
      setWalkingValue,
      setKinematicValue,
    }}
    >
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Init />} />
          {/* <Route path="/init" element={<Init />} /> */}
        </Routes>
      </Router>
    </WalkContext.Provider>
  );
}

export default App;
