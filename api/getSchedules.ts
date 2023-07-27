const getSchedules = async () => {
  try {
    const response = {
      data: [
        {
          id: 1,
          type: 'Web Development',
          title: 'Kegiatan Rutin',
          start: '2023-07-27T15:30',
          end: '2023-07-27T17:00',
          location: 'Kelas C.2.2',
          subject: 'HTML Development Basics',
        },
        {
          id: 2,
          type: 'Game Development',
          title: 'Kegiatan Rutin',
          start: '2023-07-27T15:30',
          end: '2023-07-27T17:00',
          location: 'Kelas C.2.2',
          subject: 'C# Unity Basics',
        },
        {
          id: 3,
          type: 'Cinematography',
          title: 'Kegiatan Rutin',
          start: '2023-07-27T15:30',
          end: '2023-07-27T17:00',
          location: 'Kelas C.2.2',
          subject: 'Adobe Premiere Pro Basics',
        },
        {
          id: 4,
          type: 'Design Graphic',
          title: 'Kegiatan Rutin',
          start: '2023-07-27T15:30',
          end: '2023-07-27T17:00',
          location: 'Kelas C.2.2',
          subject: 'Adobe Photoshop Basics',
        },
        {
          id: 5,
          type: 'IT Support',
          title: 'Kegiatan Rutin',
          start: '2023-07-27T15:30',
          end: '2023-07-27T17:00',
          location: 'Kelas C.2.2',
          subject: 'Hardware Komputer',
        },
        {
          id: 6,
          type: 'Global',
          title: 'SMK to Industry',
          start: '2023-07-29T09:00',
          end: '2023-07-29T12:00',
          location: 'Technopark',
        },
      ],
    };

    return response.data;
  } catch (error) {
    throw new Error('Something went wrong');
  }
};

export default getSchedules;
