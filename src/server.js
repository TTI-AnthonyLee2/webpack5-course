const express = require('express');
const path = require('path');
const fs = require('fs');

const app = express();

// create a static folder including files from specified paths
app.use('/static/', express.static(path.resolve(__dirname, '../dist')));

app.get('/', (req, res) => {
  const pathToHtmlFile = path.resolve(__dirname, '../dist/hello-world.html');
  const contentFromHtmlFile = fs.readFileSync(pathToHtmlFile, 'utf-8'); // return contents with string type

  res.send(contentFromHtmlFile);
  // or
  // res.sendFile(pathToHtmlFile);
});

app.get('/react/', (req, res) => {
  const pathToHtmlFile = path.resolve(__dirname, '../dist/react.html');
  const contentFromHtmlFile = fs.readFileSync(pathToHtmlFile, 'utf-8');

  res.send(contentFromHtmlFile);
});

app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000 !');
})