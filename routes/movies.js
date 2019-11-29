const express = require('express');
const { moviesMock } = require('../utils/mocks/movies');

function moviesApi(app) {
  const router = express.Router();
  app.use('/api/movies', router);

  app.get('/', async (req, res, next) => {
    try {
      const movies = await Promise.resolve(moviesMock);
      res.status(200).json({
        data: movies,
        message: 'Movies listed'
      });
    } catch (error) {
      next(error);
    }
  });

  app.get('/movieId', async (req, res, next) => {
    try {
      const movie = await Promise.resolve(moviesMock[0]);
      res.status(200).json({
        data: movie,
        message: 'Movie retrieved'
      });
    } catch (error) {
      next(error);
    }
  });

  app.post('/', async (req, res, next) => {
    try {
      const createdMovie = await Promise.resolve(moviesMock[0].id);
      res.status(201).json({
        data: createdMovie,
        message: 'Movie created'
      });
    } catch (error) {
      next(error);
    }
  });

  app.put('/movieId', async (req, res, next) => {
    try {
      const updatedMovie = await Promise.resolve(moviesMock[0]);
      res.status(200).json({
        data: updatedMovie,
        message: 'Movie updated'
      });
    } catch (error) {
      next(error);
    }
  });

  app.delete('/movieId', async (req, res, next) => {
    try {
      const deleteMovie = await Promise.resolve(moviesMock[0]);
      res.status(200).json({
        data: deleteMovie,
        message: 'Movie deleted'
      });
    } catch (error) {
      next(error);
    }
  });
}

module.exports = moviesApi;
