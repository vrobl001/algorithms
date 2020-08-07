// Require Modules
const express = require('express');
const logger = require('morgan');
const indexRoutes = require('./routes/index');
const rule1Routes = require('./routes/rule1');
const rule2Routes = require('./routes/rule2');
const rule3Routes = require('./routes/rule3');
const rule4Routes = require('./routes/rule4');

const port = 3000;

// Set up express app
const app = express();

// Configure express app app.set()
app.set('view engine', 'ejs');

// Mount middleware app.use()
app.use(logger('dev'));
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));

// Mount Routes app.use()
app.use('/', indexRoutes);
app.use('/rule1', rule1Routes);
app.use('/rule2', rule2Routes);
app.use('/rule3', rule3Routes);
app.use('/rule4', rule4Routes);

// Tell app to listen
app.listen(port, () => {
  console.log(`app is listening on port ${port}`);
});
