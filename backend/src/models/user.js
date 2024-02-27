const mongoose = require('mongoose');
require('../mongoose');
const validator = require('validator')

const userSchema = new mongoose.Schema({
    name:{
        type: String,
        trim: true,
        required: true,
    },
    email:{
        type: String,
        validate(value){
            if(!validator.isEmail(value)){
                throw new Error('Invalid email');
            }
        },
        unique: true,
    },
    password: {
        type:String,
        validate(value){
            if(value.length < 6){
                throw new Error('Password cant be less than 6 characters');
            }
            if(value.includes('password')){
                throw new Error('Password cant contain password')
            }
        }
    }
})

const User = mongoose.model('user', userSchema);

module.exports = User;