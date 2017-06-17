let express = require('express');
let app = express();
let parseFn = require('./lib/parseFn');
let port = 9898;

let db = {
  solution: []
};

app.get('/', function(req, res) {
  res.send('Welcome to HackerYank');
});

app.post('/solution', function(req, res) {
  parseFn.parseJsonFn(req, res, function() {
    db.solution.push(req.body);
    console.log(db.solution);
    res.end();
  });
});

app.listen(port, function() {
  console.log('Listening on port ' + port);
})
