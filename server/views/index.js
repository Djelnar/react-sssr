export const Index = ({ body }) => {
  return (`
    <!DOCTYPE html>
    <html>
      <head>
        <title>React Server Side Rendering</title>
      </head>
      <body>
        <div id="app">${body}</div>
        <script src="main.js"></script>
        <script src="dll.vendor.js"></script>
      </body>      
    </html>
  `)
}