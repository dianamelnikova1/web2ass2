// server.js
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const travelRoutes = require('./routes/travelRoutes');

const app = express();
const port = 3000;

// Middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));

// Routes
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'home.html'));
});

app.use('/travelagency', travelRoutes);

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
