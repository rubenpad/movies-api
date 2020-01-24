const Joi = require('@hapi/joi')

const { movieIdSchema } = require('./movies')
const { userIdSchema } = require('./users')

const userMovieIdSchema = Joi.string().regex(/^[0-9a-fA-F]{24}$/)

const createUserMovieSchema = {
  userId: userIdSchema.required(),
  movieId: movieIdSchema.required()
}

module.exports = {
  userMovieIdSchema,
  createUserMovieSchema
}
