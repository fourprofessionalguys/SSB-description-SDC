import React from 'react';
import { renderToString } from 'react-dom/server';
import HTML from '../shared/components/HTML';
import App from '../shared/components/app';

const renderPage = (req, res) => {
  const app = renderToString(<App />);
  const Html = renderToString(<HTML body={app} />);
  return res.send(`<!DOCTYPE html>${Html}`);
};

export default renderPage;
