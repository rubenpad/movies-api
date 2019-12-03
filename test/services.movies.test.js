const assert = require('assert');
const proxyquire = require('proxyquire');

const { moviesMock } = require('../utils/mocks/movies');
const {
  getAllStub,
  createStub,
  updateStub,
  deleteStub,
  MongoLibMock
} = require('../utils/mocks/mongoLib');

describe('services - movies', () => {
  const MoviesServices = proxyquire('../services/movies', {
    '../lib/mongo': MongoLibMock
  });

  const moviesService = new MoviesServices();

  describe('when getMovies method is called', async () => {
    it('should call the getAll MongoLib method', async () => {
      await moviesService.getMovies({});
      assert.strictEqual(getAllStub.called, true);
    });

    it('should return an array of movies', async () => {
      const result = await moviesService.getMovies({});
      const expected = moviesMock;
      assert.deepEqual(result, expected);
    });
  });

  describe('when createMovie method is called', async () => {
    it('should call the create MongoLib method', async () => {
      await moviesService.createMovie({});
      assert.strictEqual(createStub.called, true);
    });

    it('should return the id of created movie', async () => {
      const result = await moviesService.createMovie({});
      const expected = moviesMock[0].id;
      assert.deepEqual(result, expected);
    });
  });

  describe('when updateMovie method is called', async () => {
    it('should call the update MongoLib method', async () => {
      await moviesService.updateMovie({});
      assert.strictEqual(updateStub.called, true);
    });

    it('should return the id of updated movie', async () => {
      const result = await moviesService.updateMovie({});
      const expected = moviesMock[0].id;
      assert.deepEqual(result, expected);
    });
  });

  describe('when deleteMovie method is called', async () => {
    it('should call the delete MongoLib method', async () => {
      await moviesService.deleteMovie({});
      assert.strictEqual(deleteStub.called, true);
    });

    it('should return the id of deleted movie', async () => {
      const result = await moviesService.deleteMovie({});
      const expected = moviesMock[0].id;
      assert.deepEqual(result, expected);
    });
  });
});
