import ApiService from './Api';

const BASE_URL = "http://localhost:3001";
const client = new ApiService({ baseURL: BASE_URL });

const serverApi = {};

// Post requests:
// GET
serverApi.getPosts = () => client.get('/posts');
serverApi.getPostById = (id) => client.get(`/posts/${id}`);
// POST
serverApi.postNewPost = (payload) => client.post('/posts', payload);
// DELETE
serverApi.deletePost = (id) => client.delete(`/posts/${id}`);
// Comments requests:
// GET
serverApi.getPostComments = (id) => client.get(`/posts/${id}/comments`);
// POST
serverApi.postNewComment = (payload) => client.post(`/comments`, payload);
// DELETE
serverApi.deleteComment = (id) => client.delete(`/comments/${id}`);
// Categories:
// GET
serverApi.getPostCategories = () => client.get('/categories');




export default serverApi;
