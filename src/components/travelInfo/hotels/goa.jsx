import React from "react";
import {
  Container,
  Typography,
  Card,
  Grid,
  CardMedia,
  CardContent,
  Link,
  CardActions,
  Box,
} from "@mui/material";
import { cafesToVisit, HotelsData } from "../../../placesData/goaData";
import zomatoLogo from "../../../assets/icons/Zomato-Logo.png";
import swiggyLogo from "../../../assets/icons/Swiggy-Logo.png";
import mmtLogo from "../../../assets/icons/Make-My-Trip-Logo.png";
import bdcLogo from "../../../assets/icons/booking.png";

const GoaInfo = () => {
  return (
    <div>
      <Container maxWidth="xl" sx={{ my: 10 }}>
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
          Top Hotels for you !
        </Typography>
        {HotelsData.map((key, index) => (
          <Card
            sx={{
              mx: "20px",
              my: "20px",
              border: "1px solid black",
            }}
            key={key.id}
          >
            <Grid
              container
              spacing={5}
              sx={{ marginBottom: { xs: 2, md: 0, sm: 0 } }}
            >
              <Grid item lg={3} sm={6} xs={12}>
                <CardMedia
                  sx={{
                    marginTop: { xs: 0, lg: 4, sm: 5, md: 5 },
                    fontSize: {
                      lg: 45,
                      sm: 54,
                      xs: 34,
                    },
                    marginLeft: { lg: 5, xs: 0, sm: 2 },
                  }}
                  component="img"
                  alt="green iguana"
                  height="300"
                  //width="300"
                  image={key.image}
                />
              </Grid>
              <Grid
                item
                lg={9}
                sm={6}
                xs={12}
                sx={{
                  marginTop: { xs: 0, lg: 8, sm: 5, md: 5 },
                }}
              >
                <CardContent
                  sx={{
                    marginTop: { xs: 0, lg: 0, sm: 0, md: 0 },
                    paddingBottom: { xs: 0, lg: 0, sm: 0, md: 0 },
                  }}
                >
                  <Box>
                    <Typography sx={{ color: "info.main", borderRadius: 1 }}>
                      {key.ratings}
                    </Typography>
                    <Typography>{key.totalReviews}</Typography>
                  </Box>

                  <Typography gutterBottom variant="h5" component="div">
                    {key.name}
                  </Typography>

                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{ fontWeight: "bold" }}
                  >
                    {key.location}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {key.coupleInfo}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {key.keyInfo}
                  </Typography>
                  <Typography
                    sx={{
                      display: "flex",
                      justifyContent: "flex-end",
                      fontWeight: "bold",
                      fontSize: "20px",
                      marginTop: { xs: 4, lg: 10, sm: 10, md: 10 },
                      paddingBottom: { xs: 0, lg: 0, sm: 0, md: 0 },
                    }}
                    variant="body2"
                    color="text.secondary"
                  >
                    {key.pricePerNight}
                  </Typography>
                </CardContent>
              </Grid>
            </Grid>

            <CardActions sx={{ display: "flex", justifyContent: "flex-end" }}>
              <Link href={key.mmtLink} target="_blank">
                <img
                  src={mmtLogo}
                  sx={{ mr: "20px" }}
                  style={{
                    height: "19px",
                    marginRight: "7px",
                  }}
                />
              </Link>

              <Link href={key.bdcLink} target="_blank">
                <img
                  src={bdcLogo}
                  style={{ height: "17px", marginRight: "10px" }}
                />
              </Link>
            </CardActions>
          </Card>
        ))}
        {/* ======================================================================================================= */}
        {/* For Cafes */}
        <Typography
          sx={{
            color: "secondary.main",
            // fontFamily: "Segoe UI Emoji",
            fontSize: "30px",
          }}
          variant="h6"
          mt="60px"
          mb="15px"
        >
          Top Cafes for you
        </Typography>
        {cafesToVisit.map((key, index) => (
          <Card
            sx={{
              mx: "20px",
              my: "20px",
              border: "1px solid black",
            }}
            key={key.id}
          >
            <Grid
              container
              spacing={5}
              sx={{ marginBottom: { xs: 2, md: 0, sm: 0 } }}
            >
              <Grid item lg={3} sm={6} xs={12}>
                <CardMedia
                  sx={{
                    marginTop: { xs: 0, lg: 4, sm: 5, md: 5 },
                    fontSize: {
                      lg: 45,
                      sm: 54,
                      xs: 34,
                    },
                    marginLeft: { lg: 5, xs: 0, sm: 2 },
                  }}
                  component="img"
                  alt="green iguana"
                  height="300"
                  //width="300"
                  image={key.img}
                />
              </Grid>
              <Grid
                item
                lg={9}
                sm={6}
                xs={12}
                sx={{
                  marginTop: { xs: 0, lg: 8, sm: 5, md: 5 },
                }}
                // style={{
                //   maxWidth: "100%",
                //   height: "auto",
                //   margin: 0,
                // }}
              >
                <CardContent
                  sx={{
                    marginTop: { xs: 0, lg: 0, sm: 0, md: 0 },
                    paddingBottom: { xs: 0, lg: 0, sm: 0, md: 0 },
                  }}
                >
                  <Box>
                    <Typography sx={{ color: "info.main", borderRadius: 1 }}>
                      {key.ZomatoRatings}
                    </Typography>
                    <Typography>{key.totalReviews}</Typography>
                  </Box>

                  <Typography gutterBottom variant="h5" component="div">
                    {key.name}
                  </Typography>

                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{ fontWeight: "bold" }}
                  >
                    {key.location}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {key.Cuisine}
                  </Typography>
                  <Typography
                    sx={{ fontWeight: "bold" }}
                    variant="body2"
                    color="text.secondary"
                  >
                    {key.Timings}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {key.AverageMealForTwo}
                  </Typography>
                  <Typography
                    sx={{
                      display: "flex",
                      justifyContent: "flex-end",
                      fontWeight: "bold",
                      fontSize: "20px",
                      marginTop: { xs: 4, lg: 10, sm: 10, md: 10 },
                      paddingBottom: { xs: 0, lg: 0, sm: 0, md: 0 },
                    }}
                    variant="body2"
                    color="text.secondary"
                  >
                    {key.pricePerNight}
                  </Typography>
                </CardContent>
              </Grid>
            </Grid>
            <CardActions sx={{ display: "flex", justifyContent: "flex-end" }}>
              <Link href={key.zomatoLink} target="_blank">
                <img
                  src={zomatoLogo}
                  sx={{ mr: "20px" }}
                  style={{
                    height: "19px",
                    marginRight: "7px",
                  }}
                />
              </Link>

              <Link href={key.swiggyLink} target="_blank">
                <img
                  src={swiggyLogo}
                  style={{ height: "17px", marginRight: "10px" }}
                />
              </Link>
            </CardActions>
          </Card>
        ))}
        {/* ======================================================================================================= */}
        {/* For places to visit */}
        <Typography
          sx={{
            color: "secondary.main",
            //fontFamily: "Segoe UI Emoji",
            fontSize: "30px",
          }}
          variant="h6"
          mt="60px"
          mb="15px"
        >
          Top places for you
        </Typography>
        {cafesToVisit.map((key, index) => (
          <Card
            sx={{
              mx: "20px",
              my: "20px",
              border: "1px solid black",
            }}
            key={key.id}
          >
            <Grid
              container
              spacing={5}
              sx={{ marginBottom: { xs: 2, md: 0, sm: 0 } }}
            >
              <Grid item lg={3} sm={6} xs={12}>
                <CardMedia
                  sx={{
                    marginTop: { xs: 0, lg: 4, sm: 5, md: 5 },
                    fontSize: {
                      lg: 45,
                      sm: 54,
                      xs: 34,
                    },
                    marginLeft: { lg: 5, xs: 0, sm: 2 },
                  }}
                  component="img"
                  alt="green iguana"
                  height="300"
                  //width="300"
                  image={key.img}
                />
              </Grid>
              <Grid
                item
                lg={9}
                sm={6}
                xs={12}
                sx={{
                  marginTop: { xs: 0, lg: 8, sm: 5, md: 5 },
                }}
                // style={{
                //   maxWidth: "100%",
                //   height: "auto",
                //   margin: 0,
                // }}
              >
                <CardContent
                  sx={{
                    marginTop: { xs: 0, lg: 0, sm: 0, md: 0 },
                    paddingBottom: { xs: 0, lg: 0, sm: 0, md: 0 },
                  }}
                >
                  <Box>
                    <Typography sx={{ color: "info.main", borderRadius: 1 }}>
                      {key.ZomatoRatings}
                    </Typography>
                    <Typography>{key.totalReviews}</Typography>
                  </Box>

                  <Typography gutterBottom variant="h5" component="div">
                    {key.name}
                  </Typography>

                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{ fontWeight: "bold" }}
                  >
                    {key.location}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {key.Cuisine}
                  </Typography>
                  <Typography
                    sx={{ fontWeight: "bold" }}
                    variant="body2"
                    color="text.secondary"
                  >
                    {key.Timings}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {key.AverageMealForTwo}
                  </Typography>
                  <Typography
                    sx={{
                      display: "flex",
                      justifyContent: "flex-end",
                      fontWeight: "bold",
                      fontSize: "20px",
                      marginTop: { xs: 4, lg: 10, sm: 10, md: 10 },
                      paddingBottom: { xs: 0, lg: 0, sm: 0, md: 0 },
                    }}
                    variant="body2"
                    color="text.secondary"
                  >
                    {key.pricePerNight}
                  </Typography>
                </CardContent>
              </Grid>
            </Grid>
            <CardActions sx={{ display: "flex", justifyContent: "flex-end" }}>
              <Link href={key.zomatoLink} target="_blank">
                <img
                  src={zomatoLogo}
                  sx={{ mr: "20px" }}
                  style={{
                    height: "19px",
                    marginRight: "7px",
                  }}
                />
              </Link>

              <Link href={key.swiggyLink} target="_blank">
                <img
                  src={swiggyLogo}
                  style={{ height: "17px", marginRight: "10px" }}
                />
              </Link>
            </CardActions>
          </Card>
        ))}
      </Container>
    </div>
  );
};

export default GoaInfo;
