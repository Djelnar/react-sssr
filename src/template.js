export const Template = ({ body }) => `
    <!DOCTYPE html>
    <html>
      <head>
        <title>React Server Side Rendering</title>
      </head>
      <body>
        <div id="root">${body}</div>
        <script src="vendor.js"></script>
        <script src="main.js"></script>
      </body>      
    </html>
  `
