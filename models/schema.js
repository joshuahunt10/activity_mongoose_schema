const mongoose = require('mongoose');


const vinylSchema = new mongoose.Schema({
  band: {type: String, required: true},
  albumTitle: {type: String, required: true},
  albumCover: {type: String},
  year: {type: Number},
  label: {type: String},
  genreTag: [String],
  properties: [{
    speed: {type: Number},
    size: {type: Number},
    pressing: {type: Number},
  }]
})

const Vinyl = mongoose.model('Vinyl', vinylSchema);

module.exports = Vinyl;
