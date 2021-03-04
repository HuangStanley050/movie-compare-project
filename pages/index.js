import React from "react";

import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Header from "../components/Header";
import MovieLeft from "../components/MovieLeft";
import MovieRight from "../components/MovieRight";
import styles from "./index.module.css";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
}));

export default function Index() {
  const classes = useStyles();

  return (
    <Container maxWidth="lg">
      <Box>
        <Header />
      </Box>
      <div className={classes.root}>
        <Grid container spacing={3}>
          <Grid item xs={6}>
            <MovieLeft />
          </Grid>
          <Grid item xs={6}>
            <MovieRight />
          </Grid>
        </Grid>
      </div>
    </Container>
  );
}
