var express = require('express');
var Species = require('../models/species');
var Datastore = require('nedb');

var router = express.Router();
var db = new Datastore({
  filename: 'store/playerSpecies.db',
  autoload: true
});


/* GET home page. */
router.get('/', function(req, res) {
  db.find({ }, function(error, docs) {
    if(error) {
      res.status(500).send(`Could not retrieve data. ${error}`)
    } else {
      res.send(docs);
    }
  })
});

router.post('/', function(req, res) {
  console.log(132);
  console.log(req.body);

  var newSpecies = { _id: req.body.id, name: req.body.name };
  db.insert(newSpecies, function(error) {
    if(error) {
      res.status(500).send(`Could not create new data from ${req.body}. ${error}`)
    } else {
      res.send('post ' + req.params + req.body);
    }
  });
});

router.get('/:playerId', function(req, res) {
  db.find({ _id: req.params.playerId }, function(error, docs) {
    if(error) {
      res.status(500).send(`Could not retrieve data from ${req.params.playerId}. ${error}`)
    } else {
      res.send('get ' + req.params.playerId + docs);
    }
  })
});

module.exports = router;
