var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var stormpath = require('express-stormpath');
var routes = require("./app/routes");
var db = require('./config/db');
var security = require('./config/security');
var app = express();
var morgan = require(morgan);
app.use(morgan);
app.use(stormpath.init(app, {
   apiKeyFile: './config/stormpath_apikey.properties',
   application: "YOUR SP APPLICATION URL",
   secretKey: security.stormpath_secret_key
}));
var port = 8000;
mongoose.connect(db.url);
<p>app.use(bodyParser.urlencoded({ extended: true }));</p>
<p>routes.addAPIRouter(app, mongoose, stormpath);
app.use(function(req, res, next){
   res.status(404);
   res.json({ error: 'Invalid URL' });
});
app.listen(port);
console.log('Magic happens on port ' + port);
<p>exports = module.exports = app;