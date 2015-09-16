var React = require('react'),
  BaseComponent = require('./components/BaseComponent'),
  Login = require('./components/Login'),
  WikiQuiki = require('./components/WikiQuiki');

class App extends BaseComponent { 
  constructor() {
    super();
    this._bind(
      'login'
    );
    this.state = {
      auth: false
    };
  }

  login () {
    this.setState({
      auth: true
    });
  }

  render () {
    return (
      <div>
        {this.state.auth ?  <WikiQuiki /> : <Login login={this.login} />}
      </div>
    );
  }
};

React.render(<App />, document.getElementById('app'));
