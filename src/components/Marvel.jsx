import React from 'react';
import Logo from './Logo';
import Card from './Card';
import dummyData from '../data/dummy';

const API_URL = 'https://gateway.marvel.com:443/v1/public/';
const APIKEY_QUERYSTRING = 'apikey=dffbff78239bd510c4663f2650082c60';

export default class MarvelApp extends React.Component {
  static get apiUrl() {
    return API_URL;
  }

  static get apiKeyQueryString() {
    return APIKEY_QUERYSTRING;
  }

  constructor(...args) {
    super(...args);
    this.state = {
      results: dummyData
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSummit = this.handleSummit.bind(this);
  }

  handleChange({currentTarget}) {
    this.setState({textToSearch: currentTarget.value}, () => {
      console.log(this.state.textToSearch);
    });

  }


  handleSummit(event) {
    event.preventDefault();
    const {textToSearch} = this.state;
    const url = `${MarvelApp.apiUrl}characters?nameStartsWith=${textToSearch}&${MarvelApp.apiKeyQueryString}`;
    fetch(url).then((response) => response.json())
      .then((res) => {
        this.setState({
          results: res.data.results
        });
      });
  }

  render() {
    return (
      <div className='container'>
        <Logo isCentered/>
        <form onSubmit={this.handleSummit}>
          <input type='text' onChange={this.handleChange}/>
          <button>
            Search
          </button>
        </form>
        <div className='results'>
          {this.state.results.map((hero) => <Card item={hero} key={hero.id}/>)}
        </div>
      </div>
    );
  }
}
