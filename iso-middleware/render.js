import React from 'react';
import { renderToString } from 'react-dom/server';
import Html from '../shared/components/Html';
import App from '../shared/components/index';

const renderPage = (req, res) => {
  const app = renderToString(<App />);
  const html = renderToString(<Html body={app} />);
  return res.send(`<!DOCTYPE html>${html}`);
};

export default renderPage;
