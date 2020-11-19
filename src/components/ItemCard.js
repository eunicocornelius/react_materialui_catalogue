import React from 'react';
import ShareIcon from '@material-ui/icons/Share';
import {
  Card,
  CardHeader,
  CardActions,
  CardContent,
  Typography,
  Button,
  Avatar,
  IconButton,
  CardMedia,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles({
  root: {
    background: 'black',
    color: 'white',
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  itemImage: {
    height: 200,
    width: '100%',
    objectFit: 'scale-down',
  },
  buttons: {
    paddingLeft: 16,
  },
});

const ItemCard = (props) => {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;
  const { avatarSrc, title, subtitle, description, imgSrc } = props;
  return (
    <Card className={classes.root}>
      <CardHeader
        avatar={<Avatar src={avatarSrc} />}
        action={
          <IconButton aria-label='settings'>
            <ShareIcon />
          </IconButton>
        }
        titleTypographyProps={{ variant: 'h5' }}
        subheaderTypographyProps={{ color: 'inherit' }}
        title={title}
        subheader={subtitle}
      />
      <CardMedia image={imgSrc} className={classes.itemImage} />
      <CardContent>
        <Typography variant='body2' component='p'>
          {description}
        </Typography>
      </CardContent>
      <CardActions className={classes.buttons}>
        <Button size='small' color='secondary'>
          BUY NOW
        </Button>
        <Button size='small' color='primary'>
          OFFER
        </Button>
      </CardActions>
    </Card>
  );
};

export default ItemCard;
