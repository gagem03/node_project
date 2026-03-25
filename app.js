const express = require('express');
const app = express();
const port = process.env.PORT || 8000;

const userRoutes = require('./routes/userRoutes');

//middleware
app.use(userRoutes);

//route handler
app.get('/', (req, res) => {
    res.send('Hello World!');
});

//server setup
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});