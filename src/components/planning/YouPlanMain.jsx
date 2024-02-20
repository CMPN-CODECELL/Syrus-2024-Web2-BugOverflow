import * as React from "react";
import { useState, useEffect } from "react";
import {
  TextField,
  Typography,
  Container,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
} from "@mui/material";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker, DateTimePicker } from "@mui/x-date-pickers";
import submitImg from "../../assets/otherImages/submit.svg";

const YouPlanMain = ({ count }) => {
  const mainCount = count - 1;

  const [value, setValue] = useState(null); //date and time picker

  const [formData, updateFormData] = useState({
    DateAndTime: "",
    EndDate: "",
    Vehicle: "",
    Distance: "",
    PlacestoVisit: "",
    Costing: "",
    ImportantNotes: "",
    Days: "",
    Hours: "",
    Mins: "",
  });

  const [formInfo, updateFormInfo] = useState([
    {
      DateAndTime: "",
      EndDate: "",
      Vehicle: "",
      Distance: "",
      PlacestoVisit: "",
      Costing: "",
      ImportantNotes: "",
      Days: "",
      Hours: "",
      Mins: "",
    },
  ]);

  const addFormData = (formData) => {
    const newData = [...formInfo, formData];
    updateFormInfo(newData);
  };

  const [valueEnd, setValueEnd] = useState(null); //end date picker

  const handleChange = (e) => {
    updateFormData({
      ...formData,

      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addFormData(formData);
  };

  useEffect(() => {
    console.log(formInfo);
  }, [formInfo]);

  // const changeDateVal = (e) => {
  //   setValue({
  //     ...value,
  //     [e.target.name]: e.target.value,
  //   });
  // };
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
        {Array.from(Array(mainCount)).map((c, index) => {
          return (
            <div>
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
                align="center"
                component="form"
                sx={{
                  "& .MuiTextField-root": { m: 1, width: "35ch", ml: "1px" },
                  // mx: "20px",
                }}
              >
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DateTimePicker
                    name="DateAndTime"
                    label=" Enter Date & Time "
                    value={value}
                    onChange={(newValue) => {
                      updateFormData(newValue);

                      setValue(newValue);
                    }}
                    renderInput={(params) => <TextField {...params} />}
                  />

                  <DatePicker
                    name="EndDate"
                    label="EndDate"
                    value={valueEnd}
                    onChange={(newValue) => {
                      updateFormData(newValue);
                      setValueEnd(newValue);
                    }}
                    renderInput={(params) => <TextField {...params} />}
                  />
                </LocalizationProvider>

                <TextField
                  name="Vehicle"
                  id="outlined-textarea"
                  label="Vehicle"
                  multiline
                  variant="filled"
                  //value={formData.name}
                  onChange={handleChange}
                />

                <TextField
                  name="Distance"
                  id="outlined-textarea"
                  label="Distance"
                  multiline
                  variant="filled"
                  value={formData.name}
                  onChange={handleChange}
                />

                <TextField
                  name="PlacestoVisit"
                  id="outlined-textarea"
                  label="Places to visit"
                  multiline
                  variant="filled"
                  value={formData.name}
                  onChange={handleChange}
                />

                <TextField
                  name="Costing"
                  id="outlined-textarea"
                  label="Costing"
                  multiline
                  variant="filled"
                  value={formData.name}
                  onChange={handleChange}
                />

                <TextField
                  name="ImportantNotes"
                  id="outlined-textarea"
                  label="Important Notes"
                  multiline
                  variant="filled"
                  value={formData.name}
                  onChange={handleChange}
                />

                <TextField
                  name="Days"
                  label="Days"
                  variant="filled"
                  id="outlined-start-adornment"
                  value={formData.name}
                  onChange={handleChange}
                />

                <TextField
                  name="Hours"
                  label="Hours"
                  variant="filled"
                  id="outlined-start-adornment"
                  value={formData.name}
                  onChange={handleChange}
                />

                <TextField
                  name="Mins"
                  label="Mins"
                  variant="filled"
                  id="outlined-start-adornment"
                  value={formData.name}
                  onChange={handleChange}
                />
              </Box>
            </div>
          );
        })}
      </Container>
      <Box align="center" fontFamily={"sans-serif"}>
        <Button
          onClick={(e) => {
            handleOpen();
            handleSubmit(e);
          }}
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

export default YouPlanMain;
