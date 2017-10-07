var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var getWeekNumber = require("../../utils/date.js")();

var GoalSchema = new Schema({
	focus: {
		type: String,
		required: 'You must enter a focus'
	},
	week: {
		type: Number,
		default: function() {
			return new Date().getWeekNumber();
		}
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
