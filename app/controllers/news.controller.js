const db = require('../models')
const { QueryTypes } = require('sequelize')
//const { Sequelize } = require('sequelize');
const getNews = db.news

const { Sequelize } = require('sequelize')
const sequelize = db.sequelize

const Issues = db.issue
const Op = db.Sequelize.Op

// Create and Save a new News
exports.createNews = (req, res) => {
  // Validate request
  if (!req.body.NewsTitle) {
    res.status(400).send({
      message: 'Title can not be empty!',
    })
    return
  }

  // Create a News
  const news = {
    NewsTitle: req.body.NewsTitle,
    News: req.body.News,
    Locality: req.body.City,
    Image: req.body.Image,
    Count: req.body.Count || 0,
    Rid: req.body.Rid,
  }

  const file = req.files.file
  file.mv(`C:/Users/Administrator/Desktop/final_project/Frontend/public/images/${file.name}`, (err) => {
    if (err) {
      console.log(err)
    }
  })

  // Save News in the database
  getNews
    .create(news)
    .then((data) => {
      res.send(data)
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || 'Some error occurred while creating the News.',
      })
    })
}

//Find all news
exports.findAllNews = (req, res) => {
  getNews
    .findAll()
    .then((data) => {
      res.send(data)
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || 'Some error occurred while retrieving News.',
      })
    })
}

//Admin integrated findall

exports.findAllNewsAdmin = async function (req, res) {
  let allNews = await getNews
    .findAll()
    .then((data) => {
      return data
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || 'Some error occurred while retrieving News.',
      })
    })
  if (allNews === null) {
    res.send({ msg: 'no news found' })
  } else {
    res.send({ news: allNews })
  }
}

exports.findAllbyTitle = (req, res) => {
  const NewsTitle = req.query.title

  var condition = NewsTitle
    ? { NewsTitle: { [Op.like]: `%${NewsTitle}%` } }
    : null
  getNews
    .findAll({ where: condition })
    .then((data) => {
      res.send(data)
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || 'Some error occurred while retrieving News.',
      })
    })
}

exports.findAllbyLocality = (req, res) => {
  const Locality = req.query.locality
  var condition = Locality ? { Locality: { [Op.like]: `%${Locality}%` } } : null
  getNews
    .findAll({ where: condition })
    .then((data) => {
      res.send(data)
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || 'Some error occurred while retrieving News.',
      })
    })
}

exports.findAllNewsWithIssues = (req, res) => {
  getNews
    .findAll({ include: ['issues'] })
    .then((news) => {
      res.send(news)
    })
    .catch((err) => {
      console.log('Error while find news : ', err)
    })
}

exports.update = (req, res) => {
  const id = req.params.id

  getNews
    .update(req.body, {
      where: { id: id },
    })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: 'Count was updated successfully.',
        })
      } else {
        res.send({
          message: `Cannot update Count with id=${id}. Maybe News was not found or req.body is empty!`,
        })
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: 'Error updating Tutorial with id=' + id,
      })
    })
}

exports.findNews = (req, res) => {
  let id = req.query.id

  getNews
    .findOne({ where: { id: id }, include: [db.users] })
    .then((news) => {
      res.send(news)
    })
    .catch((err) => {
      console.log('Error while find news : ', err)
    })
}

exports.findTopNews = (req, res) => {
  getNews
    .findAll({ limit: 5, order: [['Count', 'DESC']] })
    .then((news) => {
      res.send(news)
    })
    .catch((err) => {
      console.log('Error while find news : ', err)
    })
}

exports.findLatestNews = (req, res) => {
  getNews
    .findAll({ limit: 10, order: [['createdAt', 'DESC']] })
    .then((news) => {
      res.send(news)
    })
    .catch((err) => {
      console.log('Error while find news : ', err)
    })
}

exports.myNews = (req, res) => {
  let id = req.query.id

  getNews
    .findAll({ where: { Rid: id } })
    .then((news) => {
      res.send(news)
    })
    .catch((err) => {
      console.log('Error while find news : ', err)
    })
}

//Admin Integrate
//Find Most Read news

exports.findMostReadNews = async function (req, res) {
  let mostReadNewsData = await sequelize
    .query('SELECT * FROM news ORDER BY Count DESC LIMIT 3', {
      type: QueryTypes.SELECT,
    })
    .then((data) => {
      return data
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || 'Some error occurred while retrieving News.',
      })
    })
  if (mostReadNewsData === null) {
    res.send({ msg: 'no most read news found' })
  } else {
    res.send({ news: mostReadNewsData })
  }
}

//FindNewsWithIssuesById

exports.findAllNewsWithIssuesById = async function (req, res) {
  const id = req.params.id

  let allNewsWithIssuesById = await getNews
    .findByPk(id, { include: ['issues'] })
    .then((data) => {
      return data
    })
    .catch((err) => {
      console.log('Error while find news : ', err)
    })
  if (allNewsWithIssuesById === null) {
    res.send({ msg: 'no News With Issues By Id found' })
  } else {
    res.send({ news: allNewsWithIssuesById })
  }
}

//DeleteNewsWithIssueById

exports.deleteNewsWithIssues = async function (req, res) {
  const id = req.params.id

  await getNews
    .destroy({
      where: { id: id },
    })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: 'News was deleted successfully!',
        })
      } else {
        res.send({
          message: `Cannot delete News with id=${id}. Maybe News was not found!`,
        })
      }
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || 'Some error occurred while deleting news field.',
      })
    })
}
