import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: 'Client-ID 22915a743e2b4f7ddfa2baa3289830479b438ead0092fc606eea5fa48fcc6ec4'
  }
});
