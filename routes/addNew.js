const express = require('express');
const router = express.Router();
const Vinyl = require("../models/schema")

router.get('/addNew', function(req,res){
  res.render('addNew')
})

router.post('/addNew', function(req, res){
const record = new Vinyl()
  record.band = req.body.band
  record.albumTitle = req.body.albumTitle
  record.albumCover = req.body.albumCover
  record.year = req.body.year
  record.label = req.body.label
  record.genreTag = req.body.genreTag
  record.properties.push({speed: req.body.speed}, {size: req.body.size}, {pressing: req.body.pressing})
  record.save()
  .then(function(record){
    res.render('index')
  })
  .catch(function(error){
    console.log('ugh...');
  })
})

router.get('/:id/edit', function(req,res){
  Vinyl.findOne({_id: req.params.id})
  .then(function(vinyl){
    console.log(vinyl.properties);
    res.render('edit', {
      vinyl: vinyl,
      prop: vinyl.properties
    })
  })
})


module.exports = router;
