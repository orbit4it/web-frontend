const getCompetitions = async () => {
  try {
    const response = {
      data: [
        {
          id: 2,
          title: 'Dinamik 18 UPI',
          poster: '/assets/img/PosterCompetition2.jpg',
        },
        {
          id: 1,
          title: 'Compfest UI 2023 !!!',
          poster: '/assets/img/PosterCompetition1.jpg',
        },
        {
          id: 3,
          title: 'Graphic Design Competition UNIKAL ',
          poster: '/assets/img/PosterCompetition3.jpeg',
        },
      ],
    };

    return response.data;
  } catch (error) {
    throw new Error('Something went wrong');
  }
};

export default getCompetitions;
