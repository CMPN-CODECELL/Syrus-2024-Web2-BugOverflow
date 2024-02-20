import * as React from "react";
import AccountCircleSharpIcon from "@mui/icons-material/AccountCircleSharp";
import ConnectingAirportsIcon from "@mui/icons-material/ConnectingAirports";
import MenuIcon from "@mui/icons-material/Menu";
import { Link, NavLink } from "react-router-dom";
import { useLocation } from "react-router-dom";
import {
  Container,
  Menu,
  Button,
  MenuItem,
  Tooltip,
  Typography,
  IconButton,
  AppBar,
  Box,
  Toolbar,
} from "@mui/material";

function Navbar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  const settings = ["Signup", "Login", "Contact Us", "Logout"];
  const { pathname } = useLocation();
  if (pathname === "/login" || pathname === "/signup") return null;

  return (
    <AppBar position="sticky" sx={{ bgcolor: "black" }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          {/* ======================================================================================================= */}
          {/* For Large Screen */}

          {/* <ConnectingAirportsIcon
            sx={{ display: { xs: "none", md: "flex" } }}
          /> */}

          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            Travel_Planner
          </Typography>

          {/* =============================================================================================== */}
          {/* For Small Screen*/}

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>

            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              <NavLink to="/youplan" style={{ textDecoration: "none" }}>
                <MenuItem>
                  <Typography textAlign="center">Plan Yourself</Typography>
                </MenuItem>
              </NavLink>

              <NavLink to="/weplan" style={{ textDecoration: "none" }}>
                <MenuItem>
                  <Typography textAlign="center">We Plan</Typography>
                </MenuItem>
              </NavLink>
              <NavLink to="/customplace" style={{ textDecoration: "none" }}>
                <MenuItem>
                  <Typography textAlign="center">Search Anything</Typography>
                </MenuItem>
              </NavLink>

              <MenuItem>
                <Typography textAlign="center">Subscribe</Typography>
              </MenuItem>

              <NavLink to="/news" style={{ textDecoration: "none" }}>
                <MenuItem>
                  <Typography textAlign="center">News</Typography>
                </MenuItem>
              </NavLink>

              <NavLink to="/about" style={{ textDecoration: "none" }}>
                <MenuItem>
                  <Typography textAlign="center">About</Typography>
                </MenuItem>
              </NavLink>
            </Menu>
          </Box>
          <ConnectingAirportsIcon
            sx={{ display: { xs: "flex", md: "none" } }}
          />

          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 4,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".2rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            Travel
          </Typography>

          {/* ============================================================================================= */}
          {/* For Large Screen */}

          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            <Box
              sx={{
                flexGrow: 1,
                display: { xs: "flex", md: "flex" },
              }}
            >
              <NavLink to="/youplan" style={{ textDecoration: "none" }}>
                <Button sx={{ my: 2, color: "white" }}>Plan Yourself</Button>
              </NavLink>
              <NavLink to="/weplan" style={{ textDecoration: "none" }}>
                <Button sx={{ my: 2, color: "white" }}>We Plan</Button>
              </NavLink>
              <NavLink to="/customplace" style={{ textDecoration: "none" }}>
                <Button sx={{ my: 2, color: "white" }}>Search Anything</Button>
              </NavLink>

              {/* <Button sx={{ my: 2, color: "white" }}>Subscribe</Button> */}
              {/* <NavLink to="/news" style={{ textDecoration: "none" }}>
                <Button sx={{ my: 2, color: "white" }}>News</Button>
              </NavLink> */}
              <NavLink to="/about" style={{ textDecoration: "none" }}>
                <Button sx={{ my: 2, color: "white" }}>About</Button>
              </NavLink>
            </Box>

            <Box sx={{ flexGrow: 0, marginRight: 2, alignItems: "center" }}>
              <NavLink to="/signup" style={{ textDecoration: "none" }}>
                <Button sx={{ my: 2, color: "white" }}>Sign in</Button>
              </NavLink>
              <NavLink to="/login" style={{ textDecoration: "none" }}>
                <Button sx={{ my: 2, color: "white" }}>Log in</Button>
              </NavLink>
            </Box>
          </Box>

          {/* ======================================================================================================== */}
          {/* Settings Menu */}

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <AccountCircleSharpIcon fontSize="large" />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              <NavLink to="/signup" style={{ textDecoration: "none" }}>
                <MenuItem onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">Signup</Typography>
                </MenuItem>
              </NavLink>
              <NavLink to="/login" style={{ textDecoration: "none" }}>
                <MenuItem onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">Login</Typography>
                </MenuItem>
              </NavLink>
              <NavLink style={{ textDecoration: "none" }}>
                <MenuItem onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">Contact Us</Typography>
                </MenuItem>
              </NavLink>
            </Menu>
          </Box>
          {/* Settings End=========================================================================================== */}
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Navbar;
