

const router = require('express').Router();

const memberRoutes = require('./member-routes');
const postRoutes = require('./post-routes');
const commentRoutes = require('./comment-routes');


router.use('/comments', commentRoutes);
router.use('/members', memberRoutes);
router.use('/posts', postRoutes);


module.exports = router;
