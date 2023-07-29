import Apicall from '@/helper/apicall';
import { RefreshTokenRes } from '@/helper/interfaces';
import { store } from '@/store';
import { setAccessToken } from '@/store/authSlice';

export const queryRefreshToken = `query {
  refreshToken {
    ... on Token {
      accessToken
    }
    ... on Error {
      error
    }
  }

}`;

const useRefreshToken = () => {
  // const { setAuth }: any = useAuth();
  try {
    const refreshToken = async () => {
      const response: RefreshTokenRes = await Apicall(queryRefreshToken, false);

      if (
        response.data === undefined ||
        response.data === null ||
        response.errors !== undefined
      ) {
        throw new Error(
          response.errors?.[0]?.message || 'Something went wrong'
        );
      }

      if (response.data.refreshToken.error) {
        throw new Error(response.data.refreshToken.error);
      }

      if (response.data.refreshToken.accessToken) {
        store.dispatch(setAccessToken(response.data?.refreshToken.accessToken));

        return { accessToken: response.data?.refreshToken.accessToken };
      }
      return response.data.refreshToken.accessToken;
    };
    return refreshToken;
  } catch (err: any) {
    throw new Error(err.message);
  }
};

export default useRefreshToken;
