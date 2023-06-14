import React, { Component } from 'react';
import Sections from './Sections/Sections';
import Feedback from './Feedback/Feedback';
import Statistics from './Statistics/Statistics';
import Notification from './Notification/Notification';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  onFeedback = (state) => {
    this.setState(prevState => ({
      [state]: prevState[state] + 1,
    }));
  };
    
  render() {
    return (
      <div>
        <Sections title='Please leave feedback'>
          <Feedback
            options={options}
            onFeedback={this.onFeedback}
          ></Feedback>
        </Sections>

        <Sections title='Statistics'>
          <Statistics good={good} neutral={neutral} bad={bad} total={total} positivePercentage={positivePercentage} ></Statistics>
          <Notification message='There is no feedback'></Notification>
        </Sections>

      </div>
    );
  }
}

export default App;
