import React, { useState } from "react";
import { Container } from "@mui/system";
import {
  Button,
  TextField,
  Typography,
  Box,
  Grid,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
} from "@mui/material";
import subscribe from "../../assets/otherImages/subscribe.svg";
import popImg from "../../assets/otherImages/thankyou.svg";
import submit from "../../assets/otherImages/submit.svg";

const SubscribeUs = () => {
  const [open, setOpen] = useState(false);
  const handleClose = () => {
    setOpen(false);
  };
  const handleOpen = () => {
    setOpen(true);
  };

  return (
    <div>
      <Container maxWidth="lg" sx={{ my: 5 }}>
        <Typography
          //textAlign="center"
          variant="h6"
          sx={{
            color: "secondary.main",
            fontSize: "30px",
          }}
        >
          Subscribe for plan updates
        </Typography>
        <Container maxWidth="md" sx={{ my: 5, mb: 10 }}>
          <Grid container spacing={5}>
            <Grid
              item
              xs={12}
              sm={6}
              md={6}
              display="flex"
              justifyContent="center"
            >
              <img
                style={{
                  maxWidth: "100%",
                  height: "auto",
                  padding: 0,
                  margin: 0,
                }}
                src={subscribe}
                alt="/"
              />
            </Grid>
            <Grid
              item
              xs={12}
              sm={6}
              md={6}
              display="flex"
              justifyContent="center"
            >
              <Box
                width={700}
                display="flex"
                flexDirection="column"
                alignItems="center"
                justifyContent="center"
                //margin="auto"
                //marginTop={5}
                //padding={3}
                //borderRadius={5}
              >
                <TextField
                  id="filled-textarea"
                  label="Enter your email"
                  margin="normal"
                  multiline
                  variant="filled"
                  sx={{ m: 1, width: "32ch" }}
                ></TextField>

                <TextField
                  id="filled-textarea"
                  label="Enter your Contact"
                  margin="normal"
                  multiline
                  variant="filled"
                  sx={{ m: 1, width: "32ch" }}
                ></TextField>

                <Button
                  onClick={handleOpen}
                  variant="outlined"
                  size="medium"
                  sx={{
                    marginTop: 3,
                    borderRadius: 10,
                    borderColor: "#000",
                    backgroundColor: "#7064fc",
                    color: "#ffffff",
                    ":hover": {
                      borderColor: "#7064fc",
                      backgroundColor: "#ffffff",
                      color: "#7064fc",
                    },
                  }}
                >
                  Subscribe
                </Button>
              </Box>
            </Grid>
          </Grid>
        </Container>
        <Dialog
          open={open}
          onClose={handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle textAlign={"center"} id="alert-dialog-description">
            {"Thank you for subscribing!"}
          </DialogTitle>
          <DialogContent>
            <DialogContentText align="center" id="alert-dialog-description">
              We will nofify you soon for more plan updates
            </DialogContentText>
            <Box
              display="flex"
              flexDirection={"column"}
              alignItems="center"
              justifyContent={"center"}
              margin="auto"
              marginTop={2}
              padding={3}
              borderRadius={5}
            >
              <img
                src={popImg}
                alt="/"
                loading="lazy"
                style={{
                  maxWidth: "70%",
                  height: "auto",
                  padding: 0,
                  margin: 0,
                }}
              />
            </Box>
          </DialogContent>
          <DialogActions justifyContent="center">
            <Button onClick={handleClose}>Close</Button>
          </DialogActions>
        </Dialog>
      </Container>
    </div>
  );
};

export default SubscribeUs;
