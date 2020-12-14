
const db = require("../models");
const Users = db.users;
const Op = db.Sequelize.Op;

// Create and Save a new User
exports.createUser = (req, res) => {
   // Validate request
   if (!req.body.Uname) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
    return;
  }

  // Create a User
  const user = {
    Uname: req.body.Uname,
    EmailId: req.body.EmailId,
    AadharId: req.body.AadharId,
    Locality: req.body.Locality,
    MobNo: req.body.MobNo,
    Password: req.body.Password,
    ConfirmPassword: req.body.ConfirmPassword,
    Role: req.body.Role,
    isApproved: req.body.isApproved
  };

  // Save User in the database
  Users.create(user)
    .then(data => {
        console.log(data);
        
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the User."
      });
    });
};

exports.findAllUsers = (req, res) => {
    Users.findAll()
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving Users."
        });
      });
  };


  //Find users who has not approved
  
  exports.findNotApprUsers = (req, res) => {
    var condition =
    {
      where:
      {
        isApproved:false
    
      }    
    }
    Users.findAll(condition)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving Users."
        });
      });
  };


  //Update isApproved field to true for approved users
  exports.updateUsersIsAppr = (req, res) => {
    const postData = req.body.isApproved;
    const UId = req.params.id;
    console.log(postData);
    console.log(UId);
  const [numberOfAffectedRows, affectedRows] = Users.update({ 
    isApproved: postData
  }, {
    where: {Uid: UId},
    returning: true, // needed for affectedRows to be populated
    plain: true // makes sure that the returned instances are just plain objects
  })
  .then(data => {
    res.send(data);
  })
  .catch(err => {
    res.status(500).send({
      message:
        err.message || "Some error occurred while updating isApproved field."
    });
  });
};


//Remove Rejected user from database

exports.deleteRejectedUser = (req, res) => {
  const id = req.params.id;

  Users.destroy({
    where: { Uid: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Rejected User was deleted successfully!"
        });
      } else {
        res.send({
          message: `Cannot delete Rejected User with id=${id}. Maybe User was not found!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete Rejected User with id=" + id
      });
    });
};
  
