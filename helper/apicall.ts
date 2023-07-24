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

//     const setCookie = await axios.post('https://orbit.najwan.cloud/graphql', {
//       query: `
//         {
//             refreshToken {
//                 ... on Token {
//                   accessToken
//             }
//                 ... on Error {
//                   error
//              }
//         }
//         }
//       `,
//     });

//     console.log('cookie: ' + setCookie);

//     return response.data;
//   } catch (error) {
//     showToast('Terjadi Kesalahan', 'danger');
//     return false;
//   }
// };
// }

// export default Apicall;

import axios from 'axios';
import { showToast } from './toaster';

const Apicall = async (query: string, refreshToken: boolean = true) => {
  try {
    let token = '';
    if (refreshToken) {
      const setCookie = await axios.post(
        process.env.NEXT_PUBLIC_BASE_URL + '/graphql',
        {
          query: `
        {
            refreshToken {
                ... on Token {
                  accessToken
            }
                ... on Error {
                  error
             }
        }
        }
      `,
        }
      );

      if (setCookie.data.data.refreshToken.accessToken) {
        token = setCookie.data.data.refreshToken.accessToken;
      } else {
        showToast('Terjadi Kesalahan', 'danger');
        console.log(setCookie);
        return false;
      }
    }

    const headers: { [key: string]: string } = {};

    if (token) {
      headers['Authorization'] = 'Bearer ' + token;
    }

    const option = {
      method: 'POST',
      url: process.env.NEXT_PUBLIC_BASE_URL + '/graphql',
      data: {
        query: `
          ${query}
        `,
      },
      headers,
    };

    const response = await axios(option);

    return response.data;
  } catch (error) {
    showToast('Terjadi Kesalahan', 'danger');
    return false;
  }
};

export default Apicall;
