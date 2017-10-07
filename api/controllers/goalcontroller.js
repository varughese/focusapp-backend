var mongoose = require('mongoose'),
	Goal = mongoose.model('Goals');

exports.list_all_goals = function(req, res) {
	Goal.find({}, function(err, goal) {
		if (err)
			res.send(err);
		
		res.json({goals: goal});
	});
};

exports.create_a_goal = function(req, res) {
	var new_goal = new Goal(req.body);
	console.log(new_goal);
	new_goal.save(function(err, goal) {
		if (err)
			res.send(err);
		res.json(goal);
	});
};

exports.read_a_goal = function(req, res) {
	Goal.findById(req.params.goalId, function(err, goal) {
		if (err)
			res.send(err);
		res.json(goal);
	});
};

exports.update_a_goal = function(req, res) {
	Goal.findOneAndUpdate({
		_id: req.params.goalId
	}, req.body, {
		new: true
	}, function(err, goal) {
		if (err)
			res.send(err);
		res.json(goal);
	});
};

exports.delete_a_goal = function(req, res) {

	Goal.remove({
		_id: req.params.goalId
	}, function(err, goal) {
		if (err)
			res.send(err);
		res.json({message: 'Goal successfully deleted'});
	});
};
