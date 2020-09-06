

const router = require('express').Router();

const memberRoutes = require('./member-routes');
const postRoutes = require('./post-routes');


router.use('/members', memberRoutes);
router.use('/posts', postRoutes);


module.exports = router;
