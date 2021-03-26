const express = require('express')
const router = express.Router()

// Add your routes here - above the module.exports line

module.exports = router

// Comments route
router.get('/comments', (req, res) => {
    res.redirect('/matrix_hereditaments_comment');

});
// Price route
router.get('/price', (req, res) => {
    res.redirect('/matrix_hereditaments_price');
});