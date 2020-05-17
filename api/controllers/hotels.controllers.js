const dbconn = require('../data/dbconnection');
const hotelData = require('../data/hotel-data.json');

module.exports.hotelsGetAll = function(req, res) {

    const db = dbconn.get();

    console.log('db', db);
    
    console.log('GET the JSON');
    console.log(req.query);

    let offset = 0;
    let count = 5;

    if (req.query && req.query.offset) {
        offset = parseInt(req.query.offset, 10);
    }

    if (req.query && req.query.count) {
        count = parseInt(req.query.count, 10);
    }


    const returnData = hotelData.slice(offset,offset+count);

    res
        .status(200)
        .json( hotelData );
};

module.exports.hotelsGetOne = function(req, res) {
    const hotelId = req.params.hotelId;
    const thisHotel = hotelData[hotelId];
    console.log('GET hotelId', hotelId);
    res
        .status(200)
        .json( thisHotel );
};

module.exports.hotelsAddOne = function(req, res) {
    console.log('POST new hotel');
    console.log(req.body);
    res
        .status(200)
        .json(req.body);
}