const mongoose = require('mongoose');
const passportLocalMongoose = require('passport-local-mongoose');

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        trim: true,
        required: true
    },
    role:{
        type:String,
        default:'buyer',
        
    },
    wishList:[
        {
            type: mongoose.Schema.Types.ObjectId,
            ref:'Product'
        }
    ],
    cart:[
        {
            type: mongoose.Schema.Types.ObjectId,
            ref:'Product' //ref : kis collection me jakr id lena h
        }
    ]

});

userSchema.plugin(passportLocalMongoose);


const User = mongoose.model('User', userSchema);

module.exports = User;