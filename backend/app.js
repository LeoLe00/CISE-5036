// app.js

const express = require('express');
const connectDB = require('./config/db');
const cors = require('cors');

// routes
const articles = require('./routes/api/articles');
const suggest = require('./routes/api/suggest')
const moderate = require('./routes/api/moderate');
const analysis = require('./routes/api/analysis');

const app = express();

// Connect Database
connectDB();

// cors
app.use(cors({ origin: true, credentials: true }));

// Init Middleware
app.use(express.json({ extended: false }));

app.get('/', (req, res) => res.send('Hello world!'));

// use Routes
app.use('/api/articles', articles);
app.use('/api/suggest', suggest);
app.use('/api/moderate', moderate);
app.use('/api/analysis', analysis);


const port = process.env.PORT || 8082;

app.listen(port, () => console.log(`Server running on port ${port}`));

// Export the Express API for Vercel serverless functions
module.exports = app;