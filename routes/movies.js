const express = require('express')
const passport = require('passport')

const MoviesService = require('../services/movies')
const validationHandler = require('../utils/middleware/validationHandler.js')
const scopesValidationHandler = require('../utils/middleware/scopesValidationHandler')
const cacheResponse = require('../utils/cacheResponse')

const { FIVE_MIN_TO_SEC, SIXTY_MIN_TO_SEC } = require('../utils/time')
const {
  movieIdSchema,
  createMovieSchema,
  updateMovieSchema
} = require('../utils/schemas/movies')

require('../utils/auth/strategies/jwt')

function moviesApi(app) {
  const router = express.Router()
  app.use('/movies', router)

  const moviesService = new MoviesService()

  router.get(
    '/',
    passport.authenticate('jwt', { session: false }),
    scopesValidationHandler(['read:movies']),
    async (req, res, next) => {
      cacheResponse(res, FIVE_MIN_TO_SEC)
      const { tags } = req.query

      try {
        let movies = await moviesService.getMovies({ tags })
        movies = movies.map((movie) => {
          movie.id = movie._id
          delete movie._id

          return movie
        })

        res.status(200).json({
          data: movies,
          message: 'Movies listed'
        })
      } catch (error) {
        next(error)
      }
    }
  )

  router.get(
    '/:movieId',
    passport.authenticate('jwt', { session: false }),
    scopesValidationHandler(['read:movies']),
    validationHandler({ movieId: movieIdSchema }, 'params'),
    async (req, res, next) => {
      cacheResponse(res, SIXTY_MIN_TO_SEC)
      const { movieId } = req.params

      try {
        const movie = await moviesService.getMovie({ movieId })
        movie.id = movie._id
        delete movie._id
        res.status(200).json({
          data: movie,
          message: 'Movie retrieved'
        })
      } catch (error) {
        next(error)
      }
    }
  )

  router.post(
    '/',
    passport.authenticate('jwt', { session: false }),
    scopesValidationHandler(['create:movies']),
    validationHandler(createMovieSchema),
    async (req, res, next) => {
      const { body: movie } = req

      try {
        const createdMovieId = await moviesService.createMovie({ movie })
        res.status(201).json({
          data: createdMovieId,
          message: 'Movie created'
        })
      } catch (error) {
        next(error)
      }
    }
  )

  router.put(
    '/:movieId',
    passport.authenticate('jwt', { session: false }),
    scopesValidationHandler(['update:movies']),
    validationHandler({ movieId: movieIdSchema }, 'params'),
    validationHandler(updateMovieSchema),
    async (req, res, next) => {
      const { movieId } = req.params
      const { body: movie } = req

      try {
        const updatedMovieId = await moviesService.updateMovie({
          movieId,
          movie
        })
        res.status(200).json({
          data: updatedMovieId,
          message: 'Movie updated'
        })
      } catch (error) {
        next(error)
      }
    }
  )

  router.delete(
    '/:movieId',
    passport.authenticate('jwt', { session: false }),
    scopesValidationHandler(['delete:movies']),
    validationHandler({ movieId: movieIdSchema }, 'params'),
    async (req, res, next) => {
      const { movieId } = req.params

      try {
        const deleteMovieId = await moviesService.deleteMovie({ movieId })
        res.status(200).json({
          data: deleteMovieId,
          message: 'Movie deleted'
        })
      } catch (error) {
        next(error)
      }
    }
  )
}

module.exports = moviesApi
