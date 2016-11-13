import React, {PropTypes} from 'react';
import './SearchForm.scss';

export default function SearchForm({
  handleSummit,
  handleChange
}) {
  return (
    <form className='form--element' onSubmit={handleSummit}>
      <input className='search--input' type='text' onChange={handleChange}/>
      <button className='btn--default'>
        Search
      </button>
    </form>
  );
}

SearchForm.propTypes = {
  handleSummit: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired
};
