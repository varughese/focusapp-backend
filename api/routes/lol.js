module.exports = function(apiRouter) {
  apiRouter.route('/jay')
    .get(function(req, res) {
		res.send("Yo jason whats good my dog");
	});

	apiRouter.route('/eion')
      .get(function(req, res) {
  		res.send("Hey eion, make sure you see clegg");
  	});

};
