const express = require('express');
const router = express.Router();

// example of a route parameter
router.get('/users/:id', (req, res) => {
    res.send(`User ID: ${req.params.id}`);
});

// example of a query parameter
router.get('/search', (req, res) => {
    res.send(`Search query: ${req.query.q}`);
});

module.exports = router;