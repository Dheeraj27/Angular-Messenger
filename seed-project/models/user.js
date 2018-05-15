var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var mongooseUniqueValidator = require('mongoose-unique-validator')
var schema = new Schema({
	firstname: {type: String, required: true},
	lastname: {type: String, required: true},
	password: {type: String, required: true},
	email: {type: String, required:true, unique: true},
	messages: [{type: Schema.Types.ObjectId, ref:'Message'}]
});

schema.plugin(mongooseUniqueValidator);

module.exports = mongoose.model('User', schema);