import React from 'react';
import { Card, CardActions, CardContent, CardMedia, Button, Typography} from '@material-ui/core';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import DeleteIcon from '@material-ui/icons/Delete';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import moment from 'moment';
import useStyles from './styles';
import { useDispatch } from 'react-redux';

import { deletePost, likePost } from '../../../actions/posts';


const Post = ({ post, setCurrentId }) => {
  const classes = useStyles();
  const dispatch = useDispatch();

  return (
    <Card className={classes.card}>
      <CardMedia className={classes.media} image={post.selectedFile} title={post.title} />
      {/* text needs left margin */}
      <div className={classes.overlay}>
        <Typography variant="h6" style={{color: 'white'}}>{post.creator}</Typography>
        {/* moment library uses date lib */}
        <Typography variant="body2" style={{color: 'white'}}>{moment(post.createdAt).fromNow()}</Typography>
      </div>
      {/* This is the ... button */}
      <div className={classes.overlay2}>
        <Button 
          style={{color: 'white'}} 
          size="small"
          // setCurrentId, drilled props all the way back here for onClick
          onClick={() => setCurrentId(post._id)}>
          {/* Changes in this onClick change here, form and app.js */}
          <MoreHorizIcon fontSize="medium" />
        </Button>
      </div>
      <div className={classes.details}>
        {/* i think map -> split -> join could be more elegant */}
        <Typography variant="body2" color="textSecondary">{post.tags.map(tag => `#${tag}`.split(' ').join(" #"))}</Typography>
      </div>
      <Typography className={classes.title} variant="h6" gutterBottom>{post.title}</Typography>
      <CardContent>
        <Typography variant="body2" gutterBottom>{post.message}</Typography>
      </CardContent>
      <CardActions className={classes.cardActions}>
        <Button size="small" color="primary" onClick={() => dispatch(likePost(post._id))}>
          <ThumbUpAltIcon fontSize="small" />
          Like {post.likeCount}
        </Button>
        <Button size="small" color="primary" onClick={() => dispatch(deletePost(post._id))}>
          <DeleteIcon fontSize="small" />
          Delete
        </Button>
      </CardActions>
    </Card>
  )
}

export default Post;