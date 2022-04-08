const mongoose = require('mongoose');
const autoIncrement = require('mongoose-auto-increment');
 
autoIncrement.initialize(mongoose.connection);

const platSchema = mongoose.Schema({
    nomPlat : {type: String, required: true},
    descriptionPlat : {type: String, required: true},
    prixPlat : {type: Number, required: true},
    imgPlat : {type: String}
});

platSchema.plugin(autoIncrement.plugin, 'Plat');
module.exports = mongoose.model('Plat', platSchema);