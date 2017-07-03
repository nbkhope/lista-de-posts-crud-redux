import axios from 'axios';

// Coloque os action creators aqui

const REQUEST_URL = 'https://restful-api-posts.herokuapp.com';

export const fetchPosts = () => {
  // fazer pedido HTTP para obter todos os posts
  const request = axios.get(`${REQUEST_URL}/posts`);

  return {
    type: 'FETCH_POSTS',
    payload: request   // Promise
  };
};

export const fetchPost = (id) => {
  // faz pedido HTTP
  const request = axios.get(`${REQUEST_URL}/posts/${id}`);

  // retorna action
  return {
    type: 'FETCH_POST',
    // vai virar response (resposta) por causa do redux promise
    payload: request
  };
}

export const changePostTitle = (title) => {
  return {
    type: 'CHANGE_POST_TITLE',
    payload: title
  };
};

export const changePostBody = (body) => {
  return {
    type: 'CHANGE_POST_BODY',
    payload: body
  };
};

export const changePostError = (field, error) => {
  return {
    type: 'CHANGE_POST_ERROR',
    payload: { field, error }
  };
};

export const createPost = (post) => {
  const request = axios.post(`${REQUEST_URL}/posts`, post);

  return {
    type: 'CREATE_POST',
    payload: request
  };
};

export const resetPostForm = () => ({ type: 'RESET_POST_FORM' });

export const updatePost = (post, postId) => {
  const request = axios.put(`${REQUEST_URL}/posts/${postId}`, post);

  return {
    type: 'UPDATE_POST',
    payload: request
  };
};

export const deletePost = (id) => {
  const request = axios.delete(`${REQUEST_URL}/posts/${id}`);

  return {
    type: 'DELETE_POST',
    payload: request
  };
};

export const deselectPost = () => ({ type: 'DESELECT_POST' });
