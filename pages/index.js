import React from "react";

import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Header from "../components/Header";

import styles from "./index.module.css";

export default function Index() {
  return (
    <Container maxWidth="lg">
      <Box>
        <Header />
      </Box>
    </Container>
  );
}
