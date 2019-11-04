
import React from 'react';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(
  createStyles({
    card: {
      maxWidth: 345,
    },
    media: {
      height: 140,
    },
  }),
);

export default function Cards() {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="https://cache1.pakwheels.com/system/car_generation_pictures/4664/medium/Toyota_Corolla.jpg?1503296685"
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Toyota Corolla 2019
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            PKR 37 lacs
          </Typography>
        </CardContent>


        
      </CardActionArea>

      
      
    </Card>
  );
}