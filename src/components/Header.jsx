import * as React from "react";
import { useRef } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import IconButton from "@mui/material/IconButton";
import NotificationsIcon from "@mui/icons-material/Notifications";
import { useNavigate } from "react-router-dom";
import {
  Badge,
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Select,
} from "@mui/material";
import { ReactComponent as Logo } from "../assets/logo/LogoM.svg";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import SettingsIcon from "@mui/icons-material/Settings";
import { logOut } from "../services/authetication/AutheticationSlice";
import { useDispatch, useSelector } from "react-redux";
import { GetHeaderHeight } from "../services/shared/SharedSlice";
import Locations from "../pages/location/Locations";
import { Add } from "@mui/icons-material";
import { useState } from "react";
import Notification from "./Notification";

function Header(props) {
  const settings = ["logout", "setting"];
  const [pages, setPages] = useState([
    "ev charger",
    "map view",
    "actual Status",
    "statistics",
  ]);
  const drawerWidth = 240;
  // hook

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const headerRef = useRef(null);
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const [activePage, setActivePage] = React.useState("");
  const [notification, setNotification] = useState(false);
  const [anchorElOperations, setAnchorElOperations] = useState(null);
  // use selcetor
  const { user } = useSelector((state) => state.AuthenticationSlice);

  const open = Boolean(anchorElOperations);
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

  const handleLogout = () => {
    dispatch(logOut());
    navigate("/");
  };
  // handel page routing
  const handleRoutes = (page) => {
    setActivePage(page);
    const isPage = page?.split(" ").join("-");
    navigate(`/${isPage}`);
    setAnchorEls(null);
  };
  // React.useEffect(() => {
  //     setActivePage(window.location.pathname.replace("/", "").split("-").join(" "))
  // }, [window.location.pathname])

  // ADD DEVICE DROPDOWN

  const [anchorEls, setAnchorEls] = useState(null);
  const opens = Boolean(anchorEls);
  const handleClick = (event) => {
    setAnchorEls(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEls(null);
  };
  React.useEffect(() => {
    if (headerRef.current) {
      const getHeaderHight = headerRef.current.clientHeight;
      dispatch(GetHeaderHeight(getHeaderHight));
    }
  }, []);

  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };
  // for operations
  const handleClickOp = (event) => {
    setAnchorElOperations(event.currentTarget);
  };
  const handleCloseOp = () => {
    setAnchorElOperations(null);
  };
  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        <Logo style={{ width: "82px", height: "40px" }} />
      </Typography>
      <Divider />
      <List>
        {pages.map((item) => (
          <ListItem
            key={item}
            disablePadding
            onClick={() => {
              handleCloseNavMenu();
              handleRoutes(item);
            }}
            sx={{
              color: activePage == item ? "#BADA55" : "#656565",
              fontWeight: activePage == item ? "bold" : "",
            }}
          >
            <ListItemButton sx={{ textAlign: "center" }}>
              <ListItemText primary={item} />
            </ListItemButton>
          </ListItem>
        ))}
        {
          user.role === "user" || user.role === "operator" &&
          <Button
            id="demo-customized-button"
            aria-controls={open ? "demo-customized-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            variant="contained"
            disableElevation
            onClick={handleClickOp}
            sx={{
              my: 2,
              fontSize: "14px",
              cursor: "pointer",
              color: activePage == "operations" ? "#353535" : "#656565",
              fontWeight: activePage == "operations" ? "600" : "",
              padding: "0",
              width: "100%",
            }}
          >
            Operations
          </Button>
        }
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  React.useEffect(() => {
    if (user.role === "driver") {
      setPages(["drivers"]);
    }
  }, [user]);

  return (
    <AppBar
      position="static"
      ref={headerRef}
      sx={{ boxShadow: "0px 1px 5px 0px #00000026", padding: "0rem 1rem" }}
    >
      {/* <Container maxWidth="xl"> */}
      <Toolbar disableGutters>
        {/* <Typography>
                        
                    </Typography> */}
        {/* <img src={logo} alt="logo" width="82px" height="40px" /> */}
        <Logo style={{ width: "82px", height: "40px" }} />

        <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
          <IconButton
            size="large"
            aria-label="account of current user"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            onClick={handleDrawerToggle}
            // onClick={handleOpenNavMenu}
            color="inherit"
          >
            <MenuIcon />
          </IconButton>
          {/* <Menu
                            id="menu-appbar"
                            anchorEl={anchorElNav}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'left',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                            }}
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                            sx={{
                                display: { xs: 'block', md: 'none' },
                            }}
                        >
                            {pages.map((page) => (
                                <MenuItem
                                    key={page}
                                    onClick={() => {
                                        handleCloseNavMenu();
                                        handleRoutes(page)

                                    }}
                                    sx={{
                                        color: activePage == page ? "#353535" : '#656565',
                                        fontWeight: activePage == page ? "600" : '',
                                    }}

                                >
                                    <Typography textAlign="center">{page}</Typography>
                                </MenuItem>
                            ))}
                        </Menu> */}
          <nav>
            <Drawer
              container={container}
              variant="temporary"
              open={mobileOpen}
              onClose={handleDrawerToggle}
              ModalProps={{
                keepMounted: true, // Better open performance on mobile.
              }}
              sx={{
                display: { xs: "block", sm: "none" },
                "& .MuiDrawer-paper": {
                  boxSizing: "border-box",
                  width: drawerWidth,
                },
              }}
            >
              {drawer}
            </Drawer>
          </nav>
        </Box>

        {/* <Typography
                        variant="h6"
                        noWrap
                        component={Link}
                        to="/"
                        sx={{
                            mr: 2,
                            display: { xs: 'flex', md: 'none' },
                            fontFamily: 'monospace',
                            fontWeight: 700,
                            letterSpacing: '.3rem',
                            color: 'inherit',
                            textDecoration: 'none',
                            cursor: 'pointer',
                            '&:hover': {
                                color: 'secondary.main',
                            },
                        }}
                    >
                        logo
                    </Typography> */}
        <Box
          sx={{
            flexGrow: 1,
            display: { xs: "none", md: "flex" },
            justifyContent: "flex-end",
            gap: "1rem",
          }}
        >
          {pages.map((page) => (
            <>
              <Typography
                variant="body1"
                key={page}
                onClick={() => {
                  handleCloseNavMenu();
                  handleRoutes(page);
                }}
                sx={{
                  my: 2,
                  fontSize: "14px",
                  cursor: "pointer",
                  display: "block",
                  color: activePage == page ? "#353535" : "#656565",
                  fontWeight: activePage == page ? "600" : "",
                }}
              >
                {page.toUpperCase()}
              </Typography>
            </>
          ))}
        </Box>
        {

        }
        <div>
          {
            user.role === "user" || user.role === "operator" &&
            <Button
              id="demo-customized-button"
              aria-controls={open ? "demo-customized-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={open ? "true" : undefined}
              variant="contained"
              disableElevation
              onClick={handleClickOp}
              sx={{
                my: 2,
                fontSize: "14px",
                cursor: "pointer",
                display: "block",
                color: activePage == "operations" ? "#353535" : "#656565",
                fontWeight: activePage == "operations" ? "600" : "",
                marginLeft: "15px",
                padding: "0",
              }}
            >
              Operations
            </Button>
          }
          <Menu
            id="demo-customized-menu"
            MenuListProps={{
              "aria-labelledby": "demo-customized-button",
            }}
            anchorEl={anchorElOperations}
            open={open}
            onClose={handleCloseOp}
            sx={{
              "& .MuiPaper-root": {
                color: "#353535",
                bgcolor: "white",
              },
            }}
          >
            <MenuItem
              onClick={() => {
                handleCloseOp();
                handleRoutes("operations");
              }}
              disableRipple
            >
              My Operations
            </MenuItem>
            <MenuItem onClick={handleCloseOp} disableRipple>
              Move E-Pack
            </MenuItem>
            <Divider sx={{ my: 0.5 }} />
            <MenuItem onClick={handleCloseOp} disableRipple>
              Add Device
            </MenuItem>
          </Menu>
        </div>
        {/* <Tooltip title="Add Device" arrow>
          <Button
            id="demo-positioned-button"
            aria-controls={open ? "demo-positioned-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            onClick={handleClick}
            sx={{
              padding: "5px",
              textAlign: "center",
              display: "flex",
              justifyContent: "center",
              textTransform: "capitalize",
              color: "#aaa",
              "&:hover": {
                borderColor: "#7a7a7a",
                color: "#7a7a7a",
              },
            }}
          >
            <Add />
          </Button>
        </Tooltip> */}

        <Menu
          id="demo-positioned-menu"
          aria-labelledby="demo-positioned-button"
          anchorEl={anchorEls}
          open={opens}
          onClose={handleClose}
          sx={{
            top: "50px",
            left: "-50px",
          }}
          anchorOrigin={{
            vertical: "top",
            horizontal: "left",
          }}
          transformOrigin={{
            vertical: "top",
            horizontal: "left",
          }}
        >
          <MenuItem
            onClick={() => {
              handleRoutes("add device");
              handleCloseNavMenu();
            }}
          >
            Add Device
          </MenuItem>
        </Menu>

        <Box >
          <IconButton
            size="large"
            color="inherit"
            aria-label="notifications"
            sx={{ mr: 2 }}
            onClick={()=> setNotification(!notification)}
          >
            <Badge badgeContent={0} color="error">
              <NotificationsIcon sx={{color: notification ? "#88B14B":""}}  />
            </Badge>
          </IconButton>
          {notification && <Notification />}
        </Box>

        <Box sx={{ flexGrow: 0 }}>
          <Tooltip title="Open settings">
            <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
              <Avatar alt={"profile"} src={""}>
                {user?.first_name?.charAt(0)?.toUpperCase() +
                  user?.last_name?.charAt(0)?.toUpperCase()}
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
            {settings.map((setting) => (
              <MenuItem
                key={setting}
                onClick={() => {
                  if (setting === "logout") {
                    handleLogout();
                  } else {
                    handleCloseUserMenu();
                    handleRoutes(setting);
                  }
                }}
              >
                <ListItemIcon>
                  {setting === "logout" && <ExitToAppIcon />}
                  {setting === "setting" && <SettingsIcon />}
                  {/* Add other icons and conditions for different settings */}
                </ListItemIcon>
                <Typography textAlign="center">{setting}</Typography>
              </MenuItem>
            ))}
          </Menu>
        </Box>
      </Toolbar>
      {/* </Container> */}
    </AppBar>
  );
}
export default Header;
