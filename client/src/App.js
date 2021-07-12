import React, { useState, useEffect } from 'react';
import { Container, AppBar, Typography, Grow, Grid } from '@material-ui/core';
import { useDispatch } from 'react-redux';

import { getPosts } from './actions/posts';
import Posts from './components/Posts/Posts'
import Form from './components/Form/Form'
import grams from './images/grams.jpeg'
import useStyles from './styles'

function App() {
  // currentId & setCurrentId are sent as props to Form.js & Posts.js
  // app is currently the only parent to both
  const [currentId, setCurrentId] = useState(null);
  const classes = useStyles();
  const dispatch = useDispatch();

  // creator in ./actions/posts
  useEffect(() => {
    dispatch(getPosts());
    // adding currentId to dependencies adds preventDefault()
  }, [currentId, dispatch]);
  // this is dispatched to ./reducers/posts

  return (
    <Container maxWidth="lg">
      <AppBar className={classes.appBar} position="static" color="inherit">
        <Typography className={classes.heading} variant="h2" align="center">chrisgram</Typography>
        <img className={classes.image} src={grams} alt="grams" height="100" />
      </AppBar>
      <Grow in>
        <Container>
          <Grid className={classes.mainContainer} container justifyContent="space-between" alignItems="stretch" spacing={3}>
            <Grid item xs={12} sm={7}>
              <Posts setCurrentId={setCurrentId} />
            </Grid>
            <Grid item xs={12} sm={4}>
              <Form currentId={currentId} setCurrentId={setCurrentId} />
            </Grid>
          </Grid>
        </Container>
      </Grow>
    </Container>
  );
}

export default App;
