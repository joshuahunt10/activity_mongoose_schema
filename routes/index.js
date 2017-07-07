const express = require('express');
const router = express.Router();
const Vinyl = require("../models/schema")

router.get('/', function(req, res){
  Vinyl.find()
  .then(function(vinyl){
    res.render('index', {
      vinyl: vinyl
    })
  })
})

router.post('/:id/deletePost', function(req, res){
  Vinyl.remove({ _id: req.params.id})
  .then(function(){
    res.redirect('/')
  })
})

module.exports = router;
