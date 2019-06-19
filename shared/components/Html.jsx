import React from 'react';

const HTML = props => (
  <html lang="en">
    <head>
      <title>Descriptions</title>
    </head>
    <body>
      <div id="root" dangerouslySetInnerHTML={{ __html: props.html }}></div>
      <script dangerouslySetInnerHTML={{ __html: `window.__SERIALIZED_STATE__ = JSON.stringify(${props.serverState})` }} />
      <script type="application/javascript" src="/main.bundle.js" />
    </body>
  </html>
);

export default HTML;
