// Create web server
// Create a web server that listens on port 3000 and serves the comments.html file. Use the comments.html file from the previous exercise.

const express = require('express');
const app = express();
const fs = require('fs');

app.get('/comments', (req, res) => {
  const filePath = __dirname + '/comments.html';
  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      throw err;
    }
    res.send(data);
  });
});

app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});

// Run the server
// Run the server using the following command:
// node comments.js
// Open your web browser and navigate to http://localhost:3000/comments.
// You should see the comments.html file displayed in the browser.