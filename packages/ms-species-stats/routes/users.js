var express = require('express');
var router = express.Router();

var Datastore = require('nedb');

var db = new Datastore({
  filename: 'store/test.db',
  autoload: true
});

var testDoc = {
  hello: 'world'
  , n: 5
  , today: new Date()
  , nedbIsAwesome: true
  , notthere: null
  , notToBeSaved: undefined  // Will not be saved
  , fruits: ['apple', 'orange', 'pear']
  , infos: { name: 'nedb' }
};

db.insert(testDoc);

/* GET home page. */
router.get('/', function (req, res, next) {
  db.find({ hello: 'world' }, function(err, docs) {
    res.send(docs);
  });
});

module.exports = router;
