const express = require("express");
const mustache = require("mustache-express");
const bodyParser = require("body-parser");
const app = express();

const indexRoutes = require("./routes/index");
const addNewRoutes = require("./routes/addNew")
// const gamesRoutes = require("./routes/games");

app.engine('mustache', mustache());
app.set("view engine", 'mustache');
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: false}));
const mongoose = require('mongoose');
mongoose.Promise = require('bluebird');
mongoose.connect('mongodb://localhost:27017/randomColl');



// const vinylSchema = new mongoose.Schema({
//   band: {type: String, required: true},
//   albumTitle: {type: String, required: true},
//   year: {type: Number},
//   label: {type: String},
//   genreTag: [String],
//   properties: [{
//     speed: {type: Number},
//     size: {type: Number},
//     pressing: {type: Number},
//   }]
// })
//
// const Vinyl = mongoose.model('Vinyl', vinylSchema);
//
// const record = new Vinyl()
// record.band = "Touche Amore"
// record.albumTitle = "Stage Four"
// record.year = "2017"
// record.genreTag = "hardcore, punk"
// record.properties.speed = "60"
// record.properties.pressing = "1"
// record.save()
// .then(function(record){
//   console.log('check Mongo!');
// })
// .catch(function(error){
//   console.log('ugh...');
// })

app.use(indexRoutes)
app.use(addNewRoutes)

app.listen(3000, function(){
  console.log('Taking off!');
})
