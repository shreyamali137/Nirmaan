// src/App.js
import React from "react";
import ProjectForm from "./ProjectForm";
import { CssBaseline, Container, Typography } from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#1976d2",
    },
    secondary: {
      main: "#dc004e",
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container>
        <Typography variant="h2" align="center" gutterBottom>
          Nirmaan Project Deployer
        </Typography>
        <ProjectForm />
      </Container>
    </ThemeProvider>
  );
}

export default App;
