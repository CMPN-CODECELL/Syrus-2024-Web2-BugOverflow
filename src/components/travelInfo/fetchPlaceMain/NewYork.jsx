import React, { useState } from "react";
import { NewyorkImages } from "../../../placesData/newyorkData";
import axios from "axios";
import {
  Container,
  Box,
  TextField,
  MenuItem,
  Button,
  Typography,
  CardContent,
  Backdrop,
  CircularProgress,
  Card,
  CardActionArea,
} from "@mui/material";
import { types } from "../../../UniversalData/UniversalData";

const NewYork = () => {
  const [val, setVal] = useState("");
  const [valtwo, setValTwo] = useState("");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(false);
  const [error, setError] = useState();

  const placebytext = {
    method: "GET",
    url: "https://trueway-places.p.rapidapi.com/FindPlaceByText",
    params: { text: val, language: "en" },
    headers: {
      "X-RapidAPI-Key": "4fcea2589fmsh1582a596188114cp1913a0jsndd859420a766",
      "X-RapidAPI-Host": "trueway-places.p.rapidapi.com",
    },
  };

  const handleSubmit = () => {
    setLoading(true);
    axios
      .request(placebytext)
      .then(function (response) {
        const latitude = response.data.results[0].location.lat;

        const longitude = response.data.results[0].location.lng;

        const searchbyLatLong = {
          method: "GET",
          url: "https://trueway-places.p.rapidapi.com/FindPlacesNearby",
          params: {
            location: `${latitude},${longitude}`,

            type: valtwo,
            radius: "10000",
            language: "en",
          },
          headers: {
            "X-RapidAPI-Key":
              "4fcea2589fmsh1582a596188114cp1913a0jsndd859420a766",
            "X-RapidAPI-Host": "trueway-places.p.rapidapi.com",
          },
        };

        axios
          .request(searchbyLatLong)
          .then(function (response) {
            console.log(response.data.results);
            setLoading(false);
            setResult(response.data.results);
          })
          .catch(function (error) {
            console.error(error);
            setError(error.response.status);
          });
      })
      .catch(function (error) {
        console.error(error);
        setError(error.response.status);
      });
  };

  if (error === 429) {
    return <h1>Sorry! Cannot fetch results now</h1>;
  }

  return (
    <div>
      <div
        id="carouselExampleInterval"
        class="carousel slide"
        data-bs-ride="carousel"
      >
        <div class="carousel-inner">
          {NewyorkImages.map((data, index) => (
            <div
              key={index}
              class="carousel-item active"
              data-bs-interval="8000"
            >
              <img key={index} src={data} class="d-block w-100" alt="..." />
            </div>
          ))}
        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleInterval"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleInterval"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>

      <Container maxWidth="xl" sx={{ my: 10 }}>
        <Box
          textAlign={"center"}
          component="form"
          sx={{
            "& .MuiTextField-root": { m: 1, width: "35ch" },
          }}
        >
          <TextField
            id="outlined-textarea"
            label="Search any place in new york"
            placeholder="Enter Your Location"
            multiline
            variant="filled"
            onChange={(e) => {
              setVal(e.target.value);
            }}
          />
          <TextField
            id="filled-select-currency"
            select
            label="Select"
            helperText="Please select type"
            variant="filled"
            onChange={(e) => {
              setValTwo(e.target.value);
            }}
            sx={{ textAlign: "left" }}
          >
            {types.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
          <Box>
            <Button
              variant="outlined"
              sx={{ mt: "19px", mx: "19px" }}
              onClick={handleSubmit}
            >
              Search
            </Button>
          </Box>
        </Box>
        <Typography
          sx={{
            color: "secondary.main",
            fontFamily: "",
            fontSize: "30px",
          }}
          variant="h6"
          mt="60px"
          mb="15px"
        >
          Your Search Results will appear below!
        </Typography>
        {loading && (
          <Backdrop
            sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
            open
          >
            <CircularProgress color="inherit" />
          </Backdrop>
        )}
        {result &&
          result.map((value) => (
            <Card
              sx={{
                mx: "20px",
                my: "20px",
                border: "1px solid black",
              }}
              key={value.id}
            >
              <CardActionArea>
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {value.name}
                  </Typography>
                  <Typography gutterBottom variant="h7" component="div">
                    Address:{value.address}
                  </Typography>
                  <Typography gutterBottom variant="h7" component="div">
                    Contact: {value.phone_number}
                  </Typography>
                  <Typography gutterBottom variant="h7" component="div">
                    Type:{value.types[0]},{value.types[1]}
                  </Typography>
                  <Typography gutterBottom variant="h7" component="div">
                    Distance in meters: {value.distance}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          ))}
      </Container>
    </div>
  );
};

export default NewYork;
