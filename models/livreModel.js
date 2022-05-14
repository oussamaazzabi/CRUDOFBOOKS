const mongoose = require('mongoose')

var livreSchema = new mongoose.Schema({
  isbn: {
    type: String
  },
  titre: {
    type: String
  },
  auteur: {
    type: String
  },
  categorie: {
    type: String
  },
});



mongoose.model('Livre',livreSchema)