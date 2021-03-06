const mongoose = require('mongoose');
const bcrypt = require('bcrypt');


const userSchema = mongoose.Schema({
    local : {
        email : String,
        password : String,
        own: Array,
        Balance: Number,
    }
})

userSchema.methods.generateHash = function(password) {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(8),null)
};

userSchema.methods.validPassword = function(password) {
    return bcrypt.compareSync(password, this.local.password)
};

module.exports = mongoose.model('User', userSchema)