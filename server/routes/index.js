let routes = require('express').Router(),
    user = require('../controllers/userController')
/**
 * @api {post} /login Login for users
 * @apiGroup Hacktivoverflow
 * @apiDescription This request is using by clint to sign in.
 */
routes.post('/login', user.login)


module.exports = routes;