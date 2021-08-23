/* eslint no-unused-vars: ["error", { "args": "none" }] */
import React from "react";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Grid from "@material-ui/core/Grid";
import MuiTypography from "@material-ui/core/Typography";
import { DataGrid } from "@material-ui/data-grid";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  button: {
    margin: "10px",
  },
  table: {
    marginBottom: "10px",
  },
  title: {
    padding: theme.spacing(2),
    textAlign: "center",
  },
}));

const columns = [
  {
    field: "id",
    headerName: "#",
    width: 15,
    editable: true,
    sortable: false,
  },
  { field: "name", headerName: "Name", width: 300, sortable: false },
  {
    field: "value",
    headerName: "Value",
    width: 100,
    type: "number",
    editable: true,
    sortable: false,
  },
];

const ratioData = [
  { id: 1, name: "forward_hip_comp_ratio", value: 0.0 },
  { id: 2, name: "dsp_comp_ratio", value: 0.0 },
  { id: 3, name: "period_time", value: 810.0 },
  { id: 4, name: "swing_right_left", value: 15.0 },
  { id: 5, name: "dsp_ratio", value: -0.12 },
  { id: 6, name: "period_comp_ratio", value: 0.0 },
  { id: 7, name: "swing_up_down", value: -1.0 },
  { id: 8, name: "arm_swing_gain", value: 0.2 },
  { id: 9, name: "backward_hip_comp_ratio", value: 0.0 },
  { id: 10, name: "foot_comp_ratio", value: 0.0 },
  { id: 11, name: "foot_height", value: 30.0 },
  { id: 12, name: "move_accel_ratio", value: 1.0 },
  { id: 13, name: "foot_accel_ratio", value: 0.2 },
];

const offsetData = [
  { id: 1, name: "y_offset", value: 0.0 },
  { id: 2, name: "roll_offset", value: 1.0 },
  { id: 3, name: "hip_pitch_offset", value: 23.0 },
  { id: 4, name: "pitch_offset", value: -0.4 },
  { id: 5, name: "yaw_offset", value: 0.1 },
  { id: 6, name: "z_offset", value: 25.0 },
  { id: 7, name: "x_offset", value: 40.0 },
];

const balanceData = [
  { id: 1, name: "balance_knee_gain", value: 0.3 },
  { id: 2, name: "balance_ankle_pitch_gain", value: 0.3 },
  { id: 3, name: "balance_hip_roll_gain", value: 0.2 },
  { id: 4, name: "balance_ankle_roll_gain", value: 0.2 },
];

const pidData = [
  { id: 1, name: "p_gain", value: 10 },
  { id: 2, name: "i_gain", value: 2 },
  { id: 3, name: "d_gain", value: 3 },
];

const odometryData = [
  { id: 1, name: "ry_coefficient", value: 5.0 },
  { id: 2, name: "fx_coefficient", value: 5.85 },
  { id: 3, name: "ly_coefficient", value: 5.0 },
];

const kinematicData = [
  { id: 1, name: "thigh_length", value: 199.0 },
  { id: 2, name: "calf_length", value: 195.0 },
  { id: 3, name: "ankle_length", value: 59.7 },
  { id: 4, name: "leg_length", value: 394 },
];

function Walk() {
  const classes = useStyles();
  const ratio = ratioData;
  const offset = offsetData;
  const balance = balanceData;
  const kinematic = kinematicData;
  const odometry = odometryData;
  const pid = pidData;

  return (
    <div className={classes.root}>
      <Card>
        <Grid item xs={12} className={classes.title}>
          <MuiTypography variant="h6">Walk Settings</MuiTypography>
        </Grid>
        <CardContent>
          <Grid container spacing={3}>
            <Grid item xs={12} md={6}>
              <MuiTypography variant="h6">Ratio</MuiTypography>
              <div style={{ marginBottom: 10, height: 390, width: "100%" }}>
                <DataGrid
                  title="Ratio"
                  rows={ratio}
                  columns={columns}
                  rowHeight={40}
                  disableColumnMenu
                  rowsPerPageOptions={[]}
                />
              </div>
              <MuiTypography variant="h6">Balance</MuiTypography>
              <div style={{ marginBottom: 10, height: 280, width: "100%" }}>
                <DataGrid
                  rows={balance}
                  columns={columns}
                  rowHeight={40}
                  disableColumnMenu
                  rowsPerPageOptions={[]}
                />
              </div>
              <MuiTypography variant="h6">PID</MuiTypography>
              <div style={{ marginBottom: 10, height: 230, width: "100%" }}>
                <DataGrid
                  rows={pid}
                  columns={columns}
                  rowHeight={40}
                  disableColumnMenu
                  rowsPerPageOptions={[]}
                />
              </div>
            </Grid>
            <Grid item xs={12} md={6}>
              <MuiTypography variant="h6">Offset</MuiTypography>
              <div style={{ marginBottom: 10, height: 390, width: "100%" }}>
                <DataGrid
                  rows={offset}
                  columns={columns}
                  rowHeight={40}
                  disableColumnMenu
                  rowsPerPageOptions={[]}
                />
              </div>
              <MuiTypography variant="h6">Kinematic</MuiTypography>
              <div style={{ marginBottom: 10, height: 280, width: "100%" }}>
                <DataGrid
                  rows={kinematic}
                  columns={columns}
                  rowHeight={40}
                  disableColumnMenu
                  rowsPerPageOptions={[]}
                />
              </div>
              <MuiTypography variant="h6">Odometry</MuiTypography>
              <div style={{ marginBottom: 10, height: 230, width: "100%" }}>
                <DataGrid
                  rows={odometry}
                  columns={columns}
                  rowHeight={40}
                  disableColumnMenu
                  rowsPerPageOptions={[]}
                />
              </div>
            </Grid>
          </Grid>
          <Button
            variant="contained"
            color="primary"
            className={classes.button}
          >
            Save
          </Button>
          <Button
            component={Link}
            to="/"
            variant="contained"
            color="secondary"
            className={classes.button}
          >
            Reload
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}

export default Walk;
