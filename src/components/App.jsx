import { Component } from 'react';
import {Notification} from './Notification/Notification';
import { Statistics } from './Statistics/Statistics';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Section } from './Section/Section';
import { useState } from 'react';

function App() {

  const [good,setGood]= useState(0);
  const [neutral,setNeutral]= useState(0);
  const [bad,setBad]=useState(0);
  const countTotalFeedback = () => {
    return good + bad + neutral;
  };
  const countPositiveFeedbackPercentage = () => {
    return countTotalFeedback() === 0 ? 0 :((good / countTotalFeedback()) * 100).toFixed(2);
  };
  const handleClick = e => {
    switch(e.target.name){
      case 'good':
        setGood(prevState=>prevState+1);
        break;
      case 'neutral':
        setNeutral(prevState=>prevState+1);
        break;
      case 'bad':
        setBad(prevState=>prevState+1);
        break;
      default:
        return;
    }
  };
  const options = ['good', 'neutral', 'bad' ];
  const total = countTotalFeedback();
  const positivePercentage = countPositiveFeedbackPercentage();

    return (
      <>
        <Section title='Please leave feedback'>
        <FeedbackOptions
          options={options}
          handleClick={handleClick}
        ></FeedbackOptions>
        </Section>
        <Section title="Statistics">
        {total===0 ? <Notification message='There is no feedback' /> :
        <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          total={total}
          positivePercentage={positivePercentage}
        ></Statistics>
        }
        </Section>
      </>
    );
  
}

export default App;


 

/* class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  countTotalFeedback = () => {
    return this.state.good + this.state.bad + this.state.neutral;
  };
  countPositiveFeedbackPercentage = () => {
    return this.countTotalFeedback() === 0 ? 0 :((this.state.good / this.countTotalFeedback()) * 100).toFixed(2);
  };
  handleClick = e => {
    this.setState(prevState => {
      return {
        [e.target.name]: prevState[e.target.name] + 1,
      };
    });
  };

  render() {
    const { good, neutral, bad } = this.state;
    const options = Object.keys(this.state);
    const total = this.countTotalFeedback();
    const positivePercentage = this.countPositiveFeedbackPercentage();
    return (
      <>
        <Section title='Please leave feedback'>
        <FeedbackOptions
          options={options}
          handleClick={this.handleClick}
        ></FeedbackOptions>
        </Section>
        <Section title="Statistics">
        {total===0 ? <Notification message='There is no feedback' /> :
        <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          total={total}
          positivePercentage={positivePercentage}
        ></Statistics>
        }
        </Section>
      </>
    );
  }
}
export default App;
 */