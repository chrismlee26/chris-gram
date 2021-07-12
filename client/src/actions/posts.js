import * as api from '../api'

// Action Creators
export const getPosts = () =>  async (dispatch) => {
  try {
    const { data } = await api.fetchPosts();

    // dispatched by app.js
    dispatch({ type: 'FETCH_ALL', payload: data })
  } catch (error) {
    console.log(error.message)
  }
}

export const createPost = (post) => async (dispatch) => {
  try {
    // destructure data from response
    // api request (POST) to back end
    const { data } = await api.createPost(post);
    // dispatch action -> Form
    dispatch({ type: 'CREATE', payload: data })
  } catch (error) {
    console.log(error)
  }
}

export const updatePost = (id, post) => async (dispatch) => {
  try {
    // gets response from api, destructure and only take {data} 
    const { data } = await api.updatePost(id, post);
    dispatch({ type: 'UPDATE', payload: data })
  } catch (error) {
    console.log(error)
  }
}

export const deletePost = (id) => async (dispatch) => {
  try {
    // delete happens @ api, no need return, so no variable
    await api.deletePost(id);

    dispatch({ type: 'DELETE', payload: id })
  } catch (error) {
    console.log(error);
  }
};

export const likePost = (id) => async (dispatch) => {
  try {
    const { data } = await api.likePost(id);

    dispatch({type: 'LIKE', payload: data})
  } catch (error) {
    console.log(error);
  }
}