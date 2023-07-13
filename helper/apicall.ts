import axios from 'axios';
import { showToast } from './toaster';

const Apicall = async (query: string) => {
  try {
    const response = await axios.post(
      process.env.NEXT_PUBLIC_BASE_URL + '/graphql',
      {
        query: `
          ${query}
        `,
      }
    );

    return response.data;
  } catch (error) {
    showToast('Terjadi Kesalahan', 'danger');
    return false;
  }
};

export default Apicall;
