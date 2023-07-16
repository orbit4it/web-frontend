// import axios from 'axios';
// import { showToast } from './toaster';

// const Apicall = async (query: string) => {
//   try {
//     const response = await axios.post('https://orbit.najwan.cloud/graphql', {
//       query: `
//     const response = await axios.post(
//       process.env.NEXT_PUBLIC_BASE_URL + '/graphql',
//       {
//         query: `
//           ${query}
//         `,
//       }
//     );`

// const setCookie = await axios.post('https://orbit.najwan.cloud/graphql', {
//   query: `
//     {
//         refreshToken {
//             ... on Token {
//               accessToken
//         }
//             ... on Error {
//               error
//          }
//     }
//     }
//   `,
// });

// console.log('cookie: ' + setCookie);

//     return response.data;
//   } catch (error) {
//     showToast('Terjadi Kesalahan', 'danger');
//     return false;
//   }
// };

// export default Apicall;

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
