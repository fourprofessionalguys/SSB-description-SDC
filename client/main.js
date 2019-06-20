import React from 'react';
import ReactDOM from 'react-dom';
import App from '../shared/components/app';
import style from '../shared/main.scss';

const renderHydrate = (Component) => {
  ReactDOM.hydrate(
    <Component />,
    document.getElementById('root'),
  );
};

renderHydrate(App);

