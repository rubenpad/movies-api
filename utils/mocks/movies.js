const moviesMock = [
  {
    id: '1fd7cd22-4f57-48b6-834f-ceddd7593cd9',
    title:
      "Godzilla's Revenge (Gojira-Minira-Gabara: Oru Kaijû Daishingeki) (All Monsters Attack)",
    year: 2008,
    cover: 'http://dummyimage.com/146x247.png/5fa2dd/ffffff',
    description:
      'Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.',
    duration: 1949,
    contentRating: 'NC-17',
    source: 'https://exblog.jp/id/lobortis/convallis/tortor.xml',
    tags: ['Drama|Musical', 'Comedy|Crime']
  },
  {
    id: 'ac2ee8aa-7ced-4afa-86be-3c8117a6bd03',
    title: 'Faces of Death 6',
    year: 1988,
    cover: 'http://dummyimage.com/209x124.png/5fa2dd/ffffff',
    description:
      'Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.\n\nDuis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.\n\nDonec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.',
    duration: 1906,
    contentRating: 'PG',
    source: 'http://businessweek.com/cubilia/curae/nulla/dapibus/dolor.js',
    tags: ['Comedy|Romance']
  },
  {
    id: '1a0769e7-c2f6-411a-8941-16ee59ea43ac',
    title: 'Never Give a Sucker an Even Break',
    year: 2012,
    cover: 'http://dummyimage.com/192x191.png/5fa2dd/ffffff',
    description:
      'In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.\n\nAliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.',
    duration: 1907,
    contentRating: 'NC-17',
    source: 'http://usatoday.com/ipsum/primis/in/faucibus/orci.json',
    tags: [
      'Drama|Fantasy|Mystery',
      'Comedy|Drama',
      'Action|Adventure|Sci-Fi',
      'Horror|Sci-Fi',
      'Drama'
    ]
  },
  {
    id: 'a5e75b5c-ef61-4e7f-a9cb-c73149ea202c',
    title: 'Trans',
    year: 1991,
    cover: 'http://dummyimage.com/114x221.bmp/5fa2dd/ffffff',
    description:
      'Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.',
    duration: 2031,
    contentRating: 'PG-13',
    source: 'https://aboutads.info/aliquam.html',
    tags: ['Comedy|Western']
  },
  {
    id: '4558f479-dbe0-46ac-b7fb-7341ec4f2241',
    title: 'Average Italian',
    year: 2000,
    cover: 'http://dummyimage.com/104x168.jpg/cc0000/ffffff',
    description:
      'Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.\n\nCurabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.',
    duration: 1930,
    contentRating: 'G',
    source:
      'http://123-reg.co.uk/suspendisse/ornare/consequat/lectus/in/est.png',
    tags: ['Comedy|Western']
  },
  {
    id: '17d491f1-eefa-44b9-a0c4-3c047e16670e',
    title: 'Never a Dull Moment',
    year: 1990,
    cover: 'http://dummyimage.com/145x182.bmp/cc0000/ffffff',
    description:
      'Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.\n\nIn sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.',
    duration: 2008,
    contentRating: 'NC-17',
    source: 'https://addthis.com/tincidunt/nulla/mollis/molestie.json',
    tags: [
      'Comedy|Drama',
      'Fantasy',
      'Comedy|Horror|Sci-Fi',
      'Adventure|Drama',
      'Drama|Thriller|War'
    ]
  },
  {
    id: 'fb1d474b-f6c4-4dd9-9db0-d76afc7693b1',
    title: 'Junior',
    year: 1997,
    cover: 'http://dummyimage.com/151x157.bmp/cc0000/ffffff',
    description:
      'Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.\n\nCum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.\n\nEtiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.',
    duration: 2029,
    contentRating: 'R',
    source: 'https://cornell.edu/integer/ac/leo.jpg',
    tags: ['Comedy|Drama', 'Comedy', 'Drama', 'Romance']
  },
  {
    id: '2b373364-ad45-4b7a-bb6a-e9c651f58647',
    title: 'Business of Fancydancing, The',
    year: 1994,
    cover: 'http://dummyimage.com/197x164.png/dddddd/000000',
    description:
      'Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.\n\nDuis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.\n\nIn sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.',
    duration: 2062,
    contentRating: 'PG',
    source: 'https://google.it/sapien.js',
    tags: ['Drama|Romance', 'Drama', 'Drama']
  },
  {
    id: 'dc32a53e-9747-460d-89be-71268553b8e4',
    title: 'A Short History of Decay',
    year: 1999,
    cover: 'http://dummyimage.com/127x100.bmp/ff4444/ffffff',
    description: 'Fusce consequat. Nulla nisl. Nunc nisl.',
    duration: 1938,
    contentRating: 'R',
    source:
      'http://geocities.jp/cursus/id/turpis/integer/aliquet/massa/id.json',
    tags: ['Action|Adventure|Comedy', 'Drama|Romance', 'Drama']
  },
  {
    id: '244ccad8-9182-49bd-8e0c-ccb5e879b20a',
    title: 'Frozen City (Valkoinen kaupunki) ',
    year: 2000,
    cover: 'http://dummyimage.com/218x130.jpg/dddddd/000000',
    description:
      'Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.\n\nCras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.',
    duration: 1933,
    contentRating: 'PG',
    source: 'http://discovery.com/odio/curabitur/convallis/duis/consequat.png',
    tags: [
      'Documentary',
      'Animation|Children|Comedy',
      'Comedy|Drama',
      'Documentary',
      'Drama'
    ]
  }
];

function filteredMoviesMock(tag) {
  return moviesMock.filter((movie) => movie.tags.includes(tag));
}

class MoviesServiceMock {
  async getMovies() {
    return Promise.resolve(moviesMock);
  }

  async createMovie() {
    return Promise.resolve(moviesMock[0].id);
  }
}

module.exports = {
  moviesMock,
  filteredMoviesMock,
  MoviesServiceMock
};
