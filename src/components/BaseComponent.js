var React = require('react');

// Class containing all shared methods for components
// to make our lives easier with ES6 classes
class BaseComponent extends React.Component {

  // shared method for binding all custom methods to 'this'
  _bind(...methods) {
    methods.forEach((method) => {
      this[method] = this[method].bind(this); 
    });
  }
}

module.exports = BaseComponent;
