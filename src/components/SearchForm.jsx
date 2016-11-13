import React, {PropTypes} from 'react';

export default function SearchForm({
  handleSummit,
  handleChange
}) {
  return (
    <form onSubmit={handleSummit}>
      <input type='text' onChange={handleChange}/>
      <button>
        Search
      </button>
    </form>
  );
}

SearchForm.propTypes = {
  handleSummit: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired
};
