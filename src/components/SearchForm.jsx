import React, {PropTypes} from 'react';
import Button from './Button';
import './SearchForm.scss';

export default function SearchForm({
  handleSummit,
  handleChange,
  isLoading
}) {
  return (
    <form className='form--element' onSubmit={handleSummit}>
      <input
        className='search--input'
        disabled={isLoading}
        type='text'
        onChange={handleChange}
      />
      <Button
        isLoading={isLoading}
      />
    </form>
  );
}

SearchForm.propTypes = {
  handleSummit: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired,
  isLoading: PropTypes.bool.isRequired
};
