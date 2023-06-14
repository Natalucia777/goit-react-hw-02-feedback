import PropTypes from 'prop-types';
import { Component } from 'react';

const Feedback = ({ options, onFeedback}) => {
  return (
    <Component>
      <div>
        {options.map(option => {
          return (
            <button type='button'
              onClick={() => onFeedback(option)}
              key={option}>
              {option}
            </button>
          );
          })}
      </div>
    </Component>
  );
};

Feedback.propTypes = {
  options: PropTypes.arrayOf(
    PropTypes.string.isRequired).isRequired,
  onFeedback: PropTypes.func.isRequired,
};

export default Feedback;