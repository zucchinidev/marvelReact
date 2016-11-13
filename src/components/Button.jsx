import React, {PropTypes} from 'react';
import Spinner from 'react-spinkit';

export default function Button(props) {
  const {label, className, isLoading} = props;
  return (
    <button
      className={className}>
      {isLoading ? <Spinner noFadeIn spinnerName='circle' /> : label}
    </button>
  );
}

Button.defaultProps = {
  className: 'btn--default',
  label: 'Search'
};

Button.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  label: PropTypes.string.isRequired,
  className: PropTypes.string
};