// backend/server.js
require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const uri = process.env.MONGODB_URI;
mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => console.log('MongoDB connection established'))
.catch((error) => console.error('MongoDB connection error:', error));


// Import your model (if you have one)
const Item = require('./models/Item'); // Adjust path if needed

// Example Routes
app.get('/api/items', async (req, res) => { /* ... (same as before) */ });
app.post('/api/items', async (req, res) => { /* ... (same as before) */ });

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});