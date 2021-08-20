/* eslint no-unused-vars: ["error", { "args": "none" }] */
import React from "react";
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
  }
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

const leftData = [
  { name: "left_shoulder_pitch", value: 15 },
  { name: "left_shoulder_roll", value: -10 },
  { name: "left_elbow", value: 50 },
  { name: "left_hip_yaw", value: 3 },
  { name: "left_hip_roll", value: -3 },
  { name: "left_hip_pitch", value: 5 },
  { name: "left_knee", value: 0 },
  { name: "left_ankle_roll", value: -2 },
  { name: "left_ankle_pitch", value: 0 }
];

const rightData = [
  { name: "right_shoulder_pitch", value: 15 },
  { name: "right_shoulder_roll", value: -10 },
  { name: "right_elbow", value: 50 },
  { name: "right_hip_yaw", value: -3 },
  { name: "right_hip_roll", value: 3 },
  { name: "right_hip_pitch", value: 5 },
  { name: "right_knee", value: 0 },
  { name: "right_ankle_roll", value: 2 },
  { name: "right_ankle_pitch", value: 0 }
];

const options = {
  tableBodyHeight: "550px",
  pagination: false,
  filter: false,
  download: false,
  print: false,
  search: true,
  selectableRows: "single",
  selectableRowsOnClick: false,
  selectableRowsHideCheckboxes: true,
};

function Init() {
  const classes = useStyles();
  
  return (
    <div className={classes.root}>
      <Card>
        <Grid item xs={12}>
          <MuiTypography variant="h6" className={classes.title}>
            Init Settings
          </MuiTypography>
        </Grid>
        <CardContent>
          <Grid container spacing={3}>
            <Grid item xs={6}>
              <MUIDataTable
                className={classes.table}
                title="Left Foot"
                data={leftData}
                columns={columns}
                options={options}
              />
            </Grid>
            <Grid item xs={6}>
              <MUIDataTable
                className={classes.table}
                title="Right Foot"
                data={rightData}
                columns={columns}
                options={options}
              />
            </Grid>
          </Grid>
          <Button variant="contained" color="primary" className={classes.button}>
            Save
          </Button>
          <Button variant="contained" color="secondary" className={classes.button}>
            Reload
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}

export default Init;
