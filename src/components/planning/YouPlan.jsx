import { Container, Grid, TextField, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import "../../index.css";
import { useState } from "react";
import YouPlanMain from "./YouPlanMain";
import image from "../../assets/otherImages/YouPlanVector.svg";
import Typewriter from "typewriter-effect";

const YouPlan = () => {
  const [counter, setCounter] = useState(0);
  const AddTextFieldok = () => {
    setCounter(counter + 1);
  };
  return (
    <>
      <Container maxWidth="xl" sx={{ my: 10 }}>
        <Grid container spacing={7}>
          <Grid
            item
            lg={6}
            sm={6}
            xs={12}
            sx={{ marginBottom: { xs: 2, lg: 20, md: 5, sm: 8 } }}
          >
            <Typography
              textAlign="center"
              variant="h2"
              sx={{
                marginTop: { xs: 0, lg: 25, sm: 5, md: 12 },
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
                  typewriter.typeString("Plan your trip!").start();
                }}
              />
            </Typography>
          </Grid>
          <Grid item lg={6} sm={6} xs={12}>
            <img
              src={image}
              alt="/"
              style={{
                maxWidth: "100%",
                height: "auto",
                padding: 0,
                margin: 0,
              }}
            />
            {/* <Typography variant="h3">Plan Yor Trip!</Typography> */}
          </Grid>
        </Grid>
        <Box
          my={5}
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
          {Array.from(Array(counter)).map((c, index) => {
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
            {" "}
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
      <YouPlanMain count={counter + 2} />
    </>
  );
};

export default YouPlan;
