const express = require('express');
const mongoose = require('mongoose');
const PORT = 5000;

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

mongoose
    .connect('mongodb://127.0.0.1:27017/testDB', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('connected to mongodb'))
    .catch(e => console.log(e));

app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));