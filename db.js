const mongoose = require('mongoose');

const { mongoclient } = require('mongodb').mongoclient;

mongoclient.connect('mongodb://127.0.0.1:27017', { useNewUrlParser: true }, (err) => {
    if (!err) {
        console.log('Mongodb Connection succeed');
    }
    else {
        console.log('Error in mongodb connection' + json.stringyfy(err));
    }
})

module.exports = mongoose;