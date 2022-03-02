import React from "react";
import { useState } from "react";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

import NumberField from "./components/NumberField";
import SwitchActive from "./components/SwitchActive";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

function InitSettings() {
  const [config, setConfig] = useState({
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
    CALF_LENGTH: 195.0,
    ANKLE_LENGTH: 59.7,
    LEG_LENGTH: 394,
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
    THIGH_LENGTH: 199.0,
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
    RY_COEFFICIENT: 5.0,
    FX_COEFFICIENT: 5.85,
    LY_COEFFICIENT: 5.0,
  });

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Item>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6} lg={4}>
            <Item>
              <Typography variant="h6" component="div" sx={{ padding: 1 }}>
                Left Foot
              </Typography>
              {Object.keys(config)
                .slice(0, 13)
                .map((name) => {
                  if (typeof config[name] === "boolean") {
                    return <SwitchActive name={name} value={config[name]} />;
                  } else {
                    return <NumberField name={name} value={config[name]} />;
                  }
                })}
            </Item>
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <Item>
              <Typography variant="h6" component="div" sx={{ padding: 1 }}>
                Right Foot
              </Typography>
              {Object.keys(config)
                .slice(13, 26)
                .map((name) => (
                  <NumberField name={name} value={config[name]} />
                ))}
            </Item>
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <Item>
              <Typography variant="h6" component="div" sx={{ padding: 1 }}>
                Right Foot
              </Typography>
              {Object.keys(config)
                .slice(26, 39)
                .map((name) => (
                  <NumberField name={name} value={config[name]} />
                ))}
            </Item>
          </Grid>
        </Grid>
        <Grid container>
          <Button
            color="primary"
            variant="contained"
            sx={{ margin: 1, top: 5, left: 30 }}
          >
            Save
          </Button>
          <Button
            color="warning"
            variant="contained"
            sx={{ margin: 1, top: 5, left: 30 }}
          >
            Reload
          </Button>
        </Grid>
      </Item>
    </Box>
  );
}

export default InitSettings;
