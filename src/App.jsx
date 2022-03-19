import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';

import Walk from './WalkSettings';
import Init from './InitSettings';
import WalkContext from './context/WalkContext';

function App() {
  const [walking, setWalking] = useState({
    start: true,
    X: 0.0,
    Y: 0.0,
    A: 5.0,
    aim: false,
  });

  const [walkConfig, setWalkConfig] = useState({
    enable: true,
    balance_knee_gain: 0.3,
    balance_ankle_pitch_gain: 0.3,
    balance_hip_roll_gain: 0.2,
    balance_ankle_roll_gain: 0.2,
    ry_coefficient: 5.0,
    fx_coefficient: 5.85,
    ly_coefficient: 5.0,
    x_offset: 40.0,
    y_offset: 0.0,
    z_offset: 25.0,
    roll_offset: 1.0,
    hip_pitch_offset: 23.0,
    pitch_offset: -0.4,
    yaw_offset: 0.1,
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
  });

  const [initConfig, setInitConfig] = useState({
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
  });

  const setMainValue = (name, value) => {
    setWalking({ ...walking, [name]: value });
  };

  const setWalkValue = (name, value) => {
    setWalkConfig({ ...walkConfig, [name]: value });
  };

  const setInitValue = (name, value) => {
    setInitConfig({ ...initConfig, [name]: value });
  };

  return (
    <WalkContext.Provider value={{
      walking, walkConfig, initConfig, setMainValue, setWalkValue, setInitValue,
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
