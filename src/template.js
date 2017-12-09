export const Template = ({ body, preloadedState }) => `
    <!DOCTYPE html>
    <base href="/">
    <html>
      <head>
        <meta charset="UTF-8"/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <title>React Server Side Rendering</title>
      </head>
      <body>
        <div id="root">${body}</div>
        <script>
          window.__PRELOADED_STATE__ = ${JSON.stringify(preloadedState).replace(/</g, '\\u003c')}
        </script>
        <script src="/vendor.js"></script>
        <script src="/main.js"></script>
      </body>      
    </html>
  `
