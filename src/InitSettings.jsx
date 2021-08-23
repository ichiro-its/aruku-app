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
    width: 150,
    type: "number",
    editable: true,
    sortable: false,
  },
];

const leftData = [
  { id: 1, name: "left_shoulder_pitch", value: 15 },
  { id: 2, name: "left_shoulder_roll", value: -10 },
  { id: 3, name: "left_elbow", value: 50 },
  { id: 4, name: "left_hip_yaw", value: 3 },
  { id: 5, name: "left_hip_roll", value: -3 },
  { id: 6, name: "left_hip_pitch", value: 5 },
  { id: 7, name: "left_knee", value: 0 },
  { id: 8, name: "left_ankle_roll", value: -2 },
  { id: 9, name: "left_ankle_pitch", value: 0 },
];

const rightData = [
  { id: 1, name: "right_shoulder_pitch", value: 15 },
  { id: 2, name: "right_shoulder_roll", value: -10 },
  { id: 3, name: "right_elbow", value: 50 },
  { id: 4, name: "right_hip_yaw", value: -3 },
  { id: 5, name: "right_hip_roll", value: 3 },
  { id: 6, name: "right_hip_pitch", value: 5 },
  { id: 7, name: "right_knee", value: 0 },
  { id: 8, name: "right_ankle_roll", value: 2 },
  { id: 9, name: "right_ankle_pitch", value: 0 },
];

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
            <Grid item xs={12} md={6}>
              <MuiTypography variant="h6">Left Foot</MuiTypography>
              <div style={{ marginBottom: 10, height: 470, width: "100%" }}>
                <DataGrid
                  rows={leftData}
                  columns={columns}
                  rowHeight={40}
                  disableColumnMenu
                  rowsPerPageOptions={[]}
                />
              </div>
            </Grid>
            <Grid item xs={12} md={6}>
              <MuiTypography variant="h6">Right Foot</MuiTypography>
              <div style={{ marginBottom: 10, height: 470, width: "100%" }}>
                <DataGrid
                  rows={rightData}
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
            to="/Init"
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

export default Init;
