const express = require('express');
const app = express();
const port = process.env.PORT || 8000;
const ejs = require('ejs');

const userRoutes = require('./routes/userRoutes');

//view engine
app.set('view engine', 'ejs');
app.set('views', './views');

//global middleware
app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({ exended: true }));
app.use(userRoutes);

//route handler
app.get('/', (req, res) => {
    res.send('Hello World!');
});

//server setup
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});