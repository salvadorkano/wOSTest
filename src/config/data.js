// Images in this example demo are being user from Unsplash
// Manarola - https://unsplash.com/photos/rknrvCrfS1k
// Venezia - https://unsplash.com/photos/hFXZ5cNfkOk
// Prague - https://unsplash.com/photos/pz0P5piDQXs

export const data2 = [
  {
    id: '1',
    title: 'Manarola, Italy',
    description: 'The Cliffs of Cinque Terre',
    image_url:
      'https://images.unsplash.com/photo-1516483638261-f4dbaf036963?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=633&q=80',
    iconName: 'location-pin',
  },

  {
    id: '2',
    title: 'Venezia, Italy',
    description: 'Rialto Bridge, Venezia, Italy',
    image_url:
      'https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=630&q=80',
    iconName: 'location-pin',
  },
  {
    id: '3',
    title: 'Prague, Czechia',
    description: 'Tram in Prague',
    image_url:
      'https://images.unsplash.com/photo-1513805959324-96eb66ca8713?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80',
    iconName: 'location-pin',
  },
];

export const data = [
  {
    id: '1',
    title: 'Hermes',
    status: 'Not received',
    date: 'March 13, 2018',
    amount: '1,500.67',
    select: false,
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6y3eWV1F_SKhgW_X7z8driCt9XyUeNnLqoDUPgU1sBygqzfK23OXlfrz2rTODIrmRAi4&usqp=CAU',
    image_url:
      'https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=630&q=80',
  },
  {
    id: '2',
    title: 'Philipp Plein',
    status: 'Not received',
    date: 'March 13, 2018',
    amount: '1,245.17',
    select: true,
    image:
      'data:image/png;base64,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',
    image_url:
      'https://images.unsplash.com/photo-1516483638261-f4dbaf036963?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=633&q=80',
  },
  {
    id: '3',
    title: 'L´Ocitane',
    status: 'Not received',
    date: 'March 13, 2018',
    amount: '545.28',
    select: true,
    image:
      'data:image/png;base64,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',

    image_url:
      'https://images.unsplash.com/photo-1513805959324-96eb66ca8713?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80',
  },
  {
    id: '4',
    title: 'Kenzo',
    status: 'Not received',
    date: 'March 13, 2018',
    amount: '375.37',
    select: false,
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRX72XQS3Ohj-kqH6Qg8sPan3zYrZS3tUOwZw&usqp=CAU',
    image_url:
      'https://images.unsplash.com/photo-1513805959324-96eb66ca8713?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80',
  },
];
