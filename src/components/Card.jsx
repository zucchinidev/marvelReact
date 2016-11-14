import React, {PropTypes, Component} from 'react';
import './Card.scss';
import IconStarOutline from 'react-icons/lib/md/star-outline';
import IconStarFull from 'react-icons/lib/md/star';
import lscache from 'lscache';

export default class Card extends Component {
  constructor(...args) {
    super(...args);
    this.state = {
      isFav: this.props.isFav
    };
    console.log(this.state, this.props);

    this.addFav = this.addFav.bind(this);
    this.removeFav = this.removeFav.bind(this);
  }

  addFav() {
    this.setState({isFav: true});
    this.saveToLocalStorage();
  }

  removeFav() {
    this.setState({isFav: false});
    this.saveToLocalStorage();
  }

  saveToLocalStorage() {
    const {id} = this.props.item;
    const favs = lscache.get('favs') || [];

    if (favs.indexOf(id) < 0) {
      favs.push(id);
    } else {
      favs.splice(favs.indexOf(id), 1);
    }
    lscache.set('favs', favs);
  }

  render() {
    const {item} = this.props;
    const img = `${item.thumbnail.path}.${item.thumbnail.extension}`;
    return (
      <div className='card'>
        {
          this.state.isFav
          ? <IconStarFull onClick={this.removeFav}/>
          : <IconStarOutline onClick={this.addFav}/>
        }
        <img className='card-image' src={img} alt={item.name}/>
        <div className='card-content'>
          <h2>{item.name}</h2>
          <p className='card-description'>{item.description}</p>
        </div>
      </div>
    );
  }
}

Card.propTypes = {
  item: PropTypes.object,
  isFav: PropTypes.bool
};
