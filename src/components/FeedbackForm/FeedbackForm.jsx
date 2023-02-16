import { useState } from 'react';
import Statistics from 'components/Statistics';
import FeedbackOptions from 'components/FeedbackOptions';
import Section from 'components/Section';
import { FormWrap } from './FeedbackForm.styled';

export const FeedbackForm = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const [totalFeedback, setTotalFeedback] = useState(0);

  const options = ['good', 'neutral', 'bad'];

  const handleFeedbackBtn = e => {
    const keyName = e.target.name;

    switch (keyName) {
      case 'good':
        setGood(state => state + 1);
        setTotalFeedback(state => state + 1);
        break;
      case 'neutral':
        setNeutral(state => state + 1);
        setTotalFeedback(state => state + 1);
        break;
      case 'bad':
        setBad(state => state + 1);
        setTotalFeedback(state => state + 1);
        break;

      default:
        return;
    }
  };

  const countPositiveFeedbackPercentage = () => {
    const percentage = Math.round((good / totalFeedback) * 100);

    return percentage ? percentage : 0;
  };

  return (
    <FormWrap>
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={options}
          onLeaveFeedback={handleFeedbackBtn}
        />
      </Section>

      <Section title="Statistics">
        <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          total={totalFeedback}
          positivePercentage={countPositiveFeedbackPercentage()}
        />
      </Section>
    </FormWrap>
  );
};

export default FeedbackForm;
