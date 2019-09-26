const express   = require('express'),
      app       = express(),
      mongoose  = require('./config/mongoose'),
      session   = require('express-session');

app.set('trust proxy', 1);
app.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: true,
  cookie: { maxAge: 60000 }
}))
app.use(express.json());
app.use(express.static(__dirname + '/public/dist/public'));
app.use(express.urlencoded({extended: true}));
require('./config/routes')(app);

app.listen(6789, () => console.log("listening on port 6789"));
