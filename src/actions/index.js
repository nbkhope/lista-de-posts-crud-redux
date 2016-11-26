import axios from 'axios';

// Coloque os action creators aqui

const REQUEST_URL = 'https://jsonplaceholder.typicode.com';

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
