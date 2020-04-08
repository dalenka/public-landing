// To be used later, now empty bloilerplate

const express = require('express');
const router = express.Router();

router.get('/dbg', function(req, res, next) {
  res.send('okay');
});

module.exports = router;
