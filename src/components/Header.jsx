import * as React from 'react';
import { useRef } from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import IconButton from '@mui/material/IconButton';
const pages = ['ev charger', "map view", "actual Status", "operations"];
import NotificationsIcon from '@mui/icons-material/Notifications';
const settings = ["logout", "setting"];
import { useNavigate } from 'react-router-dom';
import { Badge, ListItemIcon } from '@mui/material';
import { ReactComponent as Logo } from '../assets/logo/LogoM.svg'
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import SettingsIcon from '@mui/icons-material/Settings';
import { logOut } from '../services/authetication/AutheticationSlice';
import { useDispatch, useSelector } from 'react-redux';
import { GetHeaderHeight } from '../services/shared/SharedSlice';

function Header() {
    // hook
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const headerRef = useRef(null)
    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [anchorElUser, setAnchorElUser] = React.useState(null);
    const [activePage, setActivePage] = React.useState('');
    // use selcetor
    const { user } = useSelector(state => state.AuthenticatioauthennSlice)

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
        dispatch(logOut())
        navigate("/")

    }
    // handel page routing
    const handleRoutes = (page) => {
        setActivePage(page);
        const isPage = page?.split(" ").join("-")
        navigate(`/${isPage}`)

    }
    React.useEffect(() => {
        setActivePage(window.location.pathname.replace("/", "").split("-").join(" "))
    }, [window.location.pathname])

    React.useEffect(()=>{
           if(headerRef.current){
              const getHeaderHight = headerRef.current.clientHeight; 
              dispatch(GetHeaderHeight(getHeaderHight))
           }
    },[])

    return (
        <AppBar position="static"
            ref={headerRef}
            sx={{ boxShadow: "0px 1px 5px 0px #00000026",padding: "0rem 1rem" }}>
            {/* <Container maxWidth="xl"> */}
                <Toolbar disableGutters>

                    {/* <Typography>
                        
                    </Typography> */}
                    {/* <img src={logo} alt="logo" width="82px" height="40px" /> */}
                    <Logo style={{ width: "82px", height: "40px" }} />

                    <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
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
                        </Menu>
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
                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex', }, justifyContent: 'flex-end', paddingRight: "3rem", gap: '1rem' }}>
                        {pages.map((page) => (
                            <Typography
                                variant="body1"
                                key={page}
                                onClick={() => {
                                    handleCloseNavMenu();
                                    handleRoutes(page)
                                }}

                                sx={{
                                    my: 2,
                                    fontSize: "14px",
                                    cursor: "pointer",
                                    display: 'block',
                                    color: activePage == page ? "#353535" : '#656565',
                                    fontWeight: activePage == page ? "600" : '',
                                }}

                            >
                                {page.toUpperCase()}
                            </Typography>
                        ))}
                    </Box>
                    <Box>
                        <IconButton
                            size="large"
                            color="inherit"
                            aria-label="notifications"
                            sx={{ mr: 2 }}
                        >
                            <Badge badgeContent={4} color="error">
                                <NotificationsIcon />
                            </Badge>
                        </IconButton>
                    </Box>

                    <Box sx={{ flexGrow: 0 }}>
                        <Tooltip title="Open settings">
                            <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                                <Avatar alt={"profile"} src={""} >
                                    {user?.first_name?.charAt(0)?.toUpperCase() +
                                        user?.last_name?.charAt(0)?.toUpperCase()}
                                </Avatar>
                            </IconButton>
                        </Tooltip>
                        <Menu
                            sx={{ mt: '45px' }}
                            id="menu-appbar"
                            anchorEl={anchorElUser}
                            anchorOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            open={Boolean(anchorElUser)}
                            onClose={handleCloseUserMenu}
                        >
                            {settings.map((setting) => (
                                <MenuItem key={setting}
                                    onClick={() => {
                                        if (setting === 'logout') {
                                            handleLogout();
                                        } else {
                                            handleCloseUserMenu();
                                            handleRoutes(setting);
                                        }
                                    }}
                                >
                                    <ListItemIcon>
                                        {setting === 'logout' && <ExitToAppIcon />}
                                        {setting === 'setting' && <SettingsIcon />}
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