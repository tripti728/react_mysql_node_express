module.exports = (app) => {
  const news = require('../controllers/news.controller.js')

  var router = require('express').Router()

  // Create a new News
  router.post('/', news.createNews)
  router.get('/bytitle/', news.findAllbyTitle)
  router.get('/bylocality/', news.findAllbyLocality)
  router.put('/countclick/:id', news.update)
  // Retrieve all News with issues by id
  router.get('/onenews', news.findNews)
  router.get('/', news.findAllNews)
  router.get('/findAllNewsAdmin', news.findAllNewsAdmin)
  //    router.get("/", news.findAllNewsWithIssuesById);
  router.get('/topten', news.findTopNews)
  router.get('/latest', news.findLatestNews)
  router.get('/rnews', news.myNews)

  //Admin integration
  router.get('/findAllNewsWithIssuesById/:id', news.findAllNewsWithIssuesById)
  router.get('/findMostReadNews', news.findMostReadNews)
  router.delete('/:id', news.deleteNewsWithIssues)

  app.use('/api/news', router)
}
