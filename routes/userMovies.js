const express = require('express')
const passport = require('passport')

const UserMoviesService = require('../services/userMovies')
const validationHandler = require('../utils/middleware/validationHandler')
const scopesValidationHandler = require('../utils/middleware/scopesValidationHandler')

const { userMovieIdSchema } = require('../utils/schemas/userMovies')
const { userIdSchema } = require('../utils/schemas/users')
const { createUserMovieSchema } = require('../utils/schemas/userMovies')

require('../utils/auth/strategies/jwt')

function userMoviesApi(app) {
  const router = express.Router()
  app.use('/user-movies', router)

  const userMoviesService = new UserMoviesService()

  router.get(
    '/',
    passport.authenticate('jwt', { session: false }),
    scopesValidationHandler(['read:user-movies']),
    validationHandler({ userId: userIdSchema }, 'query'),
    async (req, res, next) => {
      const { userId } = req.query

      try {
        let userMovies = await userMoviesService.getUserMovies({ userId })
        userMovies = userMovies.map((userMovie) => {
          userMovie.id = userMovie._id
          delete userMovie._id
          return userMovie
        })

        res.status(200).json({
          data: userMovies,
          message: 'user movies listed'
        })
      } catch (error) {
        next(error)
      }
    }
  )

  router.post(
    '/',
    passport.authenticate('jwt', { session: false }),
    scopesValidationHandler(['create:user-movies']),
    validationHandler(createUserMovieSchema),
    async (req, res, next) => {
      const { body: userMovie } = req
      try {
        const createdUserMovieId = await userMoviesService.createUserMovie({
          userMovie
        })

        res.status(201).json({
          data: createdUserMovieId,
          message: 'user movie created'
        })
      } catch (error) {
        next(error)
      }
    }
  )

  router.delete(
    '/:userMovieId',
    passport.authenticate('jwt', { session: false }),
    scopesValidationHandler(['delete:user-movies']),
    validationHandler({ userMovieId: userMovieIdSchema }, 'params'),
    async (req, res, next) => {
      const { userMovieId } = req.params

      try {
        const deletedUserMovieId = await userMoviesService.deleteUserMovie({
          userMovieId
        })
        res.status(200).json({
          data: deletedUserMovieId,
          message: 'user movie deleted'
        })
      } catch (error) {
        next(error)
      }
    }
  )
}

module.exports = userMoviesApi
