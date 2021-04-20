import React, { useState, useEffect } from 'react';
import clsx from 'clsx';
import { makeStyles }  from '@material-ui/styles';
import { FormControl, InputLabel, Input, FormHelperText, FormControlLabel, Checkbox } from '@material-ui/core';
import { InputAdornment, IconButton } from '@material-ui/core';
import { CheckBoxOutlineBlank } from '@material-ui/icons';
import CheckBoxIcon from '@material-ui/icons/CheckBox';
import { Visibility, VisibilityOff } from '@material-ui/icons';

const useStyles = makeStyles((theme) => ({
    textField: {
      width: '25ch',
    },
  }));

export default function FormCont({ type, label, handle }) {
    const classes = useStyles();
    const [showPass, setShowPass] = useState(false);

    const handleClickShowPassword = () => {
        setShowPass(!showPass);
    };

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };
    if (type == 'password') {
        var subtext = <FormControlLabel control={<Checkbox
            icon={<CheckBoxOutlineBlank fontSize="small" />}
            checkedIcon={<CheckBoxIcon fontSize="small" />}
            name="checkedC"
            color="primary"
        />}
            label="Remember me" />
    } else {
        var subtext = <FormHelperText id="my-helper-text">We'll never share your email.</FormHelperText>
    }

    return (
        <FormControl className={clsx(classes.textField)}>
            <InputLabel>{label}</InputLabel>
            <Input
                type={type == 'password' ? (showPass ? 'text' : 'password') : type}
                onChange={handle}
                endAdornment={
                    type == 'password' ? (
                        <InputAdornment position="end">
                            <IconButton
                                onClick={handleClickShowPassword}
                                onMouseDown={handleMouseDownPassword}
                            >
                                {showPass ? <Visibility /> : <VisibilityOff />}
                            </IconButton>
                        </InputAdornment>
                    ) : null
                }
            />
            {subtext}
        </FormControl>
    );
}