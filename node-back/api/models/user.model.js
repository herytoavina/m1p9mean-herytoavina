const mongoose = require('mongoose');
const autoIncrement = require('mongoose-auto-increment');
 
autoIncrement.initialize(mongoose.connection);

const userSchema = mongoose.Schema({
    username: {type: String, required:true},
    email: { 
        type: String, 
        required: true, 
        unique: true, 
        match: /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/
    },
    password: {type: String, required: true},
    roles: [
        {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Role"
        }
      ]
    });

userSchema.plugin(autoIncrement.plugin, 'User');
module.exports = mongoose.model('User', userSchema);