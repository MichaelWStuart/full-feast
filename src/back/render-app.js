export default (devices, services) =>
  `<!DOCTYPE html>
  <html>
    <head>
      <title>Feastech</title>
      <link href="https://fonts.googleapis.com/css?family=Lato" rel="stylesheet">
      <script>
        window.devices = JSON.parse('${JSON.stringify(devices)}');
        window.services = JSON.parse('${JSON.stringify(services)}');
      </script>
    </head>
    <body>
      <div id="root"></div>
      <script src="/static/bundle.js"></script>
    </body>
  </html>
  `;
