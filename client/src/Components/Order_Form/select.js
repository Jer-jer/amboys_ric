import React from 'react';
import { FormControl, InputLabel, FormHelperText, Select, MenuItem, ListSubheader } from '@material-ui/core';

export default function Sel({ choice, action, specs }) {
    return (
        <div>
            <FormControl className={specs}>
                <InputLabel id="demo-simple-select-label">Item</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={choice}
                    onChange={action}
                >
                    <ListSubheader>Main Dishes</ListSubheader>
                    <MenuItem value="ginaling">Ginaling</MenuItem>
                    <MenuItem value="pork_sisig">Pork Sisig</MenuItem>
                    <MenuItem value="pork_humba">Pork Humba</MenuItem>
                    <MenuItem value="pork_siomai">Pork Siomai</MenuItem>
                    <ListSubheader>Appetizers</ListSubheader>
                    <MenuItem value="ampalaya_with_egg">Ampalaya w/ Egg</MenuItem>
                    <ListSubheader>Soups</ListSubheader>
                    <MenuItem value="birds_nest">Bird's Nest</MenuItem>
                    <ListSubheader>Rices</ListSubheader>
                    <MenuItem value="plain_rice">Plain Rice</MenuItem>
                    <MenuItem value="fried_rice_with_egg">Fried Rice w/ Egg</MenuItem>
                    <ListSubheader>Beverages</ListSubheader>
                    <MenuItem value="coke">Coke</MenuItem>
                    <MenuItem value="sprite">Sprite</MenuItem>
                    <MenuItem value="royal">Royal</MenuItem>
                    <MenuItem value="pepsi">Pepsi</MenuItem>
                </Select>
                <FormHelperText>Choose your desired item</FormHelperText>
            </FormControl>
        </div>

    );
}