require('dotenv').config();
const envconfig = require('./src/config/env.config');
const express =  require('express');
const debug = require('debug')('lasolidaria-api:server');
const morgan = require('morgan');
const cors = require('cors');
const app = express();
app.use(express.json());
app.use(morgan('dev'));
const port = envconfig.PORT;
const database = require('./src/config/db.config');
const mainRouter = require('./src/routes/main.router')
const { errorHandler } = require('./src/middlewares/error.middleware');

database.connect();

app.use(express.json());
app.use(morgan('dev'));
app.use(cors());

app.use('/api/v1', mainRouter);

app.use(errorHandler);

app.listen(port, () => {
    debug(`Server is running on port ${port}`)
  })