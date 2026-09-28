const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('Welcome to the Release Readiness Lab API');
});

app.get('/health', (req, res) => {
 const dep = checkout();
 if(!dep){
  res.status(503).json({status: 'error', message: 'Dependency checkout failed'});
  return;
 }

  res.status(200).json({ status: 'ok', version: process.env.npm_package_version });
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
