import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { lighten, makeStyles, withStyles } from '@material-ui/core/styles';
import Axios from 'axios';

//For Table
import { Table, TableBody, TableCell, TableContainer, TablePagination } from '@material-ui/core'
import { TableRow, Toolbar, Typography, Paper, Checkbox, IconButton, Tooltip } from '@material-ui/core'

//For Add Data (Modal)
import { Button, Dialog, DialogActions } from '@material-ui/core';
import { DialogContent, DialogContentText, DialogTitle } from '@material-ui/core';
import Slide from '@material-ui/core/Slide';

//For Registered (Modal)
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import CloseIcon from '@material-ui/icons/Close';

//Icons
import DeleteIcon from '@material-ui/icons/Delete';
import AddIcon from '@material-ui/icons/Add';

//Custom Import
import EnhancedTableHead from './table_head';
import createData from './data';
import stableSort from './stable_sort';
import getComparator from './comparator';
import AddForm from './form/form_content';

const styles = (theme) => ({
    root: {
        margin: 0,
        padding: theme.spacing(2),
    },
    closeButton: {
        position: 'absolute',
        right: theme.spacing(1),
        top: theme.spacing(1),
        color: theme.palette.grey[500],
    },
});

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

// Original sample Table data
const sample = [
    createData(305, 'Sakata Gintoki', 'zdkr.ah@modabet47.com', '123456', "09458034816", "Manager"),
    createData(452, 'Sukehiro Yami', 'nabil.nounits@smrn420.com', '123456', "09458034816", "Manager"),
    createData(262, 'Uzumaki Naruto', 'kmos@region13.cf', '123456', "09458034816", "Manager"),
    createData(159, 'Uchiha Sasuke', 'kmos@region13.cf', '123456', "09458034816", "Manager"),
    createData(356, 'Shimura Shinpachi', 'qjoseluis@ladieswhobrunch.net', '123456', "09458034816", "Manager"),
    createData(408, 'Kotaro Katsuro', 'vahmed@bbtspage.com', '123456', "n09458034816", "Manager"),
    createData(237, 'Jonathan Joestar', 'vtechnol@king.buzz', '123456', "09458034816", "Manager"),
    createData(375, 'Jotaro Kujo', 'dahmedcena14n@changenypd.com', '123456', "09458034816", "Manager"),
    createData(518, 'Giorno Giovanna', '3veer.zaara.12@king.buzz', '123456', "09458034816", "Manager"),
    createData(392, 'Joseph Joestar', 'hdina.samer@mwoodman.com', '123456', "09458034816", "Manager"),
    createData(318, 'Takasugi Shinsuke', 'qboz@domy.me', '123456', "09458034816", "Manager"),
    createData(360, 'Barry Allen', 'crannahab@apilasansor.com', '123456', "09458034816", "Manager"),
    createData(437, 'Wally West', 'mgmahmoud53@greendike.com', '123456', "09458034816", "Manager"),
];

EnhancedTableHead.propTypes = {
    classes: PropTypes.object.isRequired,
    numSelected: PropTypes.number.isRequired,
    onRequestSort: PropTypes.func.isRequired,
    onSelectAllClick: PropTypes.func.isRequired,
    order: PropTypes.oneOf(['asc', 'desc']).isRequired,
    orderBy: PropTypes.string.isRequired,
    rowCount: PropTypes.number.isRequired,
};

//Modal Transition
const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

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

const EnhancedTableToolbar = (props) => {
    const classes = useToolbarStyles();
    const { numSelected, data } = props;
    const [open, setOpen] = React.useState(false);
    const [show, setShow] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleClickDelete = () => {
        setShow(true);
    };

    const handleClickClose = () => {
        setShow(false);
    }

    //For Adding Data in DB
    const Modal = () => {
        const [employee, setEmployee] = React.useState({
            id: '',
            lastName: '',
            firstName: '',
            email: '',
            password: '',
            contact: '',
            position: 'waiter',
        });

        const handleChange = (props) => (event) => {
            setEmployee({ ...employee, [props]: event.target.value });
        };

        // Register
        const register = () => {
            Axios({
                method: 'POST',
                data: {
                    empID: employee.id,
                    empLname: employee.lastName,
                    empFname: employee.firstName,
                    empEmail: employee.email,
                    empPass: employee.password,
                    contact: employee.contact,
                    job: employee.position
                },
                withCredentials: true,
                url: "http://localhost:3001/register",
            })
                .then(res => {
                    handleClose();
                    alert("Employee Registered.");
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
                    <DialogTitle id="form-dialog-title">Register Employee</DialogTitle>
                    <DialogContent>
                        <AddForm employee={employee} handleChange={handleChange} />
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={handleClose} color="primary">
                            Cancel
                        </Button>
                        <Button onClick={register} color="primary">
                            Add
                        </Button>
                    </DialogActions>
                </Dialog>
            </form>
        );
    };

    //Delete Data
    const Del = () => {
        const remove = () => {
            // Axios.delete({
            //     method: 'DELETE',
            //     data: data,
            //     withCredentials: true,
            //     url: "http://localhost:3001/delete",
            // })
            //     .then(res => {
            //         handleClickClose();
            //         alert("Employee Removed.");
            //     })
            // Axios.delete("http://localhost:3001/delete", data)
            //     .then(res => {
            //         handleClickClose();
            //         alert("Employee Removed.");
            //     })
            Axios.delete("http://localhost:3001/delete", {
                headers: {
                  Authorization: ""
                },
                data: {
                  id: data
                }
              });
        };

        return (
            <Dialog
                open={show}
                TransitionComponent={Transition}
                keepMounted
                onClose={handleClickClose}
                aria-labelledby="alert-dialog-slide-title"
            >
                <DialogTitle id="form-dialog-title">
                    {(numSelected > 1) ? 'Remove Employees?' : 'Remove Employee?'}
                </DialogTitle>
                <DialogContent>
                    <Typography>Do you want to remove this employee?</Typography>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClickClose} color="primary">
                        No
                        </Button>
                    <Button onClick={remove} color="primary">
                        Yes
                        </Button>
                </DialogActions>
            </Dialog>
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
                    Employees
                </Typography>
            )}

            {numSelected > 0 ? (
                <Tooltip title="Delete">
                    <IconButton aria-label="delete">
                        <DeleteIcon onClick={handleClickDelete} />
                        <Del />
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

const DialogRegTitle = withStyles(styles)((props) => {
    const { children, classes, onClose, ...other } = props;
    return (
        <MuiDialogTitle disableTypography className={classes.root} {...other}>
            <Typography variant="h6">{children}</Typography>
            {onClose ? (
                <IconButton aria-label="close" className={classes.closeButton} onClick={onClose}>
                    <CloseIcon />
                </IconButton>
            ) : null}
        </MuiDialogTitle>
    );
});

const DialogRegContent = withStyles((theme) => ({
    root: {
        padding: theme.spacing(2),
    },
}))(MuiDialogContent);

const DialogRegActions = withStyles((theme) => ({
    root: {
        margin: 0,
        padding: theme.spacing(1),
    },
}))(MuiDialogActions);

const RegisteredModal = () => {
    const [show, setShow] = React.useState(true);

    const handleClickOpenReg = () => {
        setShow(true);
    };
    const handleCloseReg = () => {
        setShow(false);
    };

    return (
        <div>
            <Dialog onClose={handleCloseReg} aria-labelledby="customized-dialog-title" open={show}>
                <DialogRegTitle id="customized-dialog-title" onClose={handleCloseReg}>
                    Modal title
                </DialogRegTitle>
                <DialogRegContent dividers>
                    <Typography gutterBottom>
                        Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis
                        in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
                    </Typography>
                    <Typography gutterBottom>
                        Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis
                        lacus vel augue laoreet rutrum faucibus dolor auctor.
                    </Typography>
                    <Typography gutterBottom>
                        Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel
                        scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus
                        auctor fringilla.
                    </Typography>
                </DialogRegContent>
            </Dialog>
        </div>
    );
};

export default function Content() {
    const classes = useStyles();
    const [order, setOrder] = React.useState('asc');
    const [orderBy, setOrderBy] = React.useState('ID');
    const [selected, setSelected] = React.useState([]);
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(5);
    const [employees, setEmployees] = React.useState([]);
    const [rows, setRows] = React.useState([]);
    const [selectedID, setSelectedID] = React.useState(0);


    //Retrieve data from DB
    React.useEffect(() => {
        Axios({
            method: "GET",
            withCredentials: true,
            url: "http://localhost:3001/users",
        }).then((res) => {
            setRows(res.data);
            setEmployees(res.data);
            // console.log(rows);
            // console.log(employees);
        });
    }, []);


    const handleRequestSort = (event, property) => {
        const isAsc = orderBy === property && order === 'asc';
        setOrder(isAsc ? 'desc' : 'asc');
        setOrderBy(property);
    };

    const handleSelectAllClick = (event) => {
        if (event.target.checked) {
            const newSelecteds = rows.map((n) => n.employeeID);
            setSelected(newSelecteds);
            return;
        }
        setSelected([]);
    };

    const handleClick = (event, id) => {
        const selectedIndex = selected.indexOf(id);
        let newSelected = [];

        if (selectedIndex === -1) {
            newSelected = newSelected.concat(selected, id);
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
        setSelectedID(id);
    };

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };

    const isSelected = (id) => selected.indexOf(id) !== -1;

    const emptyRows = rowsPerPage - Math.min(rowsPerPage, rows.length - page * rowsPerPage);

    return (
        <div className={classes.root}>
            <Paper className={classes.paper} elevation={3}>
                <EnhancedTableToolbar numSelected={selected.length} data={selectedID} />
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
                                    const isItemSelected = isSelected(row.employeeID);
                                    const labelId = `enhanced-table-checkbox-${index}`;

                                    return (
                                        <TableRow
                                            hover
                                            onClick={(event) => handleClick(event, row.employeeID)}
                                            role="checkbox"
                                            aria-checked={isItemSelected}
                                            tabIndex={-1}
                                            key={row.employeeID}
                                            selected={isItemSelected}
                                        >
                                            <TableCell padding="checkbox">
                                                <Checkbox
                                                    checked={isItemSelected}
                                                    inputProps={{ 'aria-labelledby': labelId }}
                                                />
                                            </TableCell>
                                            <TableCell component="th" id={labelId} scope="row" padding="none">
                                                {row.employeeID}
                                            </TableCell>
                                            <TableCell>{row.employeeLname + " " + row.employeeFname}</TableCell>
                                            <TableCell>{row.employeeEmail}</TableCell>
                                            <TableCell>{row.employeePassword}</TableCell>
                                            <TableCell>{row.contactNo}</TableCell>
                                            <TableCell>{row.jobTitle.toUpperCase()}</TableCell>
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