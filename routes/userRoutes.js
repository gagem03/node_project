const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

// home page
router.get('/home', (req, res) => {
    let user = "Gage";
    res.render('home', {user});
});

//this route will link the createUser function to route handler
router.post('/users', userController.createUser);

// example of a route parameter
router.get('/users/:id', (req, res) => {
    res.send(`User ID: ${req.params.id}`);
});

// example of a query parameter
router.get('/search', (req, res) => {
    res.send(`Search query: ${req.query.q}`);
});

// example of a middleware function (notice *.use() and next())
router.use((req, res, next) => {
    console.log(`Request URL: ${req.url}.   Time: ${new Date()}`);
    next();
});

// commonjs syntax to export the router (configured in package.json "type": "commonjs")
module.exports = router;