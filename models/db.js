const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost:27017/livreData', {useNewUrlParser:true}, (err)=>{
  if(err) {console.log('mongoDB connection succeded')}
  else{console.log('error in DB connection: '+err)}
} )