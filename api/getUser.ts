const getUser = async () => {
  try {
    const response = {
      data: {
        id: 1,
        name: 'Azarel Lazuardi Aditya',
        grade: 'XI PPLG 2',
        division: 'Web Development',
        image: '/assets/img/FotoDummy.png',
      },
    };

    return response.data;
  } catch (error) {
    throw new Error('Something went wrong');
  }
};

export default getUser;
