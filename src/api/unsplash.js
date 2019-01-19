import axios from 'axios';

export default axios.create({
  headers: {
    Authorization: 'Client-ID b3e96e25312697b252fbbbb93abde697ec2807663bcea8396a1420e435c01f46'
  },
  baseURL: 'https://api.unsplash.com'
});