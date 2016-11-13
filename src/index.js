import React from 'react';
import ReactDom from 'react-dom';
import MarvelApp from './components/Marvel';
import './index.scss';
ReactDom.render(
  <MarvelApp />,
  document.getElementById('root')
);