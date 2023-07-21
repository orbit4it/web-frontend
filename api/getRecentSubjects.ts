const getRecentSubjects = async () => {
  try {
    const response = {
      data: {
        recent: [
          {
            id: 4,
            title: 'HTML Development Basics',
            speaker: 'Arief Muhammad',
            createdAt: '2023-07-27T15:30',
            description:
              'Pada materi kali ini, kita akan belajar basics dari HTML Development. Pelajari materi yang telah diberikan dan kerjakan latihan soal berikut!',
            author: 'Web Development',
          },
          {
            id: 3,
            title: 'CSS Styling Techniques',
            speaker: 'Budi Setiawan',
            createdAt: '15.30',
            description:
              'Pada materi kali ini, kita akan mempelajari teknik-teknik styling dengan CSS. Ikuti dengan seksama dan jangan ragu untuk bertanya!',
            author: 'Web Development',
          },
          {
            id: 1,
            title: 'Materi 3',
            speaker: 'Arief Muhammad',
            createdAt: '2023-07-27T15:30',
            description:
              'Pada materi kali ini, kita akan belajar basics dari HTML Development. Pelajari materi yang telah diberikan dan kerjakan latihan soal berikut!',
            author: 'Web Development',
          },
          {
            id: 2,
            title: 'Materi 4',
            speaker: 'Arief Muhammad',
            createdAt: '2023-07-27T15:30',
            description:
              'Pada materi kali ini, kita akan belajar basics dari HTML Development. Pelajari materi yang telah diberikan dan kerjakan latihan soal berikut!',
            author: 'Web Development',
          },
          {
            id: 5,
            title: 'Materi 5',
            speaker: 'Arief Muhammad',
            createdAt: '2023-07-27T15:30',
            description:
              'Pada materi kali ini, kita akan belajar basics dari HTML Development. Pelajari materi yang telah diberikan dan kerjakan latihan soal berikut!',
            author: 'Web Development',
          },
        ],
        top: {
          id: 1,
          title: 'HTML Development Basics',
          speaker: 'Arief Muhammad',
          createdAt: '2023-07-27T15:30',
          description:
            'Pada materi kali ini, kita akan belajar basics dari HTML Development. Pelajari materi yang telah diberikan dan kerjakan latihan soal berikut!',
          author: 'Web Development',
          preView:
            'HTML adalah bahasa yang digunakan untuk membuat halaman web. Bagi yang berkecimpung di dunia perangkat gadget dan ilmu komputer, pasti sudah tidak asing lagi dengan berbagai kode di dalamnya. HTML adalah kependekan dari Hypertext Markup Language',
          rate: 4.9,
        },
      },
    };

    return response.data;
  } catch (error) {
    throw new Error('Something went wrong');
  }
};

export default getRecentSubjects;
