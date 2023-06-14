import React, { Component } from 'react';
import Sections from './Sections/Sections';
import Feedback from './Feedback/Feedback';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  }
  on
  render() {
    return (
      <div>
        <Sections>
          <Feedback></Feedback>
        </Sections>

        <Sections>
          <Statistic></Statistic>
          <Notification></Notification>
        </Sections>
      </div>
    );
  }
}

export default App;
