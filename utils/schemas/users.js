const Joi = require('@hapi/joi')

const userIdSchema = Joi.string().regex(/^[0-9a-fA-F]{24}$/)

const createUserSchema = {
  name: Joi.string()
    .max(100)
    .required(),
  email: Joi.string()
    .email()
    .required(),
  password: Joi.string().required(),
  isAdmin: Joi.boolean
}

module.exports = {
  userIdSchema,
  createUserSchema
}
