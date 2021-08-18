/* eslint no-unused-vars: ["error", { "args": "none" }] */
import React from "react";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import MuiAppBar from "@material-ui/core/AppBar";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Grid from "@material-ui/core/Grid";
import IconButton from "@material-ui/core/IconButton";
import TextField from "@material-ui/core/TextField";
import MuiToolbar from "@material-ui/core/Toolbar";
import MuiTypography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import MUIDataTable from "mui-datatables";

const useStyles = makeStyles((theme) => ({
  root: {
  flexGrow: 1,
  },
  button: {
    margin: theme.spacing(1),
  },
  table: {
    marginTop: "10px",
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
  { name: "period_time", value: 0.0 },
  { name: "swing_right_left", value: 0.0 },
  { name: "dsp_ratio", value: 0.0 },
  { name: "period_comp_ratio", value: 0.0 },
  { name: "swing_up_down", value: 0.0 },
  { name: "arm_swing_gain", value: 0.0 },
  { name: "backward_hip_comp_ratio", value: 0.0 },
  { name: "foot_comp_ratio", value: 0.0 },
  { name: "foot_height", value: 0.0 },
  { name: "move_accel_ratio", value: 0.0 },
  { name: "foot_accel_ratio", value: 0.0 },
];

const offsetData = [
  { name: "x_offset", value: 0.0 },
  { name: "y_offset", value: 0.0 },
  { name: "z_offset", value: 0.0 },
  { name: "roll_offset", value: 0.0 },
  { name: "hip_pitch_offset", value: 0.0 },
  { name: "pitch_offset", value: 0.0 },
  { name: "yaw_offset", value: 0.0 },
];

const balanceData = [
  { name: "balance_knee_gain", value: 0.0 },
  { name: "balance_ankle_pitch_gain", value: 0.0 },
  { name: "balance_hip_roll_gain", value: 0.0 },
  { name: "balance_ankle_roll_gain", value: 0.0 },
];

const pidData = [
  { name: "p_gain", value: 0.0 },
  { name: "i_gain", value: 0.0 },
  { name: "d_gain", value: 0.0 },
];

const odometryData = [
  { name: "ry_coefficient", value: 0.0 },
  { name: "fx_coefficient", value: 0.0 },
  { name: "ly_coefficient", value: 0.0 },
];

const kinematicData = [
  { name: "thigh_length", value: 0.0 },
  { name: "calf_length", value: 0.0 },
  { name: "ankle_length", value: 0.0 },
  { name: "leg_length", value: 0.0 },
];

const options_1 = {
  tableBodyHeight: "525px",
  pagination: false,
  filter: false,
  download: false,
  print: false,
  search: true,
  selectableRows: "single",
  sortOrder: {
    name: "ID",
    direction: "asc",
  },
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
  sortOrder: {
    name: "ID",
    direction: "asc",
  },
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
  sortOrder: {
    name: "ID",
    direction: "asc",
  },
  selectableRowsOnClick: false,
  selectableRowsHideCheckboxes: true,
};

function App() {
  const classes = useStyles();
  
  return (
    <div className={classes.root}>
      <MuiAppBar position="static">
        <MuiToolbar>
          {/* <img src="../logo.png" width="100" height="100"/> */}
          <MuiTypography variant="h5">Aruku App</MuiTypography>
        </MuiToolbar>
      </MuiAppBar>
      <Card>
        <MuiToolbar>
          <MuiTypography variant="h6">Walking Settings</MuiTypography>
        </MuiToolbar>
        <CardContent>
          <Grid container spacing={3}>
            <Grid item xs={6}>
              <MUIDataTable
                title="Ratio"
                data={ratioData}
                columns={columns}
                options={options_1}
              />
              <div style={{ marginTop: 10 }}>
                <MUIDataTable
                  title="Balance"
                  data={balanceData}
                  columns={columns}
                  options={options_2}
                />
              </div>
              <div style={{ marginTop: 10 }}>
                <MUIDataTable
                title="PID"
                data={pidData}
                columns={columns}
                options={options_3}
                />
              </div>
            </Grid>
            <Grid item xs={6}>
              <MUIDataTable
                title="Offset"
                data={offsetData}
                columns={columns}
                options={options_1}
              />
              <div style={{ marginTop: 10 }}>
                <MUIDataTable
                  title="Kinematic"
                  data={kinematicData}
                  columns={columns}
                  options={options_2}
                />
              </div>
              <div style={{ marginTop: 10 }}>
                <MUIDataTable
                  title="Odometry"
                  data={odometryData}
                  columns={columns}
                  options={options_3}
                />
              </div>
            </Grid>
          </Grid>
          <div style={{ margin: 10 }}>
          <Button variant="contained" color="primary">
            Save
          </Button>
          <Button variant="contained" color="secondary">
            Reload
          </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

export default App;
