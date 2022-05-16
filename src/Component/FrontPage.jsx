import React from "react";
import { styled } from "@mui/material/styles";
import { Box, Paper } from "@mui/material";
import Experience from "./Experience";
import Info from "./Info";
import Project from "./Project";

function FrontPage() {
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
  }));

  return (
    <Box>
      {/* Personal info */}
      <Info />

      {/* Experience tab  */}
      <Experience />

      <Project />
    </Box>
  );
}

export default FrontPage;
