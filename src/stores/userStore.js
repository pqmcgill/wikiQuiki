var AppDispatcher = require('../dispatcher/AppDispatcher'),
  appConstants = require('../constants/appConstants'),
  EventEmitter = require('events').EventEmitter,
  objectAssign = require('react/lib/Object.assign');

var CHANGE_EVENT = 'change';

var _store = {
  auth: false
};

var login = () => {
  _store.auth = true;
};

var logout = () => {
  _store.auth = false;
};

var userStore = objectAssign({}, EventEmitter.prototype, {
  addChangeListener (cb) {
    this.on(CHANGE_EVENT, cb);
  },

  removeChangeListener (cb) {
    this.removeListener(CHANGE_EVENT, cb);
  },

  getAuth () {
    return _store.auth;
  }
});

AppDispatcher.register((payload) => {
  var action = payload.action;
  switch (action.actionType) {
    case appConstants.LOGIN:
      login();
      userStore.emit(CHANGE_EVENT);
      break;
    case appConstants.LOGOUT:
      logout();
      userStore.emit(CHANGE_EVENT);
      break;
    default:
      return true;
  }
});

module.exports = userStore;
