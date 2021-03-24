import React, { useState, useEffect } from 'react';
import { FormControl, InputLabel, Input, FormHelperText, FormControlLabel, Checkbox } from '@material-ui/core';
import { CheckBoxOutlineBlank } from '@material-ui/icons';
import CheckBoxIcon from '@material-ui/icons/CheckBox';
import FormSubmit from './form';

export default function FormCont({type, label, handle}) {
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
        <FormControl>
            <InputLabel htmlFor="my-input">{label}</InputLabel>
            <Input type={type} id="my-input" aria-describedby="my-helper-text" onChange={handle} />
            {subtext}
        </FormControl>
    );
}