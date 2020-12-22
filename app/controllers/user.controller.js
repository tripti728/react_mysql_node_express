const db = require('../models')
const Users = db.users
const Op = db.Sequelize.Op
let nodemailer = require('nodemailer')
const bcrypt = require('bcrypt')
// Create and Save a new User
const salt = bcrypt.genSaltSync(10)
exports.createUser = (req, res) => {
  // Validate request
  console.log(req.body)
  if (!req.body.username) {
    res.status(400).send({
      message: 'Content can not be empty!',
    })
    return
  }
  let hash = bcrypt.hashSync(req.body.password, salt)
  // Create a User
  const user = {
    Uname: req.body.username,
    EmailId: req.body.email,
    AadharId: req.body.aadhar,
    Locality: req.body.city,
    MobNo: req.body.mobile,
    Password: hash,
    Role: req.body.role,
    isApproved: req.body.permission,
  }
  console.log(user)
  // Save User in the database
  Users.create(user)
    .then((data) => {
      res.send(data)
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || 'Some error occurred while retrieving Users.',
      })
    })
}

exports.findAllUsers = (req, res) => {
  Users.findAll()
    .then((data) => {
      res.send(data)
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || 'Some error occurred while retrieving Users.',
      })
    })
}

exports.findUser = async function (req, res) {
  let data = req.body
  var condition = {
    where: {
      EmailId: data.email,
    },
  }
  let user = await Users.findOne(condition)
    .then((data) => {
      return data
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || 'Some error occurred while retrieving Users.',
      })
    })

  let setUser = {
    id: user.Uid,
    city: user.Locality,
    email: user.EmailId,
    permission: user.isApproved,
    role: user.Role,
  }

  if (await bcrypt.compareSync(data.password, user.Password)) {
    if (user.Role == 'admin') {
      res.send({ msg: 'admin login successfull', user: setUser })
    } else {
      if (user.isApproved === true) {
        res.send({ msg: 'reporter login successful', user: setUser })
      } else {
        res.send({ per: 'permission denied' })
      }
    }
  } else {
    res.send({ msg: 'wrong password' })
  }
}

//Admin Integration

exports.findNotApprUsers = async function (req, res) {
  var condition = {
    where: {
      isApproved: false,
    },
  }
  let users = await Users.findAll(condition)
    .then((data) => {
      return data
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || 'Some error occurred while retrieving Users.',
      })
    })
  if (users === null) {
    res.send({ msg: 'no user found' })
  } else {
    res.send({ users: users })
  }
}

//update user's isApproved field

exports.updateUsersIsAppr = async function (req, res) {
  let transporter = nodemailer.createTransport({
    host: '172.27.172.202',
    secure: false,
    port: 25,
    tls: {
      ciphers: 'SSLv3',
      rejectUnauthorized: false,
    },
    auth: {
      user: 'dadaramj@evolvingsols.com',
      pass: 'Tiger@321',
    },
  })

  let mailOptions = {
    from: 'dadaramj@evolvingsols.com',
    to: 'priyankani@cybage.com',
    subject: 'Regarding Public News Board approval',
    text: 'Nodemailer test email',
    html:
      '<b>Hello,</b><div>Thank you for showing interest in our news application. We inform you that your application is approved. We are inviting you to our News Board Application</div>',
  }

  const email = req.body.email
  const id = req.body.uid
  await Users.update(
    {
      isApproved: true,
    },
    {
      where: { Uid: id },
      returning: true, // needed for affectedRows to be populated
      plain: true, // makes sure that the returned instances are just plain objects
    }
  )
    .then((data) => {
      var mailStatus = mailFunctionality(transporter, mailOptions)

      res.send(data)
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || 'Some error occurred while updating isApproved field.',
      })
    })
}

//delete rejected user

exports.deleteRejectedUser = async function (req, res) {
  let transporter = nodemailer.createTransport({
    host: '172.27.172.202',
    secure: false,
    port: 25,
    tls: {
      ciphers: 'SSLv3',
      rejectUnauthorized: false,
    },
    auth: {
      user: 'dadaramj@evolvingsols.com',
      pass: 'Tiger@321',
    },
  })

  let mailOptions = {
    from: 'dadaramj@evolvingsols.com',
    to: 'priyankani@cybage.com',
    subject: 'Regarding Public News Board approval',
    text: 'Nodemailer test email',
    html:
      '<b>Hello,</b><div>Thank you for showing interest in our news application. We received a large number of requests, and after carefully reviewing all of them, unfortunately, we have to inform you that this time we won’t be able to invite you to our News Board Application</div>',
  }

  const id = req.body.id

  await Users.destroy({
    where: { Uid: id },
  })
    .then((data) => {
      var mailStatusRejected = mailFunctionality(transporter, mailOptions)
      res.send('deleted')
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || 'Some error occurred while updating isApproved field.',
      })
    })
}

//mail functionality

function mailFunctionality(transporter, mailOptions) {
  transporter.sendMail(mailOptions, (error, success) => {
    var status
    if (error) {
      status = 'Error occured'
      return status
    }
    var status = 'Message Sent'
    return status
  })
}

exports.getReporter = async function (req, res) {
  const id = req.query.id

  let user = await Users.findOne({ where: { Uid: id } })
    .then((data) => {
      res.send(data)
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || 'Some error occurred while retrieving Users.',
      })
    })
}
