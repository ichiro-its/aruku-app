import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';

import Walk from './WalkSettings';
import Init from './InitSettings';
import WalkContext from './context/WalkContext';

function App() {
  const [walkConfig, setWalkConfig] = useState({
    START: true,
    X: 100.0,
    Y: 0.0,
    A: 5.0,
    AIM: false,
    BALANCE_KNEE_GAIN: 0.3,
    BALANCE_ANKLE_PITCH_GAIN: 0.3,
    BALANCE_HIP_ROLL_GAIN: 0.2,
    BALANCE_ANKLE_ROLL_GAIN: 0.2,
    PERIOD_TIME: 810.0,
    DSP_RATIO: -0.12,
    FOOT_HEIGHT: 30.0,
    SWING_RIGHT_LEFT: 15.0,
    SWING_UP_DOWN: -1.0,
    ARM_SWING_GAIN: 0.2,
    BACKWARD_HIP_COMP_RATIO: 0.0,
    FORWARD_HIP_COMP_RATIO: 0.0,
    FOOT_COMP_RATIO: 0.0,
    DSP_COMP_RATIO: 0.0,
    MOVE_ACCEL_RATIO: 1.0,
    FOOT_ACCEL_RATIO: 0.2,
    PERIOD_COMP_RATIO: 0.0,
    X_OFFSET: 40.0,
    Y_OFFSET: 0.0,
    Z_OFFSET: 25.0,
    ROLL_OFFSET: 1.0,
    PITCH_OFFSET: -0.4,
    YAW_OFFSET: 0.1,
    HIP_PITCH_OFFSET: 23.0,
    P_GAIN: 10,
    I_GAIN: 2,
    D_GAIN: 3,
  });

  const [initConfig, setInitConfig] = useState({
    LEFT_SHOULDER_PITCH: 5,
    LEFT_SHOULDER_ROLL: 10,
    LEFT_ELBOW: 50,
    LEFT_HIP_YAW: 3,
    LEFT_HIP_ROLL: -3,
    LEFT_HIP_PITCH: 5,
    LEFT_KNEE: 0,
    LEFT_ANKLE_ROLL: -2,
    LEFT_ANKLE_PITCH: 0,
    RIGHT_SHOULDER_PITCH: 15,
    RIGHT_SHOULDER_ROLL: 10,
    RIGHT_ELBOW: 50,
    RIGHT_HIP_YAW: 3,
    RIGHT_HIP_ROLL: -3,
    RIGHT_HIP_PITCH: 5,
    RIGHT_KNEE: 0,
    RIGHT_ANKLE_ROLL: -2,
    RIGHT_ANKLE_PITCH: 0,
  });

  const setWalkValue = (name, value) => {
    setWalkConfig({ ...walkConfig, [name]: value });
  };

  const setInitValue = (name, value) => {
    setInitConfig({ ...initConfig, [name]: value });
  };

  return (
    <WalkContext.Provider value={{
      initConfig, walkConfig, setInitValue, setWalkValue,
    }}
    >
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Walk />} />
          <Route path="/Init" element={<Init />} />
        </Routes>
      </Router>
    </WalkContext.Provider>
  );
}

export default App;
