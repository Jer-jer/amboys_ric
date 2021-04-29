import React from 'react';
import SwipeableViews from 'react-swipeable-views';
import { fade, makeStyles, useTheme } from '@material-ui/core/styles';
import { AppBar, Toolbar, IconButton, Typography, Badge, Menu, MenuItem, Box, Tab, Tabs } from '@material-ui/core';
import AccountCircle from '@material-ui/icons/AccountCircle';
import NotificationsIcon from '@material-ui/icons/Notifications';
import Axios from 'axios';

// Custom imports
import Inventory from '../../Inventory/content';
import Orders from '../../Orders/order';
import Employees from '../../Employees/employees';
import Notif from './notifications';
import AccountMenu from './accountmenu';

function TabPanel(props) {
    const { children, value, index } = props;

    return (
        <div>
            {value === index && (
                <Box p={3}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}
const useStyles = makeStyles((theme) => ({
    grow: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        display: 'none',
        [theme.breakpoints.up('sm')]: {
            display: 'block',
        },
    },
    sectionDesktop: {
        display: 'none',
        [theme.breakpoints.up('md')]: {
            display: 'flex',
        },
    },
}));

export default function AppBarManager() {
    const classes = useStyles();
    const theme = useTheme();
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [value, setValue] = React.useState(0);
    const [notifAnchor, setNotifAnchor] = React.useState(null);

    const isNotifOpen = Boolean(notifAnchor);

    const handleClickNotif = (event) => {
        setNotifAnchor(event.currentTarget);
    };

    const handleCloseNotif = () => {
        setNotifAnchor(null);
    };

    const isMenuOpen = Boolean(anchorEl);

    const handleProfileMenuOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
    };

    const handleChangeTab = (event, newValue) => {
        setValue(newValue);
    };

    const logOut = () => {
        Axios({
            method: 'GET',
            withCredentials: true,
            url: "http://localhost:3001/logout",
        })
            .then(res => {
                if (res) {
                    window.location.reload(false);
                }
            })
    };

    return (
        <div className={classes.grow}>
            <AppBar position="fixed">
                <Toolbar>
                    <IconButton color="inherit" aria-label="logo">
                        <img src="/img/logo/tago.png" height="35" weight="35"></img>
                    </IconButton>
                    <Typography className={classes.title} variant="h6" noWrap>
                        Amboy's Food Stall
                    </Typography>
                    <div className={classes.grow} />
                    <Tabs value={value} onChange={handleChangeTab} aria-label="tabs">
                        <Tab label="Inventory" />
                        <Tab label="Orders" />
                        <Tab label="Employees" />
                    </Tabs>
                    <div className={classes.grow} />
                    <div className={classes.sectionDesktop}>
                        <IconButton aria-label="show 17 new notifications" color="inherit" onClick={handleClickNotif}>
                            <Badge color="secondary">
                                <NotificationsIcon />
                            </Badge>
                        </IconButton>
                        <IconButton
                            edge="end"
                            aria-label="account of current user"
                            aria-haspopup="true"
                            onClick={handleProfileMenuOpen}
                            color="inherit"
                        >
                            <AccountCircle />
                        </IconButton>
                    </div>
                </Toolbar>
            </AppBar>
            <Toolbar />
            <Notif 
                notifAnchor={notifAnchor} 
                handleClose={handleCloseNotif} 
                isNotifOpen={isNotifOpen} 
            />
            <AccountMenu 
                anchorEl={anchorEl} 
                isMenuOpen={isMenuOpen} 
                handleMenuClose={handleMenuClose} 
                logOut={logOut} 
            />
            <SwipeableViews
                axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                index={value}
                onChangeIndex={handleChangeTab}
            >
                <TabPanel value={value} index={0}>
                    <Inventory />
                </TabPanel>
                <TabPanel value={value} index={1}>
                    <Orders />
                </TabPanel>
                <TabPanel value={value} index={2}>
                    <Employees />
                </TabPanel>
            </SwipeableViews>
        </div >
    );
}
