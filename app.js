const express = require('express');
const cors = require('cors');
const logger = require('morgan');
const bodyParser = require('body-parser');
const path = require('path');
const cookieParser = require('cookie-parser');
const app = express();

const users = require('./routes/users');
const trails = require('./routes/trails');
const auth = require('./routes/auth');
const userTrails = require('./routes/user_trails');
const authMiddleware = require('./routes/middleware');
const twilio = require('./routes/twilio');

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser(process.env.COOKIE_SECRET));
app.use(express.static(path.join(__dirname, 'public')));
app.use(cors({
  credentials: true,
  origin: 'https://linefinder-90ef0.firebaseapp.com',
}));

app.use(authMiddleware.checkTokenSetUser);
app.use('/users', authMiddleware.isLoggedIn, users);
app.use('/trails', trails);
app.use('/user_trails', authMiddleware.isLoggedIn, userTrails);
app.use('/auth', auth);
app.use('/twilio', twilio);

// // catch 404 and forward to error handler
app.use(function(req, res, next) {
  const err = new Error('Not Found');
  err.status = 404
  next(err)
});

// // error handler
app.use(function(err, req, res, next) {
  res.status(err.status || 500);

  res.json({
      message: err.message,
      error: req.app.get('env') === 'development' ? err : {}
  });
});

const PORT = process.env.PORT || 9000
app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`)
});

module.exports = app;
