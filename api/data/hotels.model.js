const mongoose = require('mongoose');

let hotelSchema = new mongoose.Schema({
    name : {
        type : String,
        require : true
    },
    starts : {
        type : Number,
        min : 0,
        max : 5,
        'default' : 0
    },
    services : [String],
    description : String,
    photos : [String],
    currency : String
});

mongoose.model('Hotel', hotelSchema);