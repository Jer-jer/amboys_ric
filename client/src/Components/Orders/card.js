import React from 'react';
import { makeStyles, withStyles, styled } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

//For Dialog
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';

//For Card
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import ToggleButton from '@material-ui/lab/ToggleButton';

//Icons
import '../../materials/css/orders.css'
import CheckSharpIcon from '@material-ui/icons/CheckSharp';

//Custom Imports
import ModalContent from './modal';

const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: 345,
    },
    media: {
        height: 0,
        paddingTop: '56.25%', // 16:9
    },
    expand: {
        transform: 'rotate(0deg)',
        marginLeft: 'auto',
        transition: theme.transitions.create('transform', {
            duration: theme.transitions.duration.shortest,
        }),
    },
    expandOpen: {
        transform: 'rotate(180deg)',
    },
    avatar: {
        backgroundColor: '#3f51b5', //Change Avatar Icon
    },
}));

const DarkerIconButton = styled(ToggleButton)({
    color: 'black',
    border: 'none'
});

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

export default function RecipeReviewCard() {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);
    const [value, setValue] = React.useState(0);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleChangeStatus = () => {
        if(value > 2) {
            setValue(value%3);
        }else if(value == 0){
            console.log(value);
            setValue(value+1);
        }else{
            setValue(value+1);
            console.log(value);
        }
        
        
    };

    return (
        <Card className={classes.root}>
            <CardHeader
                avatar={
                    <Avatar aria-label="recipe" className={classes.avatar} />
                }
                title="Ginaling" //Product Name
                subheader="September 14, 2016" //Order Data
            />
            <CardMedia
                className={classes.media}
                image="/img/ginaling.jpeg"
                title="Ginaling"
            />
            <CardContent>
                <Typography variant="body2" color="textPrimary" component="p">
                    <b>Order ID: 4f6as5c16saw546216af84afs9</b>
                    <br />
                    <b>For:</b><Button
                        className="text-button"
                        size="medium"
                        onClick={handleClickOpen}>
                        Allan Jericho
                                </Button>
                    <br />
                    <b>Quantity:</b> 5
                    <br />
                    <b>Orders:</b> Ginaling, 2 Plain Rice, Coke
                </Typography>
                <Dialog
                    open={open}
                    TransitionComponent={Transition}
                    keepMounted
                    onClose={handleClose}
                    aria-labelledby="alert-dialog-slide-title"
                    aria-describedby="alert-dialog-slide-description"
                >
                    <ModalContent />
                </Dialog>
            </CardContent>
            <CardActions disableSpacing>
                <DarkerIconButton aria-label="checker" value={value} onChange={handleChangeStatus}>
                    <CheckSharpIcon />
                    <Typography variant="body1" component="body2">Ongoing</Typography>
                </DarkerIconButton>
            </CardActions>
        </Card>
    );
}