module.exports = function(apiRouter) {
  var goalList = require('../controllers/goalcontroller.js');

  // todoList Routes
  apiRouter.route('/goals')
    .get(goalList.list_all_goals)
    .post(goalList.create_a_goal);


  apiRouter.route('/goals/:goalId')
    .get(goalList.read_a_goal)
    .put(goalList.update_a_goal)
    .delete(goalList.delete_a_goal);
};
