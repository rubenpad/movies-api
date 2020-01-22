const express = require('express');
const passport = require('passport');
const boom = require('@hapi/boom');
const jwt = require('jsonwebtoken');

const ApiKeysService = require('../services/apiKeys');
const UsersService = require('../services/users');
const { createUserSchema } = require('../utils/schemas/users');
const validationHandler = require('../utils/middleware/validationHandler');
const { config } = require('../config');

const ONE_DAY_IN_SECONDS = 86400;
const ONE_MONTH_IN_SECONDS = 2592000;

// Basic Strategy
require('../utils/auth/strategies/basic');

function authApi(app) {
  const router = express.Router();
  app.use('/auth', router);

  const apiKeysService = new ApiKeysService();
  const usersService = new UsersService();

  router.post('/sign-in', async (req, res, next) => {
    const { apiKeyToken, rememberMe } = req.body;

    if (!apiKeyToken) next(boom.unauthorized('apiKeyToken is required'));

    passport.authenticate('basic', (error, user) => {
      try {
        if (error || !user) next(boom.unauthorized());
        req.login(user, { session: false }, async (error) => {
          if (error) next(error);

          const apiKey = await apiKeysService.getApiKey({ token: apiKeyToken });
          if (!apiKey) next(boom.unauthorized());

          const { _id: id, name, email } = user;

          const payload = {
            sub: id,
            name,
            email,
            scopes: apiKey.scopes
          };

          const token = jwt.sign(payload, config.authJwtSecret, {
            expiresIn: rememberMe ? ONE_MONTH_IN_SECONDS : ONE_DAY_IN_SECONDS
          });

          return res.status(200).json({ token, user: { id, name, email } });
        });
      } catch (error) {
        next(error);
      }
    })(req, res, next);
  });

  router.post(
    '/sign-up',
    validationHandler(createUserSchema),
    async (req, res, next) => {
      const { body: user } = req;
      const { email } = user;
      try {
        const userExists = await usersService.getUser({ email });
        if (userExists) {
          res.status(409).json({
            statusCode: 409,
            error: 'Conflict',
            message: 'The email is already in use'
          });
        } else {
          const createdUserId = await usersService.createUser({ user });
          res.status(201).json({
            data: createdUserId,
            message: 'user created'
          });
        }
      } catch (error) {
        next(error);
      }
    }
  );
}

module.exports = authApi;
