import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Statistics from 'components/Statistics';
import FeedbackOptions from 'components/FeedbackOptions';
import Section from 'components/Section';
import { FormWrap } from './FeedbackForm.styled';

export default class FeedbackForm extends Component {
  state = {
    good: this.props.state.good,
    neutral: this.props.state.neutral,
    bad: this.props.state.bad,
  };

  handleFeedbackBtn = e => {
    const keyName = e.target.name;

    this.setState(prevState => {
      return { [keyName]: prevState[keyName] + 1 };
    });
  };

  countTotalFeedback = () => {
    const values = Object.values(this.state);

    const total = values.reduce((total, value) => {
      return total + value;
    }, 0);

    return total;
  };

  countPositiveFeedbackPercentage = () => {
    const total = this.countTotalFeedback();
    const percentage = Math.round((this.state['good'] / total) * 100);

    return percentage ? percentage : 0;
  };

  render() {
    const { good, neutral, bad } = this.state;

    return (
      <FormWrap>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={Object.keys(this.state)}
            onLeaveFeedback={this.handleFeedbackBtn}
          />
        </Section>

        <Section title="Statistics">
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={this.countTotalFeedback()}
            positivePercentage={this.countPositiveFeedbackPercentage()}
          />
        </Section>
      </FormWrap>
    );
  }
}

FeedbackForm.propTypes = {
  state: PropTypes.object,
};
