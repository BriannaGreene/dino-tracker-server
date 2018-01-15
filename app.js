var express = require('express');
var path = require('path');
// var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var cookieSession = require('cookie-session')
var keys = require('./config/keys')
var bodyParser = require('body-parser');
const passport = require('passport')
require('./services/passport')
var app = express();
var index = require('./routes/index');
var groups = require('./routes/groups');
var users = require('./routes/users');
var tickets = require('./routes/tickets');
var weather = require('./routes/weather');
const messages = require('./routes/messages')
const notes = require('./routes/notes')

// CORS headers to allow access to API from any origin
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, POST, DELETE, PATCH, PUT");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

// cookies session set up
app.use(cookieSession({
  maxAge: 30 * 24 * 60 * 60 * 1000,
  keys: [keys.cookieKey],
  // keys: [`${process.env.COOKIE_KEY}`],

}))

// initialize passport
app.use(passport.initialize());
app.use(passport.session())



// use authentication routes
require('./routes/authRoutes')(app)



// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', index);
app.use('/groups', groups);
app.use('/users', users);
app.use('/tickets', tickets);
app.use('/weather', weather);
app.use('/messages', messages);
app.use('/notes', notes)

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

app.listen(5000, function(){
  console.log('listening on 5000');
})

module.exports = app;
