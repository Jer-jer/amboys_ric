import React from 'react';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';

export default function AccountMenu({ anchorEl, isMenuOpen, handleMenuClose, logOut }) {
    const menuId = 'primary-search-account-menu';
    return (
        <div>
            <Menu
                anchorEl={anchorEl}
                anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
                id={menuId}
                transformOrigin={{ vertical: 'top', horizontal: 'center' }}
                open={isMenuOpen}
                onClose={handleMenuClose}
                getContentAnchorEl={null}
            >
                <MenuItem onClick={handleMenuClose}>My account</MenuItem>
                <MenuItem onClick={logOut}>Logout</MenuItem>
            </Menu>
        </div>
    );
}