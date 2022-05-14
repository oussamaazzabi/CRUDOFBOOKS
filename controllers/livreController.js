const expres = require('express')
var router = expres.Router();

router.get('/', (req, res)=> {
  res.render('livre/addOrEdit',{
    viewTitle: "insert Books"
  })
});
router.post('/', (req,res) => {
  console.log(req.body);
})

function inserRecord(req,res){
  var livre = new livre();
  livre.isbn = req.body.isbn;
  livre.titre = req.body.titre;
  livre.titre = req.body.auteur;
  livre.categorie = req.body.categorie;
  livre.save((err,doc)=>{
    if(!err)
    res.redirect('livre/list');
    else {
      console.log('error'+err)
    }
  })
   
}
router.get('/list', (req, res)=> {
  res.json('from list')
});

module.exports = router;