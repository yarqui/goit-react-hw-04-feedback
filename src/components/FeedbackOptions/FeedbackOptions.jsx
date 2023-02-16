import PropTypes from 'prop-types';
import { OptionButton } from './FeedbackOptions.styled';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return options.map(option => (
    <OptionButton
      key={option}
      name={option}
      type="button"
      onClick={onLeaveFeedback}
    >
      {option.charAt(0).toUpperCase() + option.slice(1)}
    </OptionButton>
  ));
};

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;
