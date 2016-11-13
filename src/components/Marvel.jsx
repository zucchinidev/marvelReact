/* eslint no-console:0 */
import React from 'react';
import Logo from './Logo';
import Card from './Card';
import SearchForm from './SearchForm';
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

  static getMarvelUrl(textToSearch) {
    const characters = 'characters?nameStartsWith';
    return `${MarvelApp.apiUrl}${characters}=${textToSearch}&${MarvelApp.apiKeyQueryString}`;
  }

  constructor(...args) {
    super(...args);
    this.state = {
      results: dummyData,
      isLoading: false
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
    const isLoading = true;
    this.setState({isLoading});
    const {textToSearch} = this.state;
    const url = MarvelApp.getMarvelUrl(textToSearch);
    fetch(url).then((response) => response.json())
              .then((res) => {
                this.setState({
                  results: res.data.results,
                  isLoading: false
                });
              });
  }

  render() {
    const {isLoading} = this.state;
    return (
      <div className='container'>
        <Logo isCentered/>
        <SearchForm
          handleChange={this.handleChange}
          handleSummit={this.handleSummit}
          isLoading={isLoading}
        />
        <div className='results'>
          {this.state.results.map((hero) => <Card item={hero} key={hero.id}/>)}
        </div>
      </div>
    );
  }
}
