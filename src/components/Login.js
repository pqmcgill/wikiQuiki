var React = require('react'),
  BaseComponent = require('./BaseComponent');

var propTypes = {
  login: React.PropTypes.func.isRequired
};

class Login extends BaseComponent {
  constructor() {
    super();
    this._bind('handleClick');
  }

  handleClick () {
    this.props.login();
  }

  render() {
    return (
      <div onClick={this.handleClick}>Login</div>
    );
  }
};

Login.propTypes = propTypes; 

module.exports = Login;
