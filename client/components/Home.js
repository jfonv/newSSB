import React from 'react';
import Fight from './Fight';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.update = this.update.bind();
  }

  update() {
    this.setState({});
  }

  render() {
    return (
      <div>
        <h1>Hi!</h1>
        <Fight />
      </div>
    );
  }
}

export default Home;
