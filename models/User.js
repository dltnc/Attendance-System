// Name - Email - Password - Roles - AccountStatus
// const mongoose = require('mongoose')

const {model, Schema} = require('mongoose');
const { required } = require('nodemon/lib/config');

const userSchema = new Schema({
    name: {
        type: String,
        required: true,
        minlength: 3,
        maxlength: 10
    },
    email: {
        type: String,
        required: true,
        validate: {
            validator: function(v) {
                return /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()\.,;\s@\"]+\.{0,1})+([^<>()\.,;:\s@\"]{2,}|[\d\.]+))$/.test(v);
            },
            message: (prop) => 'Invalid email: ${prop.value}',
        },
    },
    password: {
        type: String,
        minlength: [6, 'Password is to short'],
        required: true,
    },
    roles: {
        type: [String],
        required: true
    },
    accountStatus: {
        type: String,
        enum: ['PENDING', 'ACTIVE', 'REJECTED'],
        default: 'PENDING',
        required: true
    }
});

const User = model('User', userSchema)

module.exports = User;
