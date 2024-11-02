const express = require('express');
const helmet = require('helmet');

const app = express();

// Use Helmet
app.use(helmet());

// Your other routes and middleware here

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
"dependencies": {
    "helmet": "3.21.3",
    ...
}
npm install helmet@3.21.3


















































module.exports = app;
const api = require('./server.js');
app.use(express.static('public'));
app.disable('strict-transport-security');
app.use('/_api', api);
app.get("/", function (request, response) {
  response.sendFile(__dirname + '/views/index.html');
});
let port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Your app is listening on port ${port}`);
});
