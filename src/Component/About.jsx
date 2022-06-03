import { Box, Typography, Grid } from "@mui/material";
import React from "react";

function About() {
  return (
    <Box
      px={{ xs: 3, md: 8, lg: 15, xl: 15 }}
      sx={{ height: { lg: "calc(100vh - 71px)", xs: "100%" } }}
      className="Box"
    >
      <Typography sx={{ color: "text.primary" }}>
        <Box
          py={{ xs: 4, md: 12, lg: 12 }}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Typography variant="h2">Hello I'm Dennis Granheimer</Typography>
        </Box>

        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <img
              alt="Portrait"
              style={{
                width: "100%",
                borderRadius: "20px",
                marginBottom: "96px",
              }}
              src="/Images/Portfolio.webp"
            />
          </Grid>
          <Grid
            item
            xs={12}
            md={6}
            sx={{
              display: "flex",
              justifyContent: "flex-start",
              alignItems: "center",
            }}
          >
            <Typography sx={{ fontSize: 20 }}>
              I'm a junior full-stack web developer at the beginning of his
              career. The last half year I have been enrolled in the Techover
              Academy which is a programming bootcamp that has helped me acquire
              skills such as: React, MongoDB, Express, Node, and Redux. Now I am
              on the hunt for an adventure in the tech industry and hopefully my
              problem solving capabilities can improve for my future workplace
              endeavours.
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Box pb={{ xs: 2, lg: 6 }}>
              <Typography variant="h3">My Story</Typography>
            </Box>
            <Box pb={{ xs: 4, lg: 8 }}>
              <Typography sx={{ fontSize: 20 }}>
                I have always been fascinated by computers and how they work, I
                got my first personal computer from my dad when I was 6 years
                old and have been hooked by the amazing possibilities ever
                since. I started building and tinkering with my pc and
                eventually my fascination over programming grew more each year.
                This year I finally took the big leap and decided to learn
                programming for real and here I am fluent in the MERN stack only
                3 months later.
                <div style={{ marginTop: "20px" }}>
                  Academy which is a programming bootcamp that has helped me
                  acquire skills such as: React, MongoDB, Express, Node, and
                  Redux. Now I am on the hunt for an adventure in the tech
                  industry and hopefully my problem solving capabilities can
                  improve for my future workplace endeavours.
                </div>
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Typography>
    </Box>
  );
}

export default About;
