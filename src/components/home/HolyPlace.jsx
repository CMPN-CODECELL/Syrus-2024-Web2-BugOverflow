import * as React from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Grid,
  Button,
  CardActions,
  Box,
  Tooltip,
  IconButton,
  Toolbar,
  Link,
} from "@mui/material";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import { Container } from "@mui/system";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import ShareIcon from "@mui/icons-material/Share";
import { NavLink } from "react-router-dom";
import { holyPlacesData } from "../../placesData/holyPlacesData";
const HolyPlace = () => {
  return (
    <>
      <Container maxWidth="lg">
        <Typography
          sx={{
            color: "secondary.main",
            fontSize: "30px",
          }}
          variant="h6"
          mt="60px"
          mb="15px"
        >
          Religious Places
        </Typography>
        <Grid container spacing={4}>
          {holyPlacesData.map((card) => (
            <Grid
              item
              xs={12}
              lg={4}
              md={6}
              sm={6}
              key={card.id}
              sx={{ mt: "10px" }}
            >
              <Card sx={{ borderColor: "#ba68c8" }}>
                <CardMedia
                  component="img"
                  height="200"
                  image={card.image}
                  alt="green iguana"
                />
                <CardContent>
                  <Typography
                    gutterBottom
                    variant="h5"
                    component="div"
                    sx={{ mb: 0 }}
                  >
                    {card.title}
                  </Typography>
                  <Box sx={{ display: "flex", mb: 1 }}>
                    <LocationOnIcon />
                    <Typography>{card.country}</Typography>
                  </Box>
                  <Typography variant="body2" color="text.secondary">
                    {card.about}
                  </Typography>
                </CardContent>

                <CardActions sx={{ paddingBottom: 0 }}>
                  <Container disableGutters={true}>
                    <Toolbar disableGutters>
                      <Box
                        sx={{
                          flexGrow: 1,
                          display: { xs: "flex", md: "flex" },
                        }}
                      >
                        {/* <Button>
                          <NavLink to={card.link}>
                            <Typography
                              sx={{
                                fontFamily: "Apple Color Emoji",
                                fontSize: "15px",
                                textDecoration: "none",
                              }}
                            >
                              Details
                            </Typography>
                          </NavLink>
                        </Button> */}
                      </Box>

                      <Box sx={{ flexGrow: 0 }}>
                        <Tooltip title="Like">
                          <IconButton>
                            <ThumbUpIcon
                              sx={{
                                mx: 1,
                              }}
                            />
                          </IconButton>
                        </Tooltip>
                        <Tooltip title="Share">
                          <IconButton>
                            <ShareIcon />
                          </IconButton>
                        </Tooltip>
                      </Box>
                    </Toolbar>
                  </Container>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </>
  );
};
export default HolyPlace;
