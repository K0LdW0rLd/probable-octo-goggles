const dbconn = require('../data/dbconnection');
const ObjectId = require('mongodb').ObjectId;
const hotelData = require('../data/hotel-data.json');

module.exports.hotelsGetAll = function(req, res) {

    let db = dbconn.get();
    let collection = db.collection('hotels');

    let offset = 0;
    let count = 5;

    if (req.query && req.query.offset) {
        offset = parseInt(req.query.offset, 10);
    }

    if (req.query && req.query.count) {
        count = parseInt(req.query.count, 10);
    }

    collection
        .find()
        .skip(offset)
        .limit(count)
        .toArray(function(err, docs) {
            console.log('Found hotels', docs);
            res
                .status(200)
                .json(docs);        
        });
    };

module.exports.hotelsGetOne = function(req, res) {
    let db = dbconn.get();
    let collection = db.collection('hotels');

    const hotelId = req.params.hotelId;
    console.log('GET hotelId', hotelId);

    collection
        .findOne({
            _id : ObjectId(hotelId)
        }, function(err, doc) {
            res
                .status(200)
                .json( doc );
        })
};

module.exports.hotelsAddOne = function(req, res) {
    console.log('POST new hotel');
    console.log(req.body);
    res
        .status(200)
        .json(req.body);
};

