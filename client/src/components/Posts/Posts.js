import React from 'react';
import { useSelector } from 'react-redux';

import Post from './Post/Post';

import useStyles from './styles';

const Posts = () => {
  // takes data from posts reducer
  const posts = useSelector((state) => state.posts)
  const classes = useStyles();

  console.log(posts)

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