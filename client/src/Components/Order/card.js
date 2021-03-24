import React from 'react';
import { spacing, display } from '@material-ui/system';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { Link } from 'react-router-dom';

const useStyles = makeStyles({
    root: {
        maxWidth: 350,
    },
});

export default function ImgMediaCard({ img, item, price }) {
    const classes = useStyles();

    return (
        <Box mb={3} mx="auto" p={1}>
            <Card className={classes.root}>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        alt="Contemplative Reptile"
                        height="180"
                        image={img}
                        title="Contemplative Reptile"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            {item}
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                            {price}
                        </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <Link to="/order_form">
                        <Button size="small" variant="contained" color="primary">
                            Order
                        </Button>
                    </Link>
                </CardActions>
            </Card>
        </Box>
    );
}