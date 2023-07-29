import serverSideFetch from '@/helper/serverSideFetch';

export const queryDivisions = `query {
  divisions {
    id
    name
    waGroupLink
  }
}`;

const getDivisions = async () => {
  try {
    const response = serverSideFetch({ query: queryDivisions });

    const divisionDatas = await response.then((data) => data.data?.divisions);

    return divisionDatas;
  } catch (error) {
    throw new Error('Something went wrong');
  }
};

export default getDivisions;
