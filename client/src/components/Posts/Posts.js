import React from 'react';
import { Grid, CircularProgress } from '@material-ui/core'
import { useSelector } from 'react-redux';

import Post from './Post/Post';

import useStyles from './styles';

const Posts = ({ setCurrentId }) => {
  // takes data from posts reducer
  const posts = useSelector((state) => state.posts)
  const classes = useStyles();

  console.log(posts)

  return (
      !posts.length ? <CircularProgress /> : (
        // weird issue here with spacing="3"
        <Grid className={classes.container} container alignItems="stretch" spacing={3}>
          {posts.map((post) => (
            <Grid key={post._id} item xs={12} sm={6}>
              {/* Props drilling into further child here */}
              <Post post={post} setCurrentId={setCurrentId} />
            </Grid>
          ))}
        </Grid>
      )
  )
}

export default Posts;