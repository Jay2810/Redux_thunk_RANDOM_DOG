import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

export default function AppBarTop() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" style={{ backgroundColor: "#f44336" }}>
        <Toolbar variant="dense">
          <Typography variant="h6" component="div">
            Random Dog Application
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
