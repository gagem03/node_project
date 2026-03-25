const express = require('express');
const router = express.Router();

// example of a route parameter
router.get('/users/:id', (req, res) => {
    res.send(`User ID: ${req.params.id}`);
});

module.exports = router;