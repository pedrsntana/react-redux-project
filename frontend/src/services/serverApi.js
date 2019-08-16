import ApiService from './Api';

const BASE_URL = "http://localhost:3001";
const client = new ApiService({ baseURL: BASE_URL });

const serverApi = {};

serverApi.getPosts = () => client.get('/posts');
serverApi.getPostById = (id) => client.get(`/posts/${id}`);
serverApi.getPostComments = (id) => client.get(`/posts/${id}/comments`);
serverApi.postNewPost = (payload) => client.post('/posts', payload);
serverApi.postNewComment = (payload) => client.post(`/comments`, payload);
serverApi.deletePost = (id) => client.delete(`/posts/${id}`);

export default serverApi;
