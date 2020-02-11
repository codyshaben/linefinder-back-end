const express = require('express');
const cors = require('cors')
const logger = require('morgan');
const bodyParser = require('body-parser');
// const createError = require('http-errors');
const path = require('path');
const cookieParser = require('cookie-parser');
const app = express();

const users = require('./routes/users')
const trails = require('./routes/trails')


app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(cors())

app.use('/users', users)
app.use('/trails', trails)



// // catch 404 and forward to error handler
// app.use(function(req, res, next) {
//   next(createError(404));
// });

// // error handler
// app.use(function(err, req, res, next) {
//   // set locals, only providing error in development
//   res.locals.message = err.message;
//   res.locals.error = req.app.get('env') === 'development' ? err : {};

//   // render the error page
//   res.status(err.status || 500);
//   res.render('error');
// });

// const PORT = process.env.PORT || 9000
// app.listen(PORT, () => {
//     console.log(`Listening on port ${PORT}`)
// })


module.exports = app;
