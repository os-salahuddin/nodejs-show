const express = require('express')
const router = express.Router();

router.get('/', (req, res) => {
    res.send('in user listing')
})

router.get('/:id', (req, res) => {
    res.send(req.params.id);
})

router.get('/new', (req, res) => {
    res.send('in user form')
})



module.exports = router;