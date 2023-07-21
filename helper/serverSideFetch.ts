interface Props {
  query: string;
  variables?: string;
}

const serverSideFetch = async ({ query, variables }: Props) => {
  if (!process.env.API_URL) {
    throw new Error('API URL is not defined');
  }

  try {
    const res = await fetch(process.env.API_URL, {
      headers: { 'Content-Type': 'application/json' },
      method: 'POST',
      body: JSON.stringify({
        query: `
          ${query}
        `,
        variants: variables ? variables : {},
      }),
    }).then((data) => data.json());

    return res;
  } catch (error) {
    throw new Error('Something went wrong');
  }
};

export default serverSideFetch;
