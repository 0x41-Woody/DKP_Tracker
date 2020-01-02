const express = require('express');
const mongoose = require('mongoose');
const characters = require('./routes/characters');
require('dotenv').config();

const app = express();

//Database Connection
mongoose.connect(`mongodb://${process.env.DB_NAME}`, {useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.error('Could not connect to MongoDB'));

app.use(express.json());
app.use('/api/characters', characters);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`listening on port ${PORT}`));