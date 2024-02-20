import React from "react";
import { Grid, TextField } from "@mui/material";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { useState } from "react";
import WePlanMain from "./WePlanMain";
import { Typography } from "@mui/material";
import { Container } from "@mui/system";
import vector from "../../assets/otherImages/WePlanVector.svg";
import Typewriter from "typewriter-effect";
const WePlan = () => {
  const [value, setValue] = useState(0);
  const AddTextFieldok = () => {
    setValue(value + 1);
  };
  return (
    <>
      <Container maxWidth="xl" sx={{ my: 10 }}>
        <Grid
          container
          spacing={7}
          sx={{ marginBottom: { xs: 2, lg: 10, md: 5, sm: 8 } }}
        >
          <Grid item lg={6} sm={6} xs={12}>
            <Typography
              variant="h2"
              textAlign="center"
              // fontFamily={"sans-serif"}
              sx={{
                marginTop: { xs: 0, lg: 20, sm: 5, md: 12 },
                fontSize: {
                  lg: 65,
                  sm: 54,
                  xs: 34,
                },
                marginLeft: { lg: 5, xs: 0, sm: 2 },
              }}
            >
              <Typewriter
                onInit={(typewriter) => {
                  typewriter.typeString("We plan for you !").start();
                }}
              />
            </Typography>
          </Grid>
          <Grid item lg={6} sm={6} xs={12}>
            <img
              src={vector}
              alt="/"
              style={{
                maxWidth: "100%",
                height: "auto",
                padding: 0,
                margin: 0,
              }}
            />
          </Grid>
        </Grid>

        <Box
          textAlign="center"
          component="form"
          sx={{
            "& .MuiTextField-root": { m: 1, width: "35ch" },
          }}
        >
          <TextField
            id="outlined-textarea"
            label="Start Your Trip from"
            placeholder="Enter Your Location"
            multiline
            variant="filled"
          />
          <TextField
            id="outlined-textarea"
            label="Destination/Departure"
            placeholder="Enter Your Location"
            multiline
            variant="filled"
          />
          {Array.from(Array(value)).map((c, index) => {
            return (
              <TextField
                key={c}
                id="outlined-textarea"
                label="Destination/Departure"
                placeholder="Enter Your Location"
                multiline
                variant="filled"
              />
            );
          })}
          <Box>
            <Button
              variant="outlined"
              sx={{ mt: "19px", mx: "19px" }}
              onClick={AddTextFieldok}
            >
              Add
            </Button>
          </Box>
        </Box>
      </Container>
      <WePlanMain val={value + 2} />
    </>
  );
};

export default WePlan;
