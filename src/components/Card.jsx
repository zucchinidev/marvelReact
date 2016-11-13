import React, {PropTypes} from 'react';
import './Card.scss';

export default function Card(props) {
  const item = props.item;
  const img = `${item.thumbnail.path}.${item.thumbnail.extension}`;
  return (
    <div className='card' key={item.id}>
      <img className='card-image' src={img} alt={item.name}/>
      <div className='card-content'>
        <h2>{item.name}</h2>
        <p className='card-description'>{item.description}</p>
      </div>
    </div>
  );
}

Card.propTypes = {
  item: PropTypes.object
};
