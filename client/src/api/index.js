import axios from 'axios';

const BASE_URL = process.env.NODE_ENV === "production" ? "https://chrisgram-server.dev.chrislee.wtf" : "http://localhost:5000";
const url = BASE_URL + "/posts"



export const fetchPosts = () => axios.get(url);

// export to actions
export const createPost = (newPost) => axios.post(url, newPost);
export const updatePost = (id, updatedPost) => axios.patch(`${url}/${id}`, updatedPost);
export const deletePost = (id) => axios.delete(`${url}/${id}`);
export const likePost = (id) => axios.patch(`${url}/${id}/likePost`);