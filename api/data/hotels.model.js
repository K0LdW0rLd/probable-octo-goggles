const mongoose = require('mongoose');

let reviewSchema = new mongoose.Schema({
    name : {
        type : String,
        required : true
    },
    rating : {
        type : Number,
        min : 0,
        max : 5,
        required : true
    },
    review : {
        type : String,
        required : true
    },
    createdOn : {
        type : Date,
        'default' : Date.now
    }
});

let roomSchema = new mongoose.Schema({
    type : String,
    number : Number,
    description : String,
    photos : [String],
    price : Number
});

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
    currency : String,
    reviews : [reviewSchema],
    rooms : [roomSchema],
    location : {
        address : String,
        // Always store coordinate longitude (E/W), latitude (N/S) order
        coordinates : {
            type : Number,
            index : '2dsphere'
        }
    }
});

mongoose.model('Hotel', hotelSchema);