var React = require('react'),
  BaseComponent = require('./components/BaseComponent'),
  Login = require('./components/Login'),
  WikiQuiki = require('./components/WikiQuiki'),
  userStore = require('./stores/userStore'),
  userActions = require('./actions/userActions');

class App extends BaseComponent { 
  constructor() {
    super();
    this._bind(
      'login',
      'logout',
      '_onChange'
    );
    this.state = {
      auth: userStore.getAuth()
    };
  }

  login () {
    userActions.login();
  }

  logout () {
    userActions.logout();
  }

  _onChange () {
    this.setState({
      auth: userStore.getAuth()
    });
  }

  componentDidMount () {
    userStore.addChangeListener(this._onChange);
  }

  componentDidUnmount () {
    userStore.removeChangeListener(this._onChange);
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
