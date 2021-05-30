const express = require('express');
const bodyParser = require('body-parser');
const toDoRouter = require('./routes/todo.router.js');

const app = express();
app.use(bodyParser.urlencoded({extended: true}));

app.use('/todo', toDoRouter);

// Serve back static files by default
app.use(express.static('server/public'))

// Start listening for requests on a specific port
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log('Setting sail from port', PORT);
});