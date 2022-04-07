const mongoose = require('mongoose');
const autoIncrement = require('mongoose-auto-increment');
 
autoIncrement.initialize(mongoose.connection);

const userSchema = mongoose.Schema({
    email: { 
        type: String, 
        required: true, 
        unique: true, 
        match: /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/
    },
    password: {type: String, required: true},
    userType: {type: String, required: false}
});

userSchema.plugin(autoIncrement.plugin, 'User');
module.exports = mongoose.model('User', userSchema);