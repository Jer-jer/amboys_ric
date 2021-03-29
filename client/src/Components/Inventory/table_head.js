import React from 'react';
import { TableHead, TableSortLabel, TableRow, TableCell, Checkbox } from '@material-ui/core';

const headCells = [
    { id: 'id', numeric: false, disablePadding: true, label: 'Product ID' },
    { id: 'name', numeric: false, disablePadding: false, label: 'Product Name' },
    { id: 'price', numeric: true, disablePadding: false, label: 'Price (Php.)' },
    { id: 'quantity', numeric: true, disablePadding: false, label: 'Quantity' },
    { id: 'status', numeric: false, disablePadding: false, label: 'Status' },
];

export default function EnhancedTableHead(props) {
    const { classes, onSelectAllClick, order, orderBy, numSelected, rowCount, onRequestSort } = props;
    const createSortHandler = (property) => (event) => {
        onRequestSort(event, property);
    };

    const check = (headCell) => {
        if(headCell.numeric){
            return('right');
        }else{
            if(headCell.id == 'status'){
                return('center');
            }else{
                return('left');
            }
        }
    };

    return (
        <TableHead>
            <TableRow>
                <TableCell padding="checkbox">
                    <Checkbox
                        indeterminate={numSelected > 0 && numSelected < rowCount}
                        checked={rowCount > 0 && numSelected === rowCount}
                        onChange={onSelectAllClick}
                        inputProps={{ 'aria-label': 'select all desserts' }}
                    />
                </TableCell>
                {headCells.map((headCell) => (
                    <TableCell
                        key={headCell.id}
                        align={check(headCell)}
                        padding={headCell.disablePadding ? 'none' : 'default'}
                        sortDirection={orderBy === headCell.id ? order : false}
                    >
                        <TableSortLabel
                            active={orderBy === headCell.id}
                            direction={orderBy === headCell.id ? order : 'asc'}
                            onClick={createSortHandler(headCell.id)}
                        >
                            {headCell.label}
                            {orderBy === headCell.id ? (
                                <span className={classes.visuallyHidden}>
                                    {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
                                </span>
                            ) : null}
                        </TableSortLabel>
                    </TableCell>
                ))}
            </TableRow>
        </TableHead>
    );
}