import * as React from "react";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableRow from "@mui/material/TableRow";

import KeyboardDoubleArrowLeftIcon from "@mui/icons-material/KeyboardDoubleArrowLeft";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";
import IconButton from "@mui/material/IconButton";
import FirstPageIcon from "@mui/icons-material/FirstPage";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import LastPageIcon from "@mui/icons-material/LastPage";

// import NumberInput from "./components/NumberInput";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const ItemTitle = styled(Typography)(({ theme }) => ({
  textAlign: "left",
  padding: theme.spacing(1),
}));

const LeftItemRows = [
  NumberInput("LEFT_SHOULDER_PITCH", 15),
  NumberInput("LEFT_SHOULDER_ROLL", 10),
  NumberInput("LEFT_ELBOW", 50),
  NumberInput("LEFT_HIP_YAW", 3),
  NumberInput("LEFT_HIP_ROLL", -3),
  NumberInput("LEFT_HIP_PITCH", 5),
  NumberInput("LEFT_KNEE", 0),
  NumberInput("LEFT_ANKLE_ROLL", -2),
  NumberInput("LEFT_ANKLE_PITCH", 0),
];

const RightItemRows = [
  NumberInput("RIGHT_SHOULDER_PITCH", 15),
  NumberInput("RIGHT_SHOULDER_ROLL", 10),
  NumberInput("RIGHT_ELBOW", 50),
  NumberInput("RIGHT_HIP_YAW", 3),
  NumberInput("RIGHT_HIP_ROLL", -3),
  NumberInput("RIGHT_HIP_PITCH", 5),
  NumberInput("RIGHT_KNEE", 0),
  NumberInput("RIGHT_ANKLE_ROLL", -2),
  NumberInput("RIGHT_ANKLE_PITCH", 0),
];

function NumberInput(props) {
  const { name, value } = props;
  // const [inputValue, setValue] = React.useState(value);
  // const minusOne = [
  //   "LEFT_SHOULDER_PITCH",
  //   "LEFT_SHOULDER_ROLL",
  //   "LEFT_ELBOW",
  //   "RIGHT_SHOULDER_PITCH",
  //   "RIGHT_SHOULDER_ROLL",
  //   "RIGHT_ELBOW",
  // ];

  // const addValue = (val) => {
  //   setValue(inputValue + val);
  // };

  // const subtractValue = (val) => {
  //   setValue(inputValue - val);
  // };

  // const handleValueChange = (e) => {
  //   setValue(e.target.inputValue);
  // };

  return (
    <React.Fragment>
      <Item>
        <Grid container spacing={1}>
          <Grid item xs={6}>
            <ItemTitle> {name} </ItemTitle>
          </Grid>
          <Grid item xs={1}>
            <IconButton>
              <KeyboardDoubleArrowLeftIcon
              // onClick={
              //   name in minusOne
              //     ? () => subtractValue(10)
              //     : () => subtractValue(1)
              // }
              />
            </IconButton>
          </Grid>
          <Grid item xs={1}>
            <IconButton>
              <KeyboardArrowLeft
              // onClick={
              //   name in minusOne
              //     ? () => subtractValue(1)
              //     : () => subtractValue(0.1)
              // }
              />
            </IconButton>
          </Grid>
          <Grid item xs={1}>
            <ItemTitle>{value}</ItemTitle>
          </Grid>
          <Grid item xs={1}>
            <IconButton>
              <KeyboardArrowRight
              // onClick={name in minusOne ? () => addValue(1) : () => addValue(0.1)}
              />
            </IconButton>
          </Grid>
          <Grid item xs={1}>
            <IconButton>
              <KeyboardDoubleArrowRightIcon
              // onClick={name in minusOne ? () => addValue(10) : () => addValue(1)}
              />
            </IconButton>
          </Grid>
        </Grid>
      </Item>
    </React.Fragment>
  );
}

function InitSettings() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Item>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <Item>
              <Typography variant="h6" component="div" sx={{ padding: 1 }}>
                Left Foot
              </Typography>
              <NumberInput name={"LEFT_SHOULDER_PITCH"} value={10} />
              <NumberInput name={"LEFT_SHOULDER_ROLL"} value={10} />
              <NumberInput name={"LEFT_ELBOW"} value={10} />
              <NumberInput name={"LEFT_HIP_YAW"} value={10} />
              <NumberInput name={"LEFT_HIP_ROLL"} value={10} />
              <NumberInput name={"LEFT_HIP_PITCH"} value={10} />
              <NumberInput name={"LEFT_KNEE"} value={10} />
              <NumberInput name={"LEFT_ANKLE_ROLL"} value={10} />
              <NumberInput name={"LEFT_ANKLE_PITCH"} value={10} />
            </Item>
          </Grid>
          <Grid item xs={6}>
            <Item>
              <Typography variant="h6" component="div" sx={{ padding: 1 }}>
                Right Foot
              </Typography>
              <NumberInput name={"RIGHT_SHOULDER_PITCH"} value={10} />
              <NumberInput name={"RIGHT_SHOULDER_ROLL"} value={10} />
              <NumberInput name={"RIGHT_ELBOW"} value={10} />
              <NumberInput name={"RIGHT_HIP_YAW"} value={10} />
              <NumberInput name={"RIGHT_HIP_ROLL"} value={10} />
              <NumberInput name={"RIGHT_HIP_PITCH"} value={10} />
              <NumberInput name={"RIGHT_KNEE"} value={10} />
              <NumberInput name={"RIGHT_ANKLE_ROLL"} value={10} />
              <NumberInput name={"RIGHT_ANKLE_PITCH"} value={10} />
            </Item>
          </Grid>
          <Button sx={{ margin: 1, top: 5, left: 30 }}>Save</Button>
          <Button sx={{ margin: 1, top: 5, left: 30 }}>Reload</Button>
        </Grid>
      </Item>
    </Box>
  );
}

export default InitSettings;
