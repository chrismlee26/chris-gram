import React, { useState } from 'react';
import { TextField, Button, Typography, Paper } from '@material-ui/core';
import FileBase from 'react-file-base64'
import { useDispatch } from 'react-redux'

import useStyles from './styles';
import { createPost } from '../../actions/posts';

const Form = () => {
  // Setter for postData
  const [postData, setPostData] = useState ({
    creator: "",
    title: "",
    message: "",
    tags: "",
    selectedFile: "",
  })
  const classes = useStyles();
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    // prevent refresh
    e.preventDefault()
    // dispatch postData from state
    dispatch(createPost(postData))
    // sent to reducers 
  }

  const clear = () => {

  }

  return (
    <Paper className={classes.paper}>
      <form autoComplete="off" noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>
        <Typography variant="h6">Gram me fam</Typography>
        {/* spread open for notes */}
        <TextField 
          name="creator" 
          variant="outlined" 
          label="Creator" 
          fullWidth 
          // All post data stored here in state
          // key after .
          value={postData.creator}
          // Set state using an object:
          // spread on postData is used so data persists, and only changes are updated
          onChange={(e) => setPostData({ ...postData, creator: e.target.value })}
          />
          <TextField name="title" variant="outlined" label="Title" fullWidth value={postData.title} onChange={(e) => setPostData({ ...postData, title: e.target.value })}/>
          <TextField name="message" variant="outlined" label="Message" fullWidth value={postData.message} onChange={(e) => setPostData({ ...postData, message: e.target.value })}/>
          <TextField name="tags" variant="outlined" label="Tags" fullWidth value={postData.tags} onChange={(e) => setPostData({ ...postData, tags: e.target.value })}/>
          <div className={classes.fileInput}>
            {/* 1. react-file-base64 encodes uploaded img/binary data into base64 */}
            {/* 2. upload to database, non-corruptable */}
            <FileBase 
              type="file"
              multiple={false}
              onDone={({base64}) => setPostData({ ...postData, selectedFile: base64 })}
            />
          </div>
          <Button className={classes.buttonSubmit} variant="contained" color="primary" size="large" type="submit" fullWidth>Submit</Button>
          <Button variant="contained" color="secondary" size="small" onClick={clear} fullWidth>Delete</Button>

      </form>
    </Paper>
  )
}

export default Form;