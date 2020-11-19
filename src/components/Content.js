import React from 'react';
import ControlCameraIcon from '@material-ui/icons/ControlCamera';
import { Typography, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import ItemCard from './ItemCard';

const useStyles = makeStyles(() => ({
  header: {
    flex: 1,
  },
}));

const Content = () => {
  const classes = useStyles();
  return (
    <Grid container spacing={4}>
      <Grid item xs={12} sm={4}>
        <ItemCard
          title='iPhone'
          subtitle='$99.99'
          avatarSrc='https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Eduard_von_Gr%C3%BCtzner_Falstaff.jpg/220px-Eduard_von_Gr%C3%BCtzner_Falstaff.jpg'
          imgSrc='https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-xr-red-select-201809?wid=940&hei=1112&fmt=png-alpha&qlt=80&.v=1551226038669'
          description='I am very happy to live and I am happy to sell this iPhone as well! Reasonable price like brand new. Rarely used!'
        />
      </Grid>
      <Grid item xs={12} sm={4}>
        <ItemCard
          title='iPhone'
          subtitle='$99.99'
          avatarSrc='https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Eduard_von_Gr%C3%BCtzner_Falstaff.jpg/220px-Eduard_von_Gr%C3%BCtzner_Falstaff.jpg'
          imgSrc='https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-xr-red-select-201809?wid=940&hei=1112&fmt=png-alpha&qlt=80&.v=1551226038669'
          description='I am very happy to live and I am happy to sell this iPhone as well! Reasonable price like brand new. Rarely used!'
        />
      </Grid>
      <Grid item xs={12} sm={4}>
        <ItemCard
          title='iPhone'
          subtitle='$99.99'
          avatarSrc='https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Eduard_von_Gr%C3%BCtzner_Falstaff.jpg/220px-Eduard_von_Gr%C3%BCtzner_Falstaff.jpg'
          imgSrc='https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-xr-red-select-201809?wid=940&hei=1112&fmt=png-alpha&qlt=80&.v=1551226038669'
          description='I am very happy to live and I am happy to sell this iPhone as well! Reasonable price like brand new. Rarely used!'
        />
      </Grid>
      <Grid item xs={12} sm={4}>
        <ItemCard
          title='iPhone'
          subtitle='$99.99'
          avatarSrc='https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Eduard_von_Gr%C3%BCtzner_Falstaff.jpg/220px-Eduard_von_Gr%C3%BCtzner_Falstaff.jpg'
          imgSrc='https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-xr-red-select-201809?wid=940&hei=1112&fmt=png-alpha&qlt=80&.v=1551226038669'
          description='I am very happy to live and I am happy to sell this iPhone as well! Reasonable price like brand new. Rarely used!'
        />
      </Grid>
      <Grid item xs={12} sm={4}>
        <ItemCard
          title='iPhone'
          subtitle='$99.99'
          avatarSrc='https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Eduard_von_Gr%C3%BCtzner_Falstaff.jpg/220px-Eduard_von_Gr%C3%BCtzner_Falstaff.jpg'
          imgSrc='https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-xr-red-select-201809?wid=940&hei=1112&fmt=png-alpha&qlt=80&.v=1551226038669'
          description='I am very happy to live and I am happy to sell this iPhone as well! Reasonable price like brand new. Rarely used!'
        />
      </Grid>
    </Grid>
  );
};

export default Content;
