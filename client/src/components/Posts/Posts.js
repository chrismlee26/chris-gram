import React from 'react';
import Post from './Post/Post';

import useStyles from './styles';

const Posts = () => {
  const classes = useStyles();

  return (
    <div>
      <h1 className={classes.something}>POSTS</h1>
      {/* <h1 className={classes.something} */}
      <Post />
      <Post />
    </div>
  )
}

export default Posts;