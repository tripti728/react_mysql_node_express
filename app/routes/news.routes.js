module.exports = app => {
    const news = require("../controllers/news.controller.js");
  
    var router = require("express").Router();
  
    // Create a new News
    router.post("/", news.createNews);
  
    
    //router.get("/", news.findAllNews);



    app.use('/api/news', router);
};