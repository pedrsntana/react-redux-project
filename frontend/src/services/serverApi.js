import ApiService from './Api';

const BASE_URL = "http://localhost:3001";
const client = new ApiService({ baseURL: BASE_URL });

const serverApi = {};

serverApi.getPosts = () => client.get('/posts');
serverApi.getPostById = (id) => client.get(`/posts/${id}`);

export default serverApi;
