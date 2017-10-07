module.exports = function(apiRouter) {
  apiRouter.route('/jay')
    .get(function(req, res) {
		res.send("Yo jason whats good my dog");
	});

};
