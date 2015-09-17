var AppDispatcher = require('../dispatcher/AppDispatcher'),
  appConstants = require('../constants/appConstants');

var userActions = {
  login() {
    AppDispatcher.handleAction({
      actionType: appConstants.LOGIN,
      data: {}
    });
  },

  logout() {
    AppDispatcher.handleAction({
      actionType: appConstants.LOGOUT,
      data: {}
    });
  }
};

module.exports = userActions;
