import React from 'react';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { Link } from 'react-router-dom';

//Custom Import
import '../../../materials/css/accountmenu.css'

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
                <MenuItem onClick={handleMenuClose}><Link to='/order_form' className="order">Order</Link></MenuItem>
                <MenuItem onClick={handleMenuClose}>My account</MenuItem>
                <MenuItem onClick={logOut}>Logout</MenuItem>
            </Menu>
        </div>
    );
}