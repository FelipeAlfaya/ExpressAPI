const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/nodeflcmg');
mongoose.Promise = global.Promise;

module.exports = mongoose;

// , { useMongoClient: true }