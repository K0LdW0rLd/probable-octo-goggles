require('./api/data/db.js');
const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');

const routes = require('./api/routes');

app.set('port', 3000);

app.use(function(req, res, next){
    console.log(req.method, req.url);
    next();
});

app.use(express.static(path.join(__dirname, 'public')));

app.use(bodyParser.urlencoded({ extended: false }));

app.use('/api', routes);

const server = app.listen(app.get('port'), function() {
    const port = server.address().port;
    console.log('Magic is happening on port ' + port);
});
