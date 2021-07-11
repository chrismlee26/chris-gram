import mongoose from 'mongoose';
import PostMessage from '../models/postMessage.js';

//  Display Posts Controller
export const getPosts = async (req, res) => {
  try {
    const postMessages = await PostMessage.find();
    // console.log(postMessages);

    res.status(200).json(postMessages);
  } catch (error) {
    res.status(404).json({ message: error.message })
  }
} 

// Create Post Controller
export const createPost = async (req, res) => {
  const post = req.body;
  const newPost = new PostMessage(post);

  try {
    await newPost.save()

    res.status(201).json(newPost);
  } catch (error) {
    res.status(409).json({ message: error.message })

  }
}

// Update Post Controller
export const updatePost = async (req, res) => {
  // id will be created from /posts/name (req.body --> from front end)
  // destructure & rename id
  const { id: _id } = req.params;
  const post = req.body

  // check if valid mongoose id
  if(!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send('Id not found');

  //  destructure post with {...spread} from front end & additional _id property
  // const updatedPost = await PostMessage.findByIdAndUpdate(_id, post, { new: true });
  // post = { ...post, _id } ---> 

  // if valid, find and update
  const updatedPost = await PostMessage.findByIdAndUpdate(_id, { ...post, _id }, { new: true });

  res.json(updatedPost);
}

// Delete Post Controller
export const deletePost = async (req, res) => {
  // destructuring id : _id vs just using a id variable, why?
  const { id } = req.params;

  if(!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send('Id not found');

  await PostMessage.findByIdAndRemove(id)
  console.log('DELETE')

  res.json({ message: 'deleted' });
}