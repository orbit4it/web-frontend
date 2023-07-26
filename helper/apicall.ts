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
        },
        { withCredentials: true }
      );

      if (setCookie.data.data.refreshToken.accessToken) {
        // console.log('COKI BARU AJIG');
        // console.log(setCookie);
        token = setCookie.data.data.refreshToken.accessToken;
      } else {
        showToast('Terjadi Kesalahan', 'danger');
        console.log(setCookie);
        return false;
      }
    }

    const headers: { [key: string]: string } = {};

    // console.log('TOKEN AJIG');
    // console.log(token);
    if (refreshToken) {
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
      withCredentials: true,
    };

    // console.log(option);

    const response = await axios(option);

    return response.data;
  } catch (error) {
    showToast('Terjadi Kesalahan', 'danger');
    return false;
  }
};

export default Apicall;
