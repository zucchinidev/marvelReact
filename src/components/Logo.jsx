import React, {PropTypes} from 'react';

export default function Logo(props) {
  const className = props.isCentered ? 'has-text-centered' : '';
  return (
    <div className={className}>
      <img src='images/marvel-logo.jpg' className='img--logo' role='presentation'/>
    </div>
  );
}

Logo.propTypes = {
  isCentered: PropTypes.bool
};
