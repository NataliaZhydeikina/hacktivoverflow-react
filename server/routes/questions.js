let routes = require('express').Router(),
    controlQ = require('../controllers/questionController'),
    controlA = require('../controllers/answerController'),
    auth = require('../helpers/authHelp')
/**
 * @api {get} / Get all questions
 * @apiGroup Hacktivoverflow
 * @apiDescription This request is using to get all questions.
 */
//get all
routes.get('/',controlQ.getQuestion)
/**
 * @api {get} /:id Get one question
 * @apiGroup Hacktivoverflow
 * @apiDescription This request is using to get one question.
 */
//get one
routes.get('/:id',controlQ.getOneQuestion)
/**
 * @api {post} / Post new question
 * @apiGroup Hacktivoverflow
 * @apiDescription This request is using to post new question. Before save information about question, request is verified.
 */
//post new question
routes.post('/',auth.verify,controlQ.postQuestion)

//delete question
routes.delete('/:id',auth.verify,controlQ.deleteQuestion)

//post new answer
routes.post('/answers/:id',auth.verify,controlA.postAnswer)

//upvote
routes.put('/answers/upvotes/:id', auth.verify,controlA.upvoteAnswer)
routes.put('/upvotes/:id', auth.verify,controlQ.upvoteQuestion)

//downvote
routes.put('/answers/downvotes/:id',auth.verify, controlA.downvoteAnswer)
routes.put('/downvotes/:id',auth.verify, controlQ.downvoteQuestion)

//edit
routes.put('/:id',auth.verify,controlQ.editQuestion)


module.exports = routes;