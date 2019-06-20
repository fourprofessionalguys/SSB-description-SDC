import React from 'react';

const HTML = props => (
  <html lang="en">
    <head>
      <title>Descriptions</title>
    </head>
    <body>
      <div id="root" dangerouslySetInnerHTML={{ __html: props.html }} />
      <script dangerouslySetInnerHTML={{ __html: `window.__SERIALIZED_STATE__ = JSON.stringify(${props.serverState})` }} />
      <script type="text/javascript" src="https://unpkg.com/react@16.8.6/umd/react.development.js" />
      <script type="text/javascript" src="https://unpkg.com/react-dom@16.8.6/umd/react-dom.development.js" />
      <script type="text/javascript" src="https://unpkg.com/jquery@3.4.1/dist/jquery.js" />
      <script type="text/javascript" src="https://unpkg.com/prop-types@15.7.2/prop-types.js" />
      <script type="application/javascript" src="/main.bundle.js" />
    </body>
  </html>
);

export default HTML;
