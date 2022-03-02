import React from "react";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import KeyboardDoubleArrowLeftIcon from "@mui/icons-material/KeyboardDoubleArrowLeft";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";

const ItemTitle = styled(Typography)(({ theme }) => ({
  textAlign: "left",
  padding: theme.spacing(1),
}));

function NumberField({ name, value }) {
  return (
    <Grid container spacing={1}>
      <Grid item xs={6} spacing={1}>
        <ItemTitle> {name} </ItemTitle>
      </Grid>
      <Grid item xs={1}>
        <IconButton>
          <KeyboardDoubleArrowLeftIcon />
        </IconButton>
      </Grid>
      <Grid item xs={1}>
        <IconButton>
          <KeyboardArrowLeft />
        </IconButton>
      </Grid>
      <Grid item xs={1}>
        <ItemTitle contentEditable="true">{value}</ItemTitle>
      </Grid>
      <Grid item xs={1}>
        <IconButton>
          <KeyboardArrowRight />
        </IconButton>
      </Grid>
      <Grid item xs={1}>
        <IconButton>
          <KeyboardDoubleArrowRightIcon />
        </IconButton>
      </Grid>
    </Grid>
  );
}

export default NumberField;
