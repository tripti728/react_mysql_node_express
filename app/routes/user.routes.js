module.exports = app => {
    const users = require("../controllers/user.controller.js");
  
    var router = require("express").Router();
  
    // Create a new Tutorial
    router.post("/", users.createUser);
  
    // Retrieve all Tutorials
   // router.get("/", users.findAllUsers);
    router.get("/", users.findNotApprUsers);
    router.put("/:id", users.updateUsersIsAppr);
    router.delete("/:id", users.deleteRejectedUser);
    app.use('/api/users', router);
};