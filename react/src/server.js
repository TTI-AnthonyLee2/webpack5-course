const express = require('express');
const path = require('path');
const fs = require('fs');

const app = express();

// create a static folder including files from specified paths
app.use('/static/', express.static(path.resolve(__dirname, '../dist')));

app.get('/', (req, res) => {
  const pathToHtmlFile = path.resolve(__dirname, '../dist/react.html');
  const contentFromHtmlFile = fs.readFileSync(pathToHtmlFile, 'utf-8');

  res.send(contentFromHtmlFile);
});

app.listen(9002, () => {
  console.log('Server is running on http://localhost:9002 !');
})