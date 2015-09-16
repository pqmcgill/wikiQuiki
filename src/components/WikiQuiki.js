var React = require('react'),
  BaseComponent = require('./BaseComponent');

class WikiQuiki extends BaseComponent {
  constructor() {
    super();
    this._bind();
  }

  render () {
    return (
      <h1>Logged In!</h1>
    )
  }
}

module.exports = WikiQuiki;
