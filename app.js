var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const cors = require('cors')

const os = require('os');
const hostname = os.hostname();

console.log('Hostname:', hostname);

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var equiposRouter = require('./routes/equipos');
var ejemploRouter = require('./routes/ejemplo');
var padronRouter = require('./routes/padron');




var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(cors({
  origin: (origin, callback) => {
      const ACCEPTED_ORIGINS = [
          'http://localhost:8081',
          //'http://localhost:1234',
          'http://movies.com',
          'http://mide.dev'
      ]
      if(ACCEPTED_ORIGINS.includes(origin)){
          return callback(null,true)
      }
      if(!origin){
          return callback(null,true)
      }
      return callback(new Error('Not allowed by CORS - Revisar lista'))
  } 

}))
app.disable('x-powered-by')

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/equipos', equiposRouter);
app.use('/ejemplo', ejemploRouter);
app.use('/padron', padronRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
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

module.exports = app;
