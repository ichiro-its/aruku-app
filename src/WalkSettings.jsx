/* eslint no-unused-vars: ["error", { "args": "none" }] */
import React from "react";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import MuiTypography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import MUIDataTable from "mui-datatables";

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
    name: "name",
    label: "Name",
  },
  {
    name: "value",
    label: "Value",
    options: {
      customBodyRender: (value, tableMeta, updateValue) => (
        <FormControlLabel
          value={value}
          control={<TextField value={value} />}
          onChange={(event) => updateValue(event.target.value)}
        />
      ),
    },
  },
];

const ratioData = [
  { name: "forward_hip_comp_ratio", value: 0.0 },
  { name: "dsp_comp_ratio", value: 0.0 },
  { name: "period_time", value: 810.0 },
  { name: "swing_right_left", value: 15.0 },
  { name: "dsp_ratio", value: -0.12 },
  { name: "period_comp_ratio", value: 0.0 },
  { name: "swing_up_down", value: -1.0 },
  { name: "arm_swing_gain", value: 0.2 },
  { name: "backward_hip_comp_ratio", value: 0.0 },
  { name: "foot_comp_ratio", value: 0.0 },
  { name: "foot_height", value: 30.0 },
  { name: "move_accel_ratio", value: 1.0 },
  { name: "foot_accel_ratio", value: 0.2 },
];

const offsetData = [
  { name: "y_offset", value: 0.0 },
  { name: "roll_offset", value: 1.0 },
  { name: "hip_pitch_offset", value: 23.0 },
  { name: "pitch_offset", value: -0.4 },
  { name: "yaw_offset", value: 0.1 },
  { name: "z_offset", value: 25.0 },
  { name: "x_offset", value: 40.0 },
];

const balanceData = [
  { name: "balance_knee_gain", value: 0.3 },
  { name: "balance_ankle_pitch_gain", value: 0.3 },
  { name: "balance_hip_roll_gain", value: 0.2 },
  { name: "balance_ankle_roll_gain", value: 0.2 },
];

const pidData = [
  { name: "p_gain", value: 10 },
  { name: "i_gain", value: 2 },
  { name: "d_gain", value: 3 },
];

const odometryData = [
  { name: "ry_coefficient", value: 5.0 },
  { name: "fx_coefficient", value: 5.85 },
  { name: "ly_coefficient", value: 5.0 },
];

const kinematicData = [
  { name: "thigh_length", value: 199.0 },
  { name: "calf_length", value: 195.0 },
  { name: "ankle_length", value: 59.7 },
  { name: "leg_length", value: 394 },
];

const options_1 = {
  tableBodyHeight: "525px",
  pagination: false,
  filter: false,
  download: false,
  print: false,
  search: true,
  selectableRows: "single",
  selectableRowsOnClick: false,
  selectableRowsHideCheckboxes: true,
};

const options_2 = {
  tableBodyHeight: "330px",
  pagination: false,
  filter: false,
  download: false,
  print: false,
  search: true,
  selectableRows: "single",
  selectableRowsOnClick: false,
  selectableRowsHideCheckboxes: true,
};

const options_3 = {
  tableBodyHeight: "265px",
  pagination: false,
  filter: false,
  download: false,
  print: false,
  search: true,
  selectableRows: "single",
  selectableRowsOnClick: false,
  selectableRowsHideCheckboxes: true,
};

function Walk() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Card>
        <Grid item xs={12} className={classes.title}>
          <MuiTypography variant="h6">Walk Settings</MuiTypography>
        </Grid>
        <CardContent>
          <Grid container spacing={3}>
            <Grid item xs={6}>
              <MUIDataTable
                className={classes.table}
                title="Ratio"
                data={ratioData}
                columns={columns}
                options={options_1}
              />
              <MUIDataTable
                className={classes.table}
                title="Balance"
                data={balanceData}
                columns={columns}
                options={options_2}
              />
              <MUIDataTable
                className={classes.table}
                title="PID"
                data={pidData}
                columns={columns}
                options={options_3}
              />
            </Grid>
            <Grid item xs={6}>
              <MUIDataTable
                className={classes.table}
                title="Offset"
                data={offsetData}
                columns={columns}
                options={options_1}
              />
              <MUIDataTable
                className={classes.table}
                title="Kinematic"
                data={kinematicData}
                columns={columns}
                options={options_2}
              />
              <MUIDataTable
                className={classes.table}
                title="Odometry"
                data={odometryData}
                columns={columns}
                options={options_3}
              />
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
