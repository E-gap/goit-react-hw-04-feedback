import { useState } from 'react';
/* import FeedbackOptions from './FeedbackOptions/FeedbackOptions.jsx';
import Statistics from './Statistics/Statistics.jsx';
import Section from './Section/Section.jsx';
import Notification from './Notification/Notification.jsx'; */

export default function App() {
  const [good, useGood] = useState('');
  /* const [neutral, useNeutral] = useState('');
  const [bad, useBad] = useState(''); */

  useGood(5);
  console.log(good);

  /* const handleFeedback = event => {
    this.setState(prevState => {
      return {
        [event.target.name]: prevState[event.target.name] + 1,
      };
    });
  }; */

  /* const countTotal = () => {
    const arrayValuesState = Object.values(this.state);
    const total = arrayValuesState.reduce((acc, el) => {
      return acc + el;
    }, 0);
    return total;
  }; */

  /* const countPercentage = () => {
    const arrayValuesState = Object.values(this.state);
    const total = arrayValuesState.reduce((acc, el) => {
      return acc + el;
    }, 0);
    return Math.round((this.state.Good * 100) / total);
  }; */

  return (
    <div
      style={{
        height: '100vh',
        //display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
      }}
    >
      <p>dfdfdff</p>
      {/* <Section title="Please leave feedback">
        <FeedbackOptions
          options={{ good, neutral, bad }}
          onLeaveFeedback={this.handleFeedback}
        />
      </Section> */}
      {/* <Section title="Statistics">
        {this.state.Good || this.state.Neutral || this.state.Bad ? (
          <Statistics
            good={this.state.Good}
            neutral={this.state.Neutral}
            bad={this.state.Bad}
            total={this.countTotal()}
            positivePercentage={this.countPercentage()}
          />
        ) : (
          <Notification message="There is no feedback" />
        )}
      </Section> */}
    </div>
  );
}
