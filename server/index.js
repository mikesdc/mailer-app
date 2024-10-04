const express = require('express');
const app = express();
const port = 3001; 

app.get('/', (req, res) => {
  res.send('Hello from your Express server!');
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});