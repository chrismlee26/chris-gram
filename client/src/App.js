import React, { useState, useEffect } from 'react';
import { Container, AppBar, Typography, Grow, Grid, InputBase } from '@material-ui/core';
import { useDispatch } from 'react-redux';

import { getPosts } from './actions/posts';
import Posts from './components/Posts/Posts';
import Form from './components/Form/Form';
import grams from './images/grams.jpeg';
import SearchIcon from '@material-ui/icons/Search';


import useStyles from './styles';



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
        <img className={classes.image} src={grams} alt="grams" />
        <Typography className={classes.heading} variant="h2" align="center">chrisgram</Typography>

        <div className={classes.search}>
          <div className={classes.searchIcon}>

            <SearchIcon />
            <InputBase
              PLACEHOLDER="SEARCH..."
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ 'aria-label': 'search' }}
            />

          </div>
        </div>

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
