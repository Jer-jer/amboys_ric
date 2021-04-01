import React from 'react';
import { makeStyles } from '@material-ui/core';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { ListItemIcon, ListItemText } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import FastfoodIcon from '@material-ui/icons/Fastfood';
import Avatar from '@material-ui/core/Avatar';

//Custom Imports 
import Order from './data';

//Retrieve Data from DB
const rows = [
    Order('Atria'),
    Order('Callisto'),
    Order('Dione'),
    Order('Ganymede'),
    Order('Hangouts Call'),
    Order('Luna'),
    Order('Phobos'),
    Order('Pyxis'),
    Order('Sedna'),
    Order('Titania'),
    Order('Triton'),
    Order('Umbriel'),

];

const useStyles = makeStyles((theme) => ({
    primary: {
        color: '#fff',
        backgroundColor: '#3f50b5',
    },
}));

const ITEM_HEIGHT = 48;

export default function NotifMenu({ notifAnchor, handleClose, isNotifOpen }) {
    const classes = useStyles();

    function formatAMPM(date) {
        var hours = date.getHours();
        var minutes = date.getMinutes();
        var ampm = hours >= 12 ? 'PM' : 'AM';
        hours = hours % 12;
        hours = hours ? hours : 12; // the hour '0' should be '12'
        minutes = minutes < 10 ? '0' + minutes : minutes;
        var strTime = hours + ':' + minutes + ' ' + ampm;
        return strTime;
    }
    const today = new Date(),
        now = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate() + ' ' + 
        formatAMPM(today);


    const date = {
        currentTime: now
    }
    return (
        <div>
            <Menu
                id="long-menu"
                anchorEl={notifAnchor}
                keepMounted
                open={isNotifOpen}
                onClose={handleClose}
                getContentAnchorEl={null}
                anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
                transformOrigin={{ vertical: "top", horizontal: "center" }}
                PaperProps={{
                    style: {
                        maxHeight: ITEM_HEIGHT * 4.5,
                        width: '30ch',
                    },
                }}
            >
                {rows.map((row) => (
                    <MenuItem key={row.order} onClick={handleClose}>
                        <ListItemIcon>
                            <Avatar className={classes.primary}>
                                <FastfoodIcon />
                            </Avatar>
                        </ListItemIcon>
                        <ListItemText
                            primary={<Typography variant="inherit">{row.order}</Typography>}
                            secondary={date.currentTime}
                        />
                    </MenuItem>
                ))}
            </Menu>
        </div>
    );
}