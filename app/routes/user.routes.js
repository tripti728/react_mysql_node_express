module.exports = (app) => {
  const users = require('../controllers/user.controller.js')

  var router = require('express').Router()

  // Create a new Tutorial
  router.post('/', users.createUser)
  router.post('/findUser', users.findUser)

  router.get('/', users.findAllUsers)

  //Admin Integrate

  router.get('/findNotApprUsers', users.findNotApprUsers)
  router.post('/updateUsersIsAppr', users.updateUsersIsAppr)
  router.post('/deleteRejectedUser', users.deleteRejectedUser)
  router.get('/newsreporter', users.getReporter)

  app.use('/api/users', router)
}
