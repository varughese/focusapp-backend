var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var GoalSchema = new Schema({
	focus: {
		type: String,
		required: 'You must enter a focus'
	},
	week: {
		type: Date,
		default: Date.now
	},
	why: {
		type: String
	},
	how: {
		type: String // will become more complicated
	},
	overview: {
		type: String
	}
});

module.exports = mongoose.model('Goals', GoalSchema);
