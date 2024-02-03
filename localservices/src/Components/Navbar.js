import * as React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { createTheme } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import { FaUser, FaMoneyBillTrendUp, FaBookBookmark } from "react-icons/fa6";
import { LuLogOut } from "react-icons/lu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import Sidebar from "./Sidebar"
import { useNavigate } from "react-router-dom";
import { ThemeProvider } from "@mui/material/styles";
import Swal from "sweetalert2";
import { deleteProviderDetails, deleteProviderEmail, deleteUser, deleteUserDetails, deleteUserEmails, deleteColor } from "./Stores/MasterSlice";
import randomColor from "randomcolor";


const theme = createTheme({
  palette: {
    primary: {
      main: "#FFA733",
    },
    secondary: {
      main: "#59656F",
    },
  },
});

function Navbar() {
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const { Emails } = useSelector((state) => state.master);
  const { colors } = useSelector((state) => state.master);


  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const eventLogout = () => {
    let timerInterval;
    Swal.fire({
      title: "Successfully LoggedOut !",
      html: "Redirecting in <b></b> milliseconds.",
      timer: 3000,
      timerProgressBar: true,
      didOpen: () => {
        Swal.showLoading();
        const b = Swal.getHtmlContainer().querySelector("b");
        timerInterval = setInterval(() => {
          b.textContent = Swal.getTimerLeft();
        }, 100);
      },
      willClose: () => {
        clearInterval(timerInterval);
      },
    }).then((result) => {
      /* Read more about handling dismissals below */
      if (result.dismiss === Swal.DismissReason.timer) {
        console.log("I was closed by the timer");
      }
    });
    setTimeout(() => {
      dispatch(deleteUser());
      dispatch(deleteUserDetails());
      dispatch(deleteUserEmails());
      dispatch(deleteProviderDetails());
      dispatch(deleteProviderEmail());
      dispatch(deleteColor());
      navigate("/");
    }, 3000);
  };


  return (
    <>
      <ThemeProvider theme={theme}>
        <AppBar position="sticky">
          <Container maxWidth="xl">
            <Toolbar disableGutters>
              <Sidebar color="secondary" />
              <Typography
                variant="h3"
                noWrap
                component="a"
                href="/"
                sx={{
                  ml: 2,
                  fontSize: 30,
                  display: { xs: "none", md: "flex" },
                  fontFamily: "monospace",
                  fontWeight: 700,
                  letterSpacing: ".3rem",
                  color: "inherit",
                  textDecoration: "none",
                }}
              >
                LemFresh
              </Typography>
              <Typography
                variant="h5"
                noWrap
                component="a"
                href=""
                sx={{
                  mr: 1,
                  display: { xs: "flex", md: "none" },
                  flexGrow: 1,
                  fontFamily: "monospace",
                  fontWeight: 700,
                  letterSpacing: ".1rem",
                  color: "inherit",
                  textDecoration: "none",
                }}
              >
                Lemfresh
              </Typography>
              <Box
                sx={{
                  ml: 6,
                  flexGrow: 1,
                  display: { xs: "none", md: "flex" },
                }}
                style={{ display: "flex", flexDirection: "row-reverse" }}
              ></Box>
              {Emails !== null ? (
                <Box sx={{ flexGrow: 0 }}>
                  <Tooltip title="Open settings">
                    <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                      <Avatar
                        alt="Remy Sharp"
                        sx={{ bgcolor: `${colors}` }}
                      >
                        S
                      </Avatar>
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
                    <MenuItem key="profile" onClick={handleCloseUserMenu}>
                      <FaUser />
                      <Link
                        to="/profile"
                        style={{
                          textDecoration: "none",
                          color: "black",
                          marginLeft: "25px",
                        }}
                      >
                        <Typography textAlign="center">Profile</Typography>
                      </Link>
                    </MenuItem>
                    <MenuItem
                      key="payment-history"
                      onClick={handleCloseUserMenu}
                    >
                      
                    </MenuItem>
                    <MenuItem
                      key="logout"
                      onClick={eventLogout}
                      style={{
                        textDecoration: "none",
                        color: "black",
                        marginLeft: "2px",
                      }}
                    >
                      <LuLogOut style={{ marginRight: "25px" }} onClick={eventLogout} />
                      <Typography textAlign="center" onClick={() => navigate('/')}>Logout</Typography>
                    </MenuItem>
                  </Menu>
                </Box>
              ) : (
                <Button
                  key="Login"
                  sx={{ display: "block", fontFamily: "Baskervville', serif" }}
                  style={{ backgroundColor: "gray" }}
                  color="secondary"
                  variant="contained"
                  onClick={() => navigate("/login")}
                >
                  Login
                </Button>
              )}
            </Toolbar>
          </Container>
        </AppBar>
      </ThemeProvider>
    </>
  );
}
export default Navbar;