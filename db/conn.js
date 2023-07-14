const mongoose = require('mongoose');

const DB = 'Your MongoDB URl';

mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log('connection start'))
  .catch((error) => console.log(error.message));
