import React from "react";
import { useState } from "react";
import {
  TextField,
  Typography,
  Button,
  Box,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
} from "@mui/material";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import {
  DatePicker,
  DateTimePicker,
  LocalizationProvider,
} from "@mui/x-date-pickers";
import submitImg from "../../assets/otherImages/submit.svg";
import { Container } from "@mui/system";
import { Link, NavLink } from "react-router-dom";

const WePlanMain = ({ val }) => {
  const mainValue = val - 1;
  const handleChange = (newValue) => {
    setValue(newValue);
  };
  const [value, setValue] = useState(null); //date and time picker
  const [valueEnd, setValueEnd] = useState(null); //end date picker
  const [open, setOpen] = useState(false);
  const handleClose = () => {
    setOpen(false);
  };
  const handleOpen = () => {
    setOpen(true);
  };

  return (
    <div>
      <Container maxWidth="xl">
        {Array.from(Array(mainValue)).map((c, index) => {
          return (
            <div
              className="detail"
              style={{ justifyContent: "center" }}
              key={index}
            >
              <Typography
                align="center"
                variant="h4"
                component="h2"
                key={c}
                sx={{ mt: "20px", mb: "20px" }}
              >
                Enter Trip {index + 1} Details
              </Typography>
              <Box
                textAlign="center"
                component="form"
                sx={{
                  "& .MuiTextField-root": { m: 1, width: "35ch" },
                  // mx: "20px",
                }}
              >
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DateTimePicker
                    label="Enter Date & Time"
                    value={value}
                    onChange={handleChange}
                    renderInput={(params) => <TextField {...params} />}
                  />
                  <DatePicker
                    label="End Date"
                    value={valueEnd}
                    onChange={(newValue) => {
                      setValueEnd(newValue);
                    }}
                    renderInput={(params) => <TextField {...params} />}
                  />
                </LocalizationProvider>
                <TextField
                  id="outlined-textarea"
                  label="Start Time"
                  multiline
                  variant="filled"
                  align="center"
                />

                <TextField
                  id="outlined-textarea"
                  label="Vehicle"
                  multiline
                  variant="filled"
                />
                <TextField
                  id="outlined-textarea"
                  label="Budget"
                  multiline
                  variant="filled"
                />
                <TextField
                  id="outlined-textarea"
                  label="Important Notes for us"
                  multiline
                  variant="filled"
                />
              </Box>
            </div>
          );
        })}
      </Container>
      <Box align="center" fontFamily={"sans-serif"}>
        <Button
          onClick={handleOpen}
          variant="contained"
          color="success"
          sx={{ my: "20px", bgcolor: "black" }}
         
        >
          Submit
        </Button>
      </Box>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle textAlign={"center"} id="alert-dialog-description">
          {"Thanks for the submission!"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText align="center" id="alert-dialog-description">
            Your data is safe with us!
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
              src={submitImg}
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
        <Box>
          <DialogActions>
            <Button onClick={handleClose}>Close</Button>
            <Button>Download pdf</Button>
          </DialogActions>
          <DialogActions
            sx={{ display: "flex", justifyContent: "flex-start" }}
          ></DialogActions>
        </Box>
      </Dialog>
    </div>
  );
};

export default WePlanMain;
