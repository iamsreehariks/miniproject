const express = require('express');
const mongoose = require('mongoose'); // Specify the module to import

const app = express();

// Routes
app.get('/', (req, res) => {
  res.send('hello node api');
});

app.get('/blog', (req, res) => {
  res.send('hello my name is riyaa');
});

mongoose.set("strictQuery", false);

mongoose.connect(`mongodb+srv://miniproject10cs:riya10@cluster0.019fvlr.mongodb.net/Node-API?retryWrites=true&w=majority&appName=Cluster0`)
  .then(() => {
    console.log('connected to mongoDb');
    app.listen(3000, () => {
      console.log('node api is running on node 3000');
    });
  })
  .catch((error) => {
    console.log(error);
  });
