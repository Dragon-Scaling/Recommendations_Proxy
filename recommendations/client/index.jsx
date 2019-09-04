import React from 'react';
import ReactDOM from 'react-dom';
import WebFont from 'webfontloader';
import App from './components/App';

WebFont.load({
  google: {
    families: ['Nunito Sans:400,500,600,700,800,900', 'Montserrat:400,500,600,700,800'],
  },
});

const Recommendations = {
  App,
  React,
  ReactDOM,
};


ReactDOM.render(<App />, document.getElementById('Recommendations'));

export default Recommendations;
