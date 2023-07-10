import axios from 'axios';
import { showToast } from './toaster';

const Apicall = async (query: string) => {
  try {
    const response = await axios.post('http://203.194.113.238:8000/graphql', {
      query: `
          ${query}
        `,
    });

    return response.data;
  } catch (error) {
    console.log(error);
    showToast('Terjadi Kesalahan', 'danger');
    return false;
  }
};

export default Apicall;
