import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { lighten, makeStyles } from '@material-ui/core/styles';
import Axios from 'axios';

//For Table
import { Table, TableBody, TableCell, TableContainer, TablePagination } from '@material-ui/core'
import { TableRow, Toolbar, Typography, Paper, Checkbox, IconButton, Tooltip } from '@material-ui/core'

//For Add Data (Modal)
import { Button, TextField, Dialog, DialogActions } from '@material-ui/core';
import { DialogContent, DialogContentText, DialogTitle } from '@material-ui/core';
import Slide from '@material-ui/core/Slide';

//Icons
import DeleteIcon from '@material-ui/icons/Delete';
import AddIcon from '@material-ui/icons/Add';

//Custom Import
import EnhancedTableHead from './table_head';
import createData from './data';
import stableSort from './stable_sort';
import getComparator from './comparator';
import AddForm from './form/form_content';


// Retrieve Data from DB
// const rows = [
//     createData(305, 'Cupcake', 3.7, 20.00, "available"),
//     createData(452, 'Donut', 25.0, 20.00, "available"),
//     createData(262, 'Eclair', 16.0, 20.00, "not available"),
//     createData(159, 'Frozen yoghurt', 6.0, 20.00, "available"),
//     createData(356, 'Gingerbread', 16.0, 20.00, "not available"),
//     createData(408, 'Honeycomb', 3.2, 10, 20.00, "not available"),
//     createData(237, 'Ice cream sandwich', 9.0, 20.00, "out of stock"),
//     createData(375, 'Jelly Bean', 0.0, 20.00, "available"),
//     createData(518, 'KitKat', 26.0, 20.00, "out of stock"),
//     createData(392, 'Lollipop', 0.2, 20.00, "out of stock"),
//     createData(318, 'Marshmallow', 0, 20.00, "not available"),
//     createData(360, 'Nougat', 19.0, 20.00, "not available"),
//     createData(437, 'Oreo', 18.0, 20.00, "available"),
// ];

EnhancedTableHead.propTypes = {
    classes: PropTypes.object.isRequired,
    numSelected: PropTypes.number.isRequired,
    onRequestSort: PropTypes.func.isRequired,
    onSelectAllClick: PropTypes.func.isRequired,
    order: PropTypes.oneOf(['asc', 'desc']).isRequired,
    orderBy: PropTypes.string.isRequired,
    rowCount: PropTypes.number.isRequired,
};

//For Toolbar
const useToolbarStyles = makeStyles((theme) => ({
    root: {
        paddingLeft: theme.spacing(2),
        paddingRight: theme.spacing(1),
    },
    highlight:
        theme.palette.type === 'light'
            ? {
                color: theme.palette.secondary.main,
                backgroundColor: lighten(theme.palette.secondary.light, 0.85),
            }
            : {
                color: theme.palette.text.primary,
                backgroundColor: theme.palette.secondary.dark,
            },
    title: {
        flex: '1 1 100%',
    },
}));

//Modal Transition
const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

const EnhancedTableToolbar = (props) => {
    const classes = useToolbarStyles();
    const { numSelected } = props;
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    //For Adding Data in DB
    const Modal = () => {
        const [product, setProduct] = React.useState({
            id: 0,
            prodName: '',
            prodQuantity: 0,
            price: 0.00,
            stats: 'available',
        });

        const handleChange = (props) => (event) => {
            const forID = /^-?\d*$/;
            const forQuant = /^\d*$/;
            const forPrice = /^-?\d*[.,]?\d{0,2}$/;

            if(props == 'id'){
                if (event.target.value === '' || forID.test(event.target.value)) {
                    setProduct({ ...product, 'id': event.target.value });
                }
            }else if(props == 'price'){
                if (event.target.value === '' || forPrice.test(event.target.value)) {
                    setProduct({ ...product, 'price': event.target.value });
                }
            }else if(props == 'prodQuantity'){
                if ((event.target.value === '' || parseInt(event.target.value) <= 500) && 
                forQuant.test(event.target.value)){
                    setProduct({ ...product, 'prodQuantity': event.target.value });
                }
            }else{
                setProduct({ ...product, [props]: event.target.value });
            }
        };


        // Register
        const add = () => {
            Axios({
                method: 'POST',
                data: {
                    prodID: product.id,
                    prodName: product.prodName,
                    prodQuant: product.prodQuantity,
                    prodPrice: product.price,
                    prodStats: product.stats,
                },
                withCredentials: true,
                url: "http://localhost:3001/add_inventory",
            })
                .then(res => {
                    handleClose();
                    alert("Product Added.");
                })
        };

        return (
            <form>
                <Dialog
                    open={open}
                    TransitionComponent={Transition}
                    keepMounted
                    onClose={handleClose}
                    aria-labelledby="alert-dialog-slide-title"
                >
                    <DialogTitle id="form-dialog-title">Add Product</DialogTitle>
                    <DialogContent>
                        <DialogContentText>
                            Please add the product truthfully and honestly
                        </DialogContentText>
                        <AddForm
                            product={product} handleChange={handleChange} />
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={handleClose} color="primary">
                            Cancel
                        </Button>
                        <Button onClick={add} color="primary">
                            Add
                        </Button>
                    </DialogActions>
                </Dialog>
            </form>
        );
    };

    return (
        <Toolbar
            className={clsx(classes.root, {
                [classes.highlight]: numSelected > 0,
            })}
        >
            {numSelected > 0 ? (
                <Typography className={classes.title} color="inherit" variant="subtitle1" component="div">
                    {numSelected} selected
                </Typography>
            ) : (
                <Typography className={classes.title} variant="h6" id="tableTitle" component="div">
                    Products
                </Typography>
            )}

            {numSelected > 0 ? (
                <Tooltip title="Delete">
                    <IconButton aria-label="delete">
                        <DeleteIcon />
                    </IconButton>
                </Tooltip>
            ) : (
                <Tooltip title="Add Product">
                    <IconButton aria-label="add product">
                        <AddIcon onClick={handleClickOpen} />
                        <Modal />
                    </IconButton>
                </Tooltip>
            )}
        </Toolbar>
    );
};

EnhancedTableToolbar.propTypes = {
    numSelected: PropTypes.number.isRequired,
};

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
    },
    paper: {
        width: '100%',
        marginBottom: theme.spacing(2),
    },
    table: {
        minWidth: 750,
    },
    visuallyHidden: {
        border: 0,
        clip: 'rect(0 0 0 0)',
        height: 1,
        margin: -1,
        overflow: 'hidden',
        padding: 0,
        position: 'absolute',
        top: 20,
        width: 1,
    },
}));

export default function Content() {
    const classes = useStyles();
    const [order, setOrder] = React.useState('asc');
    const [orderBy, setOrderBy] = React.useState('name');
    const [selected, setSelected] = React.useState([]);
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(5);
    // const [rows, setRows] = React.useState([]);
    var dummy = [];
    var rows = [];

    //Retrieve data from DB
    var i = 0
    React.useEffect(() => {
        Axios({
            method: "GET",
            withCredentials: true,
            url: "http://localhost:3001/inventories",
        }).then((res) => {
            // console.log(res.data[0]);
            res.data.map((data) => {
                rows.push(createData(data.productID, data.productName, data.productQuantity, data.price, data.stats.toUpperCase()));
            });
        });
    }, []);

    // dummy.forEach((item, index) => {
    //     setRows(dummy => [...dummy, newElement]);
    //     console.log(item);
    // });
    // console.log(rows);
    // createData(data.productID, data.productName, data.productQuantity, data.price, data.stats.toUpperCase()),

    const handleRequestSort = (event, property) => {
        const isAsc = orderBy === property && order === 'asc';
        setOrder(isAsc ? 'desc' : 'asc');
        setOrderBy(property);
    };

    const handleSelectAllClick = (event) => {
        if (event.target.checked) {
            const newSelecteds = rows.map((n) => n.name);
            setSelected(newSelecteds);
            return;
        }
        setSelected([]);
    };

    const handleClick = (event, name) => {
        const selectedIndex = selected.indexOf(name);
        let newSelected = [];

        if (selectedIndex === -1) {
            newSelected = newSelected.concat(selected, name);
        } else if (selectedIndex === 0) {
            newSelected = newSelected.concat(selected.slice(1));
        } else if (selectedIndex === selected.length - 1) {
            newSelected = newSelected.concat(selected.slice(0, -1));
        } else if (selectedIndex > 0) {
            newSelected = newSelected.concat(
                selected.slice(0, selectedIndex),
                selected.slice(selectedIndex + 1),
            );
        }

        setSelected(newSelected);
    };

    //For Checking if Available, Not Available or Out of Stock
    const availability = (status) => {
        if (status == 'available') {
            return ("Available");
        } else if (status == 'not available') {
            return ("Not Available");
        } else {
            return ("Out of Stock");
        }
    };

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };

    const isSelected = (name) => selected.indexOf(name) !== -1;

    const emptyRows = rowsPerPage - Math.min(rowsPerPage, rows.length - page * rowsPerPage);

    return (
        <div className={classes.root}>
            <Paper className={classes.paper} elevation={3}>
                <EnhancedTableToolbar numSelected={selected.length} />
                <TableContainer>
                    <Table
                        className={classes.table}
                        aria-labelledby="tableTitle"
                        aria-label="enhanced table"
                    >
                        <EnhancedTableHead
                            classes={classes}
                            numSelected={selected.length}
                            order={order}
                            orderBy={orderBy}
                            onSelectAllClick={handleSelectAllClick}
                            onRequestSort={handleRequestSort}
                            rowCount={rows.length}
                        />
                        <TableBody>
                            {stableSort(rows, getComparator(order, orderBy))
                                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                                .map((row, index) => {
                                    const isItemSelected = isSelected(row.name);
                                    const labelId = `enhanced-table-checkbox-${index}`;

                                    return (
                                        <TableRow
                                            hover
                                            onClick={(event) => handleClick(event, row.name)}
                                            role="checkbox"
                                            aria-checked={isItemSelected}
                                            tabIndex={-1}
                                            key={row.id}
                                            selected={isItemSelected}
                                        >
                                            <TableCell padding="checkbox">
                                                <Checkbox
                                                    checked={isItemSelected}
                                                    inputProps={{ 'aria-labelledby': labelId }}
                                                />
                                            </TableCell>
                                            <TableCell component="th" id={labelId} scope="row" padding="none">
                                                {row.productID}
                                            </TableCell>
                                            <TableCell>{row.productName}</TableCell>
                                            <TableCell align="right">{row.productQuantity}</TableCell>
                                            <TableCell align="right">{row.price}</TableCell>
                                            <TableCell align="center">{availability(row.stats)}</TableCell>
                                            <TableCell align="center">Edit</TableCell>
                                        </TableRow>
                                    );
                                })}
                        </TableBody>
                    </Table>
                </TableContainer>
                <TablePagination
                    rowsPerPageOptions={[5, 10, 25]}
                    component="div"
                    count={rows.length}
                    rowsPerPage={rowsPerPage}
                    page={page}
                    onChangePage={handleChangePage}
                    onChangeRowsPerPage={handleChangeRowsPerPage}
                />
            </Paper>
        </div>
    );
}