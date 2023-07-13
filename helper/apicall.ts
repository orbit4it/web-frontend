import axios from 'axios';
import { showToast } from './toaster';

const Apicall = async (query: string) => {
  try {
    const response = await axios.post('https://orbit.najwan.cloud/graphql', {
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
